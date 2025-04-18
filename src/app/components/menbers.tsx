"use client";
import { useState, useEffect, FormEvent, MouseEvent } from "react";
import { User } from "../lib/usertype";

const Menbers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState('');

    // ユーザー一覧取得
    useEffect(() => {
        fetch('../api/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // ユーザー追加
    const addUser = async(e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        const newUser:User ={
            id:users.length+1,
            name:name
        };
        if (!name.trim()) return;
        const res = await fetch('../api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });
        setUsers([...users, newUser]);
        setName('');
        return await res.json();
    };

    return (
        <div className="m-10 inline-block">
            <p className="text-blue-500">参加者は名前を追加</p>
            <h1 className="text-2xl my-4 text-center sm:text-left">参加者</h1>
            <form onSubmit={(e) => addUser(e)}>
                <input onChange={e => setName(e.target.value)} value={name} type="text" className="border-2" />
                <button onClick={(e) => addUser(e)} className="bg-black text-white px-2 py-1 rounded-md mx-2">追加</button>
            </form>
            <ul className="relative w-2/3">
                {
                    users.map((user) => (
                        <li key={user.id} className="m-2">{user.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Menbers;