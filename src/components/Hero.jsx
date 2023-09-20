'use client'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { MapPinIcon } from '@/components/MapPinIcon'
import { Tab } from '@headlessui/react'
import { Button } from '@/components/Button'


export function Hero() {
  return (
      <Tab.Group defaultIndex={1}>
        <Tab.List className="flex flex-row-reverse mr-24">
          <Tab className="px-2 z-50">🇺🇸</Tab>
          <Tab className="px-2 z-50">🇧🇷</Tab>
        </Tab.List>
        <Tab.Panels>
          {english()}
          {portuguese()}
        </Tab.Panels>
      </Tab.Group>
  )
}

function portuguese() {
  return (
    <Tab.Panel>
      <div className="relative py-12">
      <BackgroundImage className="-bottom-14 -top-36 z-0" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-purple-550 sm:text-7xl">
            Elixir Fortaleza Conf <span className='text-purple-200'>2023</span>
          </h1>
          <Button href="https://bit.ly/45YuUyo" className="mt-10 w-full sm:hidden">
            Inscrições
          </Button>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-purple-900">
            <p>
              Uma conferência do <a className='text-purple-550' href='https://erlef.org/'>ecossistema de Erlang</a>,
              feita por <a className='text-purple-550' href='http://elixiremfoco.com/'> Elixir em Foco</a>,
              <a className='text-purple-550' href='https://elug-ce.github.io/'> Elug CE</a>,
              <a className='text-purple-550' href='https://utfpr.curitiba.br/dainf/'> DAINF</a> e <a className='text-purple-550' href='https://ppgca.ct.utfpr.edu.br/'> PPGCA da UTFPR</a>,
              <a className='text-purple-550' href='https://dc.ufc.br/pt/'> Departamento de Computação da UFC</a> e
              <a className='text-purple-550' href='https://virtual.ufc.br/'> UFC Virtual</a>. Este é um evento da
              comunidade <a className='text-purple-550' href='https://elixir-lang.org/'>Elixir</a>.
            </p>
            <div className="order-first -mx-4 550/10 py-4">
              <div className="mx-auto flex items-center gap-4 px-4 font-mono text-md">
                <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
                <p>Palestras - primeiro dia:</p>
                <p className='text-sm'>21 de setembro, das 9h às 12h e das 14h às 18h</p>
              </div>
              <div className="mx-auto flex items-center gap-4 px-4 font-mono text-md">
                <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
                <p>Palestras - segundo dia:</p>
                <p className='text-sm'>22 de setembro, das 9h às 12h e das 14h às 18h</p>
              </div>
              <div className="mx-auto flex items-center gap-4 px-4 font-mono text-md">
                <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
                <p><a className='text-purple-550' href="https://www.youtube.com/watch?v=yBT29ADYiWc">&quot;Esquenta&quot; do Elixir Fortaleza (online no YouTube)</a>:</p>
                <p className='text-sm'>15 de setembro, à noite</p>
              </div>
            </div>

            <div className="order-first -mx-4 550/10 pt-4">
              <a className='hover:text-purple-550' href='https://goo.gl/maps/Pg8Ca25qYXctohFU7'>
                <div className="mx-auto flex items-top gap-4 px-4 font-mono text-md">
                  <MapPinIcon className="mt-1.5 h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
                  <p className='pl-2 font-semibold'> Local</p>
                  <p className='text-sm mt-3'>Clique para ver no Google Maps</p>
                </div>
              </a>
            </div>
            <p className='font-mono'>
              Auditório do Bloco 910, Departamento de Computação, Campus do Pici,
              Universidade Federal do Ceará (UFC).
            </p>
          </div>
        </div>
      </Container>
    </div>
    </Tab.Panel>
  )
}

function english() {
  return (
    <Tab.Panel>
      <div className="relative py-12">
      <BackgroundImage className="-bottom-14 -top-36 z-0" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-purple-550 sm:text-7xl">
            Elixir Fortaleza Conf <span className='text-purple-200'>2023</span>
          </h1>
          <Button href="https://bit.ly/45YuUyo" className="mt-10 w-full sm:hidden">
            Tickets
          </Button>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-purple-900">
            <p>
            A conference of the <a className='text-purple-550' href='https://erlef.org/'>Erlang ecosystem</a>, organized by
              <a className='text-purple-550' href='http://elixiremfoco.com/'> Elixir em Foco</a>,
              <a className='text-purple-550' href='https://elug-ce.github.io/'> Elug CE</a>,
              <a className='text-purple-550' href='https://utfpr.curitiba.br/dainf/'> UTFPR&apos;s DAINF</a>,
              <a className='text-purple-550' href='https://ppgca.ct.utfpr.edu.br/'> UTFPR&apos;s PPGCA</a>,
              <a className='text-purple-550' href='https://dc.ufc.br/pt/'> UFC&apos;s Department of Computing</a>,
              and <a className='text-purple-550' href='https://virtual.ufc.br/'> UFC Virtual</a>.
              This is an event of the <a className='text-purple-550' href='https://elixir-lang.org/'>Elixir</a> community.
                </p>
            <div className="order-first -mx-4 550/10 py-4">
              <div className="mx-auto flex items-center gap-4 px-4 font-mono text-md">
                <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
                <p>Talks - first day:</p>
                <p className='text-sm'>September 21, (from 9am to 6pm)</p>
              </div>
              <div className="mx-auto flex items-center gap-4 px-4 font-mono text-md">
                <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
                <p>Talks - second day:</p>
                <p className='text-sm'>September 22, (from 9am to 6pm)</p>
              </div>
            </div>

            <div className="order-first -mx-4 550/10 pt-4">
              <a className='hover:text-purple-550' href='https://goo.gl/maps/Pg8Ca25qYXctohFU7'>
                <div className="mx-auto flex items-top gap-4 px-4 font-mono text-md">
                  <MapPinIcon className="mt-1.5 h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
                  <p className='pl-2 font-semibold'> Location</p>
                  <p className='text-sm mt-3'>Click to see it on Google Maps</p>
                </div>
              </a>
            </div>
            <p className='font-mono'>
              Auditório do Bloco 910, Departamento de Computação, Campus do Pici,
              Universidade Federal do Ceará (UFC).
            </p>
          </div>
        </div>
      </Container>
    </div>
    </Tab.Panel>
  )
}
