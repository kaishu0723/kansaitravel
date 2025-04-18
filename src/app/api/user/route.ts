import { NextRequest, NextResponse } from "next/server";
import { Pool } from 'pg';

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "maykansaitravel",
    password: "uu4Whbz-",
    port: 5432,
});

export async function GET(){
    const client=await pool.connect();
    const {rows}=await client.query('SELECT * FROM users');
    client.release();
    return NextResponse.json(rows,{status:200});
}

export async function POST(req:NextRequest){
    const {id,name} =await req.json();
    const client=await pool.connect();
    await client.query('INSERT INTO users(id,name) VALUES($1,$2)',[id,name]);
    client.release();
    return NextResponse.json(name,{status:200});
}