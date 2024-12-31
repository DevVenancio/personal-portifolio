import { ElementType } from "react"

interface SkillIconProps{
  icon: ElementType
}

export function SkillIcon({ icon: Icon }: SkillIconProps){
  return(
    <div>
      <Icon className='size-[48px] text-[#4F1A73]'/>
    </div>
  )
}