import { Task } from '@prisma/client'
import { TaskItem } from './TaskItem'

interface TaskListProps {
  tasks: Task[]
  onDelete: (id: number) => void
}

export function TaskList({ tasks, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks found. Create one to get started!
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  )
} 