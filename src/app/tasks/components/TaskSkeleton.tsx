import { Card, CardContent, CardFooter } from '@/components/ui/card'

import { Skeleton } from '@/components/ui/skeleton'

export function TaskSkeleton() {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
          </div>
          <Skeleton className="h-6 w-[60px]" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Skeleton className="h-9 w-[80px]" />
        <Skeleton className="h-9 w-[80px]" />
      </CardFooter>
    </Card>
  )
} 