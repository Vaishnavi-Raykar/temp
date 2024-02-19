import Link from 'next/link'
import React from 'react'

export default function Navbar(){
    return(
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link className="text-white font-bold" href={'/'}>Task Management</Link>
        <Link className="bg-white p-2 rounded-md font-bold" href="/addTask">Add Task</Link>
    </nav>
    );
}
