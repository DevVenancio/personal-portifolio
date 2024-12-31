import { ReactNode } from "react"

interface SkillContentProps {
  children: ReactNode
}

export function SkillContent({ children }: SkillContentProps){
  return(
    <div className='w-5/6 text-center justify-center mt-3'>
      { children }
    </div>
  )
}