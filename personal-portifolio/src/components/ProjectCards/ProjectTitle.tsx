interface ProjectTitleProps {
  title: string
}

export function ProjectTitle({ title }: ProjectTitleProps){
  return(
    <div className='text-2xl'>
      <span>
        {title}
      </span>
    </div>
  )
}