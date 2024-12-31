interface ProjectTagProps {
  tech: string
}

export function ProjectTag({ tech }: ProjectTagProps){
  return(
    <div className='w-19 h-6 bg-[#544ED9] rounded-md text-xs flex flex-1 items-center p-1 mx-1.5 mt-2'>
      <span>
        {tech}
      </span>
    </div>
  )
}