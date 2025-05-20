'use client'

import { use, useEffect, useState } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { Task } from '@prisma/client'
import { TaskForm } from '../../components/TaskForm'
import { useRouter } from 'next/navigation'

interface EditTaskPageProps {
  params: Promise<{
    id: string
  }>
}

export default function EditTaskPage({ params }: EditTaskPageProps) {
  const router = useRouter()
  const [task, setTask] = useState<Task | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = use(params)

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`/api/tasks/${id}`)
        if (response.ok) {
          const data = await response.json()
          setTask(data)
        }
      } catch (error) {
        console.error('Failed to fetch task:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchTask()
  }, [id])

  const handleUpdateTask = async (data: {
    title: string
    description?: string
  }) => {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      router.push('/tasks')
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <Skeleton className="h-8 w-48 mb-8" />
        <div className="max-w-2xl space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    )
  }

  if (!task) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Task Not Found</h1>
        <p className="text-gray-600">The task you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Task</h1>
      <div className="max-w-2xl">
        <TaskForm task={task} onSubmit={handleUpdateTask} />
      </div>
    </div>
  )
} 