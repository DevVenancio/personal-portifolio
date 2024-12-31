import { Github } from 'lucide-react'

interface ProjectAboutProps {
  link: string
}

export function ProjectAbout({ link }: ProjectAboutProps){
  return(
    <div className='w-4/6 flex flex-row items-center justify-between'>
      <span>
        Saiba Mais:
      </span>
      <a href={link} className='w-[110px] flex flex-row text-sm items-center justify-center bg-[#4F1A73] rounded-md py-1 hover:bg-[#A337D6]'>
        <Github className='mr-1.5' />
        GitHub
      </a>
    </div>
  )
}