import { Boxes, Brain, CodeXml, Coffee, Figma, FolderGit2, Github, Grid2X2, Handshake, Languages, Lightbulb, Linkedin, MessageSquareMore } from 'lucide-react';
import { Project } from './components/ProjectCards';
import { Skills } from './components/SkillCards';
import { Separator } from './components/ui/separator';
import './input.css'
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <>
      <nav className='w-full h-12 bg-[#0D0D0D] text-[#F2F2F2] flex flex-row items-center pl-10 pr-10 *:p-3 hover:*:underline fixed'>
        <a href="#home">Home</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Skills</a>
        <a className='w-full flex flex-row items-center justify-end' href="#about-me">Sobre Mim</a>
      </nav>
      <main className='flex flex-col items-center justify-center text-[#F2F2F2]'>
        <div className='w-2/3 flex flex-col items-center pt-12'>
          <h2 id='home' className='text-5xl'>
            Olá! Eu sou...
          </h2>
          <h2 className='text-6xl text-[#A337D6]'>
            <TypeAnimation
              sequence={[
                'Desenvolvedor Back-End.',
                1000,
                'Engenheiro de Software.',
                1000,
                'Gambiarreiro.',
                1000,
              ]}
              wrapper="span"
              speed={35}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </h2>
        </div>
        
        <Separator className='w-3/4 my-8'/>

        <div className='w-3/4 flex flex-row items-center justify-start text-sm'>
          <section>
            <article className='*:pt-2 *:pb-2'>
              <p>
                Desenvolvedor voltado para o <mark className='bg-transparent text-[#A337D6]'>Back-End</mark>, tendo conhecimento em linguagens como <mark className='bg-transparent text-[#A337D6]'>C#</mark>, <mark className='bg-transparent text-[#A337D6]'>Python</mark>, <mark className='bg-transparent text-[#A337D6]'>TypeScript</mark> e <mark className='bg-transparent text-[#A337D6]'>Visual Basic</mark>.
              </p>
              <p>
                Também detem conhecimento na área de <mark className='bg-transparent text-[#A337D6]'>Qualidade de Software</mark>, desde a realização de <mark className='bg-transparent text-[#A337D6]'>Testes de Software</mark> (exploratórios, unitários, regressão, funcionais, peer-to-peer) como para a <mark className='bg-transparent text-[#A337D6]'>Automação de Testes e Rotinas</mark>, utilizando <mark className='bg-transparent text-[#A337D6]'>Robot Framework</mark> e <mark className='bg-transparent text-[#A337D6]'>SikuliX</mark>.
              </p>
            </article>
          </section>
        </div>

        <Separator className='w-3/4 my-8'/>

        <div className='w-2/3 flex flex-col items-center'>
          <h2 id='projects' className='text-5xl'>
              Projetos
          </h2>
          <div className='grid grid-cols-2 place-items-center gap-x-8 mt-4'>
            <Project.Root>
              <Project.Title title='coffee-cli'/>
              <Project.TagsRoot>
                <Project.Tags tech='JavaScript'/>
              </Project.TagsRoot>
              <Project.Content >
                <p> CLI for lazy Devs. <br/>Create a new project simply and easily.</p>
              </Project.Content>
              <Project.About link='https://github.com/DevVenancio/coffee-cli'/>
            </Project.Root>

            <Project.Root>
              <Project.Title title='libri'/>
              <Project.TagsRoot>
                <Project.Tags tech='ReactJS'/>
                <Project.Tags tech='TypeScript'/>
                <Project.Tags tech='TailwindCSS'/>
                <Project.Tags tech='NextJS'/>
              </Project.TagsRoot>
              <Project.Content>
                <p> Um site para amante de livros. Repositório para organização de coleções de livros.</p>
              </Project.Content>
              <Project.About link='https://github.com/DevVenancio/libri'/>
            </Project.Root>

          </div>
        </div>
        
        <Separator className='w-3/4 my-8'/>

        <div className='w-2/3 h-auto flex flex-col gap-2 items-center'>
          <h2 id='skills' className='text-5xl'>
            Skills
          </h2>
          <div className='w-full flex flex-row items-center justify-around mt-3'>
            <div className='flex flex-col items-center gap-2'>
              <h2 className='text-3xl mb-4'>
                Soft Skills
              </h2>
              <Skills.Root>
                <Skills.Icon icon={FolderGit2}/>
                <Skills.Content>
                  <p>Domínio em ferramentas de Versionamento: <br /> <mark className='bg-transparent text-[#A337D6]'>GitHub</mark> e <mark className='bg-transparent text-[#A337D6]'>Azure DevOps</mark> </p>
                </Skills.Content>
              </Skills.Root>

              <Skills.Root>
                <Skills.Icon icon={Grid2X2}/>
                <Skills.Content>
                  <p>Domínio do ambiente Microsoft: <br /> <mark className='bg-transparent text-[#A337D6]'>Pacote Office</mark> e <mark className='bg-transparent text-[#A337D6]'>Teams</mark> </p>
                </Skills.Content>              
              </Skills.Root>

              <Skills.Root>
                <Skills.Icon icon={Figma}/>
                <Skills.Content>
                  <p>Conhecimento básico na plataforma <mark className='bg-transparent text-[#A337D6]'>Figma</mark> para criação de design </p>
                </Skills.Content>
              </Skills.Root>

              <Skills.Root>
                <Skills.Icon icon={CodeXml}/>
                <Skills.Content>
                  <p>Domínio em <br /> <mark className='bg-transparent text-[#A337D6]'>Lógica de Programação</mark> </p>
                </Skills.Content>
              </Skills.Root>

              <Skills.Root>
                <Skills.Icon icon={Languages}/>
                <Skills.Content>
                  <p>Domínio intermediário na <mark className='bg-transparent text-[#A337D6]'>Língua Inglesa</mark> </p>
                </Skills.Content>
              </Skills.Root>
            </div>

            <Separator orientation="vertical" className='h-[950px]'/>

            <div className='flex flex-col items-center gap-2'>
              <h2 className='text-3xl mb-4'>
                Hard Skills
              </h2>
              <Skills.Root>
                <Skills.Icon icon={Handshake}/>
                <Skills.Content>
                  <p> Trabalho em Equipe </p>
                </Skills.Content>
              </Skills.Root>

              <Skills.Root>
                <Skills.Icon icon={MessageSquareMore}/>
                <Skills.Content>
                  <p> Comunicação e Proatividade </p>
                </Skills.Content>
              </Skills.Root>

              <Skills.Root>
                <Skills.Icon icon={Boxes}/>
                <Skills.Content>
                  <p> Organização e Resolução de Problemas </p>
                </Skills.Content>
              </Skills.Root>

              <Skills.Root>
                <Skills.Icon icon={Brain}/>
                <Skills.Content>
                  <p> Inteligência Emocional </p>
                </Skills.Content>
              </Skills.Root>

              <Skills.Root>
                <Skills.Icon icon={Lightbulb}/>
                <Skills.Content>
                  <p> Criatividade </p>
                </Skills.Content>
              </Skills.Root>
            </div>
          </div>
        </div>

        <Separator className='w-3/4 my-8'/>

        <div className='w-2/3 flex flex-col items-center justify-center'>
          <h2 id='about-me' className='text-5xl'>
            Sobre Mim
          </h2>
          <div className='flex flex-row items-center justify-center'>
            <img src="https://lh3.googleusercontent.com/d/1AJ4p5XNGieh3pJHkEEuYkDHg1YEV62iG" alt="" className='size-32 rounded-full m-2 mr-4' />
            <p>Olá, me chamo <mark className='bg-transparent text-[#A337D6]'>João Pedro</mark> e eu sou um desenvolvedor focado em Back-end, porém, tenho uma paixão por estudar outras tecnologias e se desafiar com novos projetos, fugindo da minha zona de conforto e me sintonizando com novas tendências e inovações do mercado.</p>
          </div>
          <p>
            Conheci o mundo da tecnologia através de um programa de Robótica durante meu Ensino Fundamental, o que despertou meu interesse profissional e me mostrou no que eu realmente sou apaixonado.
            <br />
            <br />
            Como um bom curioso e muita vontade de aprendizado, corri atrás de querer me aprofundar cada vez mais nessa área, o que me levou a minha formação técnica como <mark className='bg-transparent text-[#A337D6]'>Técnico de Informática</mark> pelo Instituto Federal do Tocantins (IFTO) e também a minha graduação na área de <mark className='bg-transparent text-[#A337D6]'>Engenharia de Software</mark> pelo Universidade Alves Faria (UNIALFA).
          </p>
          <br />
          <p>
            Minhas Redes Sociais e Profissionais:
          </p>
          <div className='flex flex-row mt-3 gap-4'>
            <a href='https://github.com/DevVenancio' className='w-[9rem] h-[3rem] flex flex-row text-sm items-center justify-center bg-[#4F1A73] rounded-md py-1 hover:bg-[#A337D6]'>
            <Github className='mr-1.5' />
              GitHub
            </a>
            <a href='https://www.linkedin.com/in/jo%C3%A3o-pedro-ven%C3%A2ncio-barbosa-916520213/' className='w-[9rem] h-[3rem] flex flex-row text-sm items-center justify-center bg-[#4F1A73] rounded-md py-1 hover:bg-[#A337D6]'>
            <Linkedin className='mr-1.5' />
              LinkedIn
            </a>
          </div>
        </div>

        <Separator className='w-3/4 my-8'/>

      </main>

      <footer className='w-full h-12 bg-[#0D0D0D] text-[#F2F2F2] flex flex-col items-center justify-center'>
          <Coffee className='size-4 text-[#4F1A73]'/>
          <span className='text-[10px]'>Desenvolvido (com muito café) por João Pedro </span>
      </footer>
    </>
  )
}

export default App
