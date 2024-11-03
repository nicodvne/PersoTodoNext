'use client'

import React from 'react'
import { Button } from '@/components/ui/button';
import AddTodo from '@/components/AddTodo';
import Link from 'next/link';

const NewPage = () => {
    return (
        <div>
            <h1 className='text-4xl font-extrabold uppercase'>This is new page</h1>

            <div className='flex my-10 justify-end items-center up'>
                <Link href="/">Go to homepage</Link>
            </div>

            <AddTodo/>
        </div>
    )
}

export default NewPage
