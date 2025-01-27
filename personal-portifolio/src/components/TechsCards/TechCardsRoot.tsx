import { ReactNode } from "react"

interface TechCardsRootProps {
  children: ReactNode
}

export function TechCardsRoot({ children }: TechCardsRootProps){
  return(
    <div className='w-11 h-11 bg-[#0D0D0D] rounded-2xl p-4 flex flex-col justify-center items-center hover:bg-[#101010]'>
      {children}
    </div>
  )
}