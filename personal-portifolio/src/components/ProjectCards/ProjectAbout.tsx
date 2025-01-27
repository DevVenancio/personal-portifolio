import { Github, TrafficCone } from 'lucide-react'

interface ProjectAboutProps {
  link?: string,
  disabled?: boolean
}

export function ProjectAbout({ link, disabled = false }: ProjectAboutProps){

  var style: string = (disabled) ? 'w-28 flex flex-row text-sm items-center justify-center bg-[#3D1515] rounded-md py-1 pointer-events-none' 
                                 : 'w-28 flex flex-row text-sm items-center justify-center bg-[#4F1A73] rounded-md py-1 hover:bg-[#A337D6]'

  var icon = (disabled) ? <TrafficCone className='size-5 mr-1.5' /> : <Github className='size-5 mr-1.5' />

  return(
    <div className='w-4/6 flex flex-row items-center justify-between'>
      <span>
        Saiba Mais:
      </span>
      <a href={link} className={style}>
        {icon}

      </a>
    </div>
  )
}