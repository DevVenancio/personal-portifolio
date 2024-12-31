import { ReactNode } from "react"

interface ProjectContentProps{
  children: ReactNode
}

export function ProjectContent({ children }: ProjectContentProps){
  return(
    <div className='w-4/6 flex flex-1 mt-4 text-sm'>
      <span>
        { children }
      </span>
    </div>
  )
}