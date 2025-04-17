import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/lib/usertype";

let users:User[]=[];

export async function GET(){
    return NextResponse.json(users);
}

export async function POST(req:NextRequest){
    const {name}=await req.json();
    if(!name){
        return NextResponse.json({error:'No name'},{status:400});
    }
    const newUser={id:Date.now(),name};
    users.push(newUser);
    return NextResponse.json(newUser,{status:201});
}

export async function DELETE(req:NextRequest){
    const {id}=await req.json();
    if(!id){
        return NextResponse.json({error:"No id"},{status:400});
    }
    users=users.filter((user)=>user.id!==id);
    return NextResponse.json({message:'delete'});
}