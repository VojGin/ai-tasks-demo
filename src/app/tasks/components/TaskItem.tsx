import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Task } from '@prisma/client'

interface TaskItemProps {
  task: Task
  onDelete: (id: number) => void
}

export function TaskItem({ task, onDelete }: TaskItemProps) {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            {task.description && (
              <p className="mt-2 text-gray-600">{task.description}</p>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Link href={`/tasks/${task.id}/edit`}>
          <Button variant="outline" size="sm">
            <Pencil className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </Link>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(task.id)}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
} 