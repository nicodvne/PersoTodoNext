import React from 'react'
import Form from 'next/form'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import * as actions from '@/actions/actions'

const AddTodo = () => {
  return (
    <div className='justify-center'>
        <Form action={actions.createTodo}>
          <Label htmlFor="inputTodoTitle">Titre du todo</Label>
          <Input type='text' id='inputTodoTitle' name='inputTodoTitle' placeholder='...'/>

            <div className='flex justify-center py-5'>
              <Button type='submit'>Créer un todo</Button>
            </div>  
        </Form>
    </div>
  )
}

export default AddTodo
