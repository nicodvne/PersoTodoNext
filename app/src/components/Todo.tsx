'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'


const Todo = () => {

  const router = useRouter();

  const goToNew = () => {
    router.push('/new');
  }

  return (
    <div>
      <h1 className='text-4xl font-extrabold uppercase'>
        My personnal Todo App
      </h1>

      <div className='flex my-10 justify-end items-center up'>
        <Button className='uppercase font-extrabold' onClick={goToNew}>
          Add Todo
        </Button>
      </div>
    </div>
  )
}

export default Todo
