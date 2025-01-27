import { Boxes, Scale3D, CodeXml, Coffee, Figma, FolderGit2, Github, Grid2X2, Handshake, Languages, Lightbulb, Linkedin, MessageSquareMore } from 'lucide-react';
import { Project } from './components/ProjectCards';
import { Skills } from './components/SkillCards';
import { Separator } from './components/ui/separator';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card';
import './input.css'
import { TypeAnimation } from 'react-type-animation';
import { ParticlesBg } from './components/Particles'
import { Emoji, Icons } from './components/Icons/index'
import { TechCards } from './components/TechsCards/index'

function App() {
  return (
    <>
      <ParticlesBg />
      <nav className='z-20 w-full h-12 bg-[#0D0D0D] text-[#F2F2F2] flex flex-row items-center pl-10 pr-10 *:p-3 hover:*:underline fixed'>
        <a href="#home">Home</a>
        <a href="#tech">Tecnologias</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Skills</a>
        <a className='w-full flex flex-row items-center justify-end' href="#about-me">Sobre Mim</a>
      </nav>
      <main className='z-10 flex flex-col items-center justify-center text-[#F2F2F2]'>
        <div className='z-10 w-2/3 h-[64rem] flex flex-col items-center justify-center pt-12'>
        <h2 id='home' className='pt-[32rem] -mt-[32rem] flex flex-row text-7xl *:size-16'>
         <Emoji.NerdEmoji /> <Emoji.FingerUpEmoji />
        </h2>
          <h2 className='text-7xl'>
            Olá! Eu sou...
          </h2>
          <h2 className='z-10 text-7xl text-[#A337D6]'>
            <TypeAnimation
              sequence={[
                'Desenvolvedor Back-End',
                1000,
                'Back-End Developer',
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

        <div className='z-10 w-3/4 flex flex-col items-center justify-start text-sm'>
          <h2 id='tech' className='pt-14 -mt-14 text-5xl mb-4'>
              Tecnologias
          </h2>
          <section>
            <article className='*:pt-2 *:pb-2'>
              <p>
                Desenvolvedor com foco em <mark className='bg-transparent text-[#A337D6]'>Back-End</mark>, utilizando linguagens como <mark className='bg-transparent text-[#A337D6]'>C#</mark>, <mark className='bg-transparent text-[#A337D6]'>Python</mark> e <mark className='bg-transparent text-[#A337D6]'>Visual Basic</mark>.
              </p>
              <p>
                Também detenho conhecimento na área de <mark className='bg-transparent text-[#A337D6]'>Qualidade de Software</mark>, desde a realização de <mark className='bg-transparent text-[#A337D6]'>Testes de Software</mark> (exploratórios, unitários, regressão, funcionais, peer-to-peer) como para a <mark className='bg-transparent text-[#A337D6]'>Automação de Testes e Rotinas</mark> utilizando <mark className='bg-transparent text-[#A337D6]'>Robot Framework</mark> e <mark className='bg-transparent text-[#A337D6]'>SikuliX</mark>.
              </p>
            </article>
          </section>
          <div className='z-10 w-3/4 flex flex-row m-4 justify-center items-center *:h-1/3 *:w-1/3'>
            <div>
              <h2 className='text-3xl mb-4 text-center'>
                IDEs
              </h2>
              <div className='flex flex-row items-center justify-center gap-3'>

                <HoverCard>
                  <HoverCardTrigger> 
                    <TechCards.Root>
                      <TechCards.Icon icon={Icons.VisualStudioIcon} />
                    </TechCards.Root>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p><mark className='bg-transparent text-[#A337D6]'> Plataforma: </mark>Visual Studio</p>
                    <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>💼 Profissional</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger> 
                    <TechCards.Root>
                      <TechCards.Icon icon={Icons.VSCodeIcon} />
                    </TechCards.Root>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p><mark className='bg-transparent text-[#A337D6]'> Plataforma: </mark>Visual Studio Code</p>
                    <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>💼 Profissional</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger> 
                    <TechCards.Root>
                      <TechCards.Icon icon={Icons.RiderIcon} />
                    </TechCards.Root>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p><mark className='bg-transparent text-[#A337D6]'> Plataforma: </mark>Jetbrains Rider</p>
                    <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>📚 Acadêmico</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger> 
                    <TechCards.Root>
                      <TechCards.Icon icon={Icons.PyCharmIcon} />
                    </TechCards.Root>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p><mark className='bg-transparent text-[#A337D6]'> Plataforma: </mark>Jetbrains PyCharm</p>
                    <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>📚 Acadêmico</p>
                  </HoverCardContent>
                </HoverCard>

              </div>
            </div>
            <Separator orientation="vertical" />
            <div>
              <h2 className='text-3xl mb-4 text-center'>
                Linguagens
              </h2>
              <div className='flex flex-row items-center justify-center gap-3'>

                <HoverCard>
                  <HoverCardTrigger> 
                    <TechCards.Root>
                      <TechCards.Icon icon={Icons.CSharpIcon} />
                    </TechCards.Root>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p><mark className='bg-transparent text-[#A337D6]'> Linguagem: </mark>C# / C-Sharp</p>
                    <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>💼 Profissional</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger> 
                    <TechCards.Root>
                      <TechCards.Icon icon={Icons.PythonIcon} />
                    </TechCards.Root>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p><mark className='bg-transparent text-[#A337D6]'> Linguaem: </mark>Python</p>
                    <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>💼 Profissional</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger> 
                    <TechCards.Root>
                      <TechCards.Icon icon={Icons.TypeScriptIcon} />
                    </TechCards.Root>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p><mark className='bg-transparent text-[#A337D6]'> Linguagem: </mark>TypeScript</p>
                    <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>📚 Acadêmico</p>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger> 
                    <TechCards.Root>
                      <TechCards.Icon icon={Icons.JavaScriptIcon} />
                    </TechCards.Root>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <p><mark className='bg-transparent text-[#A337D6]'> Linguagem: </mark>JavaScript</p>
                    <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>📚 Acadêmico</p>
                  </HoverCardContent>
                </HoverCard>

              </div>
            </div>
            <Separator orientation="vertical" />
            <div>
              <h2 className='text-3xl mb-4 text-center'>  
                Banco de Dados
              </h2>
              <div className='flex flex-row items-center justify-center gap-3'>
                  <HoverCard>
                    <HoverCardTrigger> 
                      <TechCards.Root>
                        <TechCards.Icon icon={Icons.SQLServerIcon} />
                      </TechCards.Root>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p><mark className='bg-transparent text-[#A337D6]'> Banco de Dados: </mark>SQL Server</p>
                      <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>💼 Profissional</p>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger> 
                      <TechCards.Root>
                        <TechCards.Icon icon={Icons.MySQLIcon} />
                      </TechCards.Root>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p><mark className='bg-transparent text-[#A337D6]'> Banco de Dados: </mark>MySQL</p>
                      <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>📚 Acadêmico</p>
                    </HoverCardContent>
                  </HoverCard>

                  <HoverCard>
                    <HoverCardTrigger> 
                      <TechCards.Root>
                        <TechCards.Icon icon={Icons.PostgreSQLIcon} />
                      </TechCards.Root>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p><mark className='bg-transparent text-[#A337D6]'> Banco de Dados: </mark>PostgreSQL</p>
                      <p><mark className='bg-transparent text-[#A337D6]'> Conhecimento: </mark>📚 Acadêmico</p>
                    </HoverCardContent>
                  </HoverCard>

                </div>
              </div>
            </div>
          </div>

        <Separator className='w-3/4 my-8'/>

        <div className='z-10 w-2/3 flex flex-col items-center'>
          <h2 id='projects' className='pt-14 -mt-14 text-5xl'>
              Projetos
          </h2>
          <div className='z-10 flex flex-row flex-wrap place-items-center gap-8 mt-4'>
            <Project.Root>
              <Project.Title title='coffee-cli'/>
              <Project.TagsRoot>
                <Icons.TypeScriptIcon />
              </Project.TagsRoot>
              <Project.Content>
                <p>  </p>
              </Project.Content>
              <Project.About link='https://github.com/DevVenancio/coffee-cli' disabled={true}/>
            </Project.Root>

            <Project.Root>
              <Project.Title title='minimal-api'/>
              <Project.TagsRoot>
                <Icons.DotNetIcon />
                <Icons.CSharpIcon />
              </Project.TagsRoot>
              <Project.Content>
                <p>  </p>
              </Project.Content>
              <Project.About link='https://github.com/DevVenancio/minimal-api' disabled={true}/>
            </Project.Root>

            <Project.Root>
              <Project.Title title='casa-loterica'/>
              <Project.TagsRoot>
                <Icons.DotNetIcon />
                <Icons.CSharpIcon />
              </Project.TagsRoot>
              <Project.Content>
                <p>  </p>
              </Project.Content>
              <Project.About link='https://github.com/DevVenancio/casa-loterica' disabled={true}/>
            </Project.Root>

          </div>
        </div>
        
        <Separator className='w-3/4 my-8'/>

        <div className='z-10 w-2/3 h-auto flex flex-col gap-2 items-center'>
          <h2 id='skills' className='pt-14 -mt-14 text-5xl'>
            Skills
          </h2>
          <div className='z-10 w-full flex flex-row items-center justify-around mt-3'>
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
                  <p>Domínio do ambiente Microsoft: <br /> <mark className='bg-transparent text-[#A337D6]'>Microsoft 365</mark> </p>
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
                <Skills.Icon icon={Scale3D}/>
                <Skills.Content>
                  <p> Adaptabilidade </p>
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

        <div className='z-10 w-2/3 flex flex-col items-center justify-center'>
          <h2 id='about-me' className='text-5xl'>
            Sobre Mim
          </h2>
          <div className='z-10 flex flex-row items-center justify-center'>
            <img src="https://lh3.googleusercontent.com/d/1AJ4p5XNGieh3pJHkEEuYkDHg1YEV62iG" alt="" className='z-10 size-32 rounded-full m-2 mr-4' />
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

      <footer className='z-10 w-full h-12 bg-[#0D0D0D] text-[#F2F2F2] flex flex-col items-center justify-center'>
          <Coffee className='size-4 text-[#4F1A73]'/>
          <span className='text-[10px]'>Desenvolvido (com muito café) por João Pedro </span>
      </footer>
    </>
  )
}

export default App
