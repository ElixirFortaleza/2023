import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-8 bg-purple-950">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Desenvolvido e mantido por 
          <a className='text-purple-550' href='http://elixiremfoco.com'> Elixir em Foco</a>. 
          Em caso de dúvida, envie email para elixiremfoco@gmail.com.
        </p>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Este evento recebeu apoio parcial da 
          <a className='text-purple-550' href='https://bit.ly/3Jma95g'> Erlang Ecosystem Foundation</a>. 
          Acesse a página e se associe!.
        </p>
      </Container>
    </footer>
  )
}
