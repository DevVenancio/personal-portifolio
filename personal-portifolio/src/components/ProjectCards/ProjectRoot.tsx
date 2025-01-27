import { ReactNode } from "react"

interface ProjectRootProps {
  children: ReactNode
}

export function ProjectRoot({ children }: ProjectRootProps){
  return(
    <div className='w-[24rem] h-64 bg-[#0D0D0D] rounded-2xl p-4 flex flex-col items-center hover:bg-[#101010]'>
      {children}
    </div>
  )
}