import { ElementType } from "react"

interface TechCardIconProps{
  icon: ElementType
}

export function TechCardIcon({ icon: Icon }: TechCardIconProps){
  return(
    <div>
      <Icon className='size-6 text-[#4F1A73]'/>
    </div>
  )
}