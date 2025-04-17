import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/lib/usertype";
import * as sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import path from 'path';

const db=await open({
    filename:path.join(process.cwd(),'src/app/db/users.db'),
    driver:sqlite3.Database
});

let users:User[]=[];

export async function GET(){
    const rows=await db.all('SELECT * FROM users');
    console.log(rows);
    users=rows;
    return NextResponse.json(users);
}

export async function POST(req:NextRequest){
    const {name}=await req.json();
    if(!name){
        return NextResponse.json({error:'No name'},{status:400});
    }
    const newId=Date.now();
    const newUser={id:newId,name};
    users.push(newUser);
    await db.run('INSERT INTO users (id,name) VALUES (?,?)',[newId,name]);
    return NextResponse.json(newUser,{status:201});
}

export async function DELETE(req:NextRequest){
    const {id}=await req.json();
    if(!id){
        return NextResponse.json({error:"No id"},{status:400});
    }
    users=users.filter((user)=>user.id!==id);
    await db.run('DELETE FROM users WHERE id=?',id);
    return NextResponse.json({message:'delete'});
}