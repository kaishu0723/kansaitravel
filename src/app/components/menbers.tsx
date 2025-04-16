"use client"
import { useState, useEffect, FormEvent, MouseEvent } from "react"

const Menbers = () => {
    type User = {
        id: number;
        name: string;
    };
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState('');

    // ユーザー一覧取得
    // useEffect(() => {
    //     fetch('../api/user')
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // }, []);

    // ユーザー追加
    const addUser = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        if (!name.trim()) return;
        // const res = await fetch('../api/user', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name }),
        // });
        // const newUser = await res.json();
        const newUser: User = { id: users.length + 1, name: name };
        setUsers([...users, newUser]);
        setName('');
    };

    // ユーザー削除
    const deleteUser = (id: number) => {
        // await fetch('../api/user', {
        //     method: 'DELETE',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ id }),
        // });
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="m-10 inline-block">
            <p className="text-blue-500">参加者は名前を追加</p>
            <h1 className="text-2xl my-4">参加者</h1>
            <form onSubmit={(e) => addUser(e)}>
                <input onChange={e => setName(e.target.value)} value={name} type="text" className="border-2" />
                <button onClick={(e) => addUser(e)} className="bg-black text-white px-2 py-1 rounded-md mx-2">追加</button>
            </form>
            <ul className="relative w-2/3">
                {
                    users.map((user) => (
                        <li key={user.id} className="m-2 w-[100%] flex justify-between">
                            <p>{user.name}</p>
                            <button onClick={() => deleteUser(user.id)} className="text-red-500">削除</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Menbers;