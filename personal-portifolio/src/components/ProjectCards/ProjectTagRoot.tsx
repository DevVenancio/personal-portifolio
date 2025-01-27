import { ReactNode } from "react"

interface ProjectTagRootProps {
  children: ReactNode
}

export function ProjectTagRoot({ children }: ProjectTagRootProps){
  return(
    <div className='flex flex-row *:m-2 *:size-6'>
      {children}
    </div>
  )
}