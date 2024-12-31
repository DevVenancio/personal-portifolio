import { ReactNode } from "react"

interface SkillRootProps {
  children: ReactNode
}

export function SkillRoot({ children }: SkillRootProps){
  return(
    <div className='w-[23rem] h-44 bg-[#0D0D0D] rounded-2xl mb-2 p-4 flex flex-col items-center justify-center'>
      {children}
    </div>
  )
}