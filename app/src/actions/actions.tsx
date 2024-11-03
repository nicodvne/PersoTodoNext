'use server';

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo (formData: FormData) {
    const inputTitle = formData.get('inputTodoTitle') as string;

    if (!inputTitle.trim()) {
        return;
    }

    await prisma.persoTodo.create({
        data: {
            title: inputTitle
        }
    });

    revalidatePath('/');
}
