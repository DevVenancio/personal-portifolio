import { ReactNode } from "react"

interface ProjectTagRootProps {
  children: ReactNode
}

export function ProjectTagRoot({ children }: ProjectTagRootProps){
  return(
    <div className='flex flex-row my-1'>
      {children}
    </div>
  )
}