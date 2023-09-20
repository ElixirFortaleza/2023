'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import adolfoNetoImage from '@/images/avatars/adolfo-neto.jpg'
import diegoAndradeImage from '@/images/avatars/diego-andrade.jpg'
import elaineNaomiImage from '@/images/avatars/elaine-naomi.jpg'
import joelJucaImage from '@/images/avatars/joel-juca.jpg'
import jerminioTorresImage from '@/images/avatars/herminio-torres.jpg'
import lubienImage from '@/images/avatars/lubien.jpg'
import cristineGuadelupeImage from '@/images/avatars/cristine-guadelupe.jpg'
import franciscoHeronImage from '@/images/avatars/francisco-heron.jpg'
import viniciusBaliImage from '@/images/avatars/vinicius-bali.jpg'
import charlenoPiresImage from '@/images/avatars/charleno-pires.jpg'
import adrianoSantosImage from '@/images/avatars/adriano-santos.jpg'
import pedroCastilhoImage from '@/images/avatars/pedro-castilho.jpg'
import cairoNoletoImage from '@/images/avatars/cairo-noleto.jpg'
import charloteLoreleiImage from '@/images/avatars/charlote-lorelei.jpg'
import lucasVegiImage from '@/images/avatars/lucas-vegi.jpg'
import willianFrantzImage from '@/images/avatars/willian-frantz.jpg'
import davidCaoImage from '@/images/avatars/david-cao.jpg'
import marlusSaraivaImage from '@/images/avatars/marlus-saraiva.jpg'
import carlaBezerraImage from '@/images/avatars/carla-bezerra.jpg'
import viniciusPachecoImage from '@/images/avatars/vinicius-pacheco.jpg'
import matheusMarquesImage from '@/images/avatars/matheus-marques.jpg'
import brunoLopesImage from '@/images/avatars/prof-bruno.jpg'
import gustavoAraujoImage from '@/images/avatars/gustavo-araujo.jpg'
import placeHolderImage from '@/images/avatars/placeholder.jpg'


const days = [
  {
    name: 'Primeiro dia',
    date: '21 de Setembro',
    dateTime: '2023-09-21',
    speakers: [
      {
        name: 'Pedro Castilho (Keynote Speaker)',
        role: 'Tech Cofounder - Cumbuca',
        image: pedroCastilhoImage,
      },
      {
        name: 'Charlotte Lorelei (Keynote Speaker)',
        role: 'Software Engineer',
        image: charloteLoreleiImage,
      },
      {
        name: 'Joel Jucá',
        role: 'Elug-CE',
        image: joelJucaImage,
      },
      {
        name: 'Lucas Vegi',
        role: 'Professor na UFV e Doutorando na UFMG',
        image: lucasVegiImage,
      },
      {
        name: 'David Cao',
        role: 'Software Engineer',
        image: davidCaoImage,
      },
      {
        name: 'Cairo Noleto',
        role: 'Staff Software Engineer - Trybe',
        image: cairoNoletoImage,
      },
      {
        name: 'Willian Frantz',
        role: 'Senior Software Engineer at Riot Games',
        image: willianFrantzImage,
      },
    ],
  },
  {
    name: 'Segundo dia',
    date: '22 de Setembro',
    dateTime: '2022-09-22',
    speakers: [
      {
        name: 'Marlus Saraiva (Keynote Speaker)',
        role: 'Senior Software Engineer at Simplebet',
        image: marlusSaraivaImage,
      },
      {
        name: 'Carla Ilane Moreira Bezerra (Keynote Speaker)',
        role: 'UFC - Campus Quixadá',
        image: carlaBezerraImage,
      },
      {
        name: 'Francisco Heron de Carvalho Junior (Keynote Speaker)',
        role: 'UFC',
        image: franciscoHeronImage,
      },
      {
        name: 'Matheus de Camargo Marques',
        role: 'Elixir and Erlang Developer',
        image: matheusMarquesImage,
      },
      {
        name: 'Vinícius Silva Pacheco',
        role: 'Mestrando na UFMG',
        image: viniciusPachecoImage,
      },
      {
        name: 'Bruno Lopes',
        role: 'Pessoa especialista na Escola de Programação Trybe',
        image: brunoLopesImage,
      },
        {
        name: 'Gustavo Araújo',
        role: 'Senior Software Engineer at CloudWalk, Inc. ',
        image: gustavoAraujoImage,
      },

    ],
  },
  {
    name: 'Organizadores',
    speakers: [
      {
        name: 'Adolfo Neto',
        role: 'UTFPR, Elixir em Foco e Erlang Ecosystem Foundation',
        image: adolfoNetoImage,
      },
      {
        name: 'Francisco Heron de Carvalho Junior',
        role: 'UFC',
        image: franciscoHeronImage,
      },
      {
        name: 'Diego Andrade',
        role: 'UFC',
        image: diegoAndradeImage,
      },
      {
        name: 'Herminio Torres',
        role: 'Elixir em Foco',
        image: herminioTorresImage,
      },
      {
        name: 'Odwald Schreder',
        role: '',
        image: placeHolderImage,
      },
      {
        name: 'Wesley Scheifer',
        role: '',
        image: placeHolderImage,
      },
      {
        name: 'Vinícius Bail Alonso',
        role: '',
        image: viniciusBaliImage,
      },
    ],
  },
  {
    name: 'Comitê de seleção',
    speakers: [
      {
        name: 'Adolfo Neto',
        role: 'UTFPR, Elixir em Foco e Erlang Ecosystem Foundation',
        image: adolfoNetoImage,
      },
      {
        name: 'Cristine Guadelupe',
        role: 'Elixir em Foco',
        image: cristineGuadelupeImage,
      },
      {
        name: 'Joel Jucá',
        role: 'Elug-CE',
        image: joelJucaImage,
      },
      {
        name: 'Elaine Naomi',
        role: 'Senior Software Engineer at TheRealReal',
        image: elaineNaomiImage,
      },
      {
        name: 'Lubien',
        role: 'Devs Norte',
        image: lubienImage,
      },
    ],
  },
  {
    name: 'Colaboradores',
    speakers: [
      {
        name: 'Charleno Pires',
        role: '',
        image: charlenoPiresImage,
      },
      {
        name: 'Adriano Santos',
        role: '',
        image: adrianoSantosImage,
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-12"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-purple-550 sm:text-5xl"
          >
            Palestrantes e organizadores
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-purple-900">
            Conheça as pessoas que tornaram esse evento possível
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-purple-550 stroke-purple-550'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-purple-550'
                              : 'text-slate-500',
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-purple-900"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-purple-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-purple-150"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
