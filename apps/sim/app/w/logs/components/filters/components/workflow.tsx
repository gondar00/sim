import { useMemo } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useFilterStore } from '@/app/w/logs/stores/store'

export default function Workflow() {
  const { logs, workflowIds, toggleWorkflowId, setWorkflowIds } = useFilterStore()

  // Extract unique workflows from logs
  const workflows = useMemo(() => {
    const uniqueWorkflows = new Map()

    logs.forEach((log) => {
      if (log.workflow && !uniqueWorkflows.has(log.workflowId)) {
        uniqueWorkflows.set(log.workflowId, {
          id: log.workflowId,
          name: log.workflow.name,
          color: log.workflow.color,
        })
      }
    })

    return Array.from(uniqueWorkflows.values())
  }, [logs])

  // Get display text for the dropdown button
  const getSelectedWorkflowsText = () => {
    if (workflowIds.length === 0) return 'All workflows'
    if (workflowIds.length === 1) {
      const selected = workflows.find((w) => w.id === workflowIds[0])
      return selected ? selected.name : 'All workflows'
    }
    return `${workflowIds.length} workflows selected`
  }

  // Check if a workflow is selected
  const isWorkflowSelected = (workflowId: string) => {
    return workflowIds.includes(workflowId)
  }

  // Clear all selections
  const clearSelections = () => {
    setWorkflowIds([])
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='sm' className='w-full justify-between font-normal text-sm'>
          {getSelectedWorkflowsText()}
          <ChevronDown className='ml-2 h-4 w-4 text-muted-foreground' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='max-h-[300px] w-[180px] overflow-y-auto'>
        <DropdownMenuItem
          key='all'
          onSelect={(e) => {
            e.preventDefault()
            clearSelections()
          }}
          className='flex cursor-pointer items-center justify-between p-2 text-sm'
        >
          <span>All workflows</span>
          {workflowIds.length === 0 && <Check className='h-4 w-4 text-primary' />}
        </DropdownMenuItem>

        {workflows.length > 0 && <DropdownMenuSeparator />}

        {workflows.map((workflow) => (
          <DropdownMenuItem
            key={workflow.id}
            onSelect={(e) => {
              e.preventDefault()
              toggleWorkflowId(workflow.id)
            }}
            className='flex cursor-pointer items-center justify-between p-2 text-sm'
          >
            <div className='flex items-center'>
              <div
                className='mr-2 h-2 w-2 rounded-full'
                style={{ backgroundColor: workflow.color }}
              />
              {workflow.name}
            </div>
            {isWorkflowSelected(workflow.id) && <Check className='h-4 w-4 text-primary' />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
