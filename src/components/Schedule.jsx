'use client'

import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

const schedule = [
  {
    date: '21 de Setembro',
    dateTime: '2023-09-21',
    summary:
      'Primeiro dia de conferência.',
    timeSlots: [
      {
        name: 'Recepção',
        description: '',
        start: '08:00AM',
        end: '8:45AM',
      },
      {
        name: 'Abertura',
        description: '',
        start: '08:45AM',
        end: '9:00AM',
      },
      {
        name: 'Pedro Castilho',
        description: 'O runtime Erlang e como torná-lo seu amigo',
        start: '09:00AM',
        end: '10:00AM',
      },
      {
        name: 'Joel Jucá',
        description: 'Phoenix over SQLite',
        start: '10:30AM',
        end: '11:00AM',
      },
      {
        name: 'Lucas Vegi',
        description: 'Code Smells e Refatorações específicos para Elixir',
        start: '11:00AM',
        end: '11:40AM',
      },
      {
        name: 'Lightning talks',
        description: '',
        start: '11:40AM',
        end: '12:00PM',
      },
      {
        name: 'Intervalo para almoço',
        description: '',
        start: '12:00PM',
        end: '2:00PM',
      },
      {
        name: 'David Cao	',
        description: 'Modern Clicks (Erlang Fullstack Web Development with Nitrogen)',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Cairo Noleto',
        description: 'Processos em Elixir - Como funciona a arquitetura básica das aplicações Elixir',
        start: '3:00PM',
        end: '3:30PM',
      },
      {
        name: 'Willian Frantz',
        description: 'Aprendizados de 2 anos utilizando LiveView',
        start: '4:00PM',
        end: '4:30PM',
      },
        {
        name: 'Charlotte Oliveira',
        description: 'Elixir como linguagem da web do futuro',
        start: '4:30PM',
        end: '6:00PM',
      },

    ],
  },
  {
    date: '22 de Setembro',
    dateTime: '2023-09-22',
    summary:
      'Segundo dia de conferência.',
    timeSlots: [
      {
        name: 'Recepção',
        description: '',
        start: '08:00AM',
        end: '9:00AM',
      },
      {
        name: 'Marlus Saraiva',
        description: 'Usando Scoped CSS em componentes Phoenix/Surface para melhor manutenção e performance',
        start: '09:00AM',
        end: '10:00AM',
      },
      {
        name: 'Matheus de Camargo Marques',
        description: 'Busca por palavra chaves com concorrência OTP & Elixir',
        start: '10:30AM',
        end: '11:00AM',
      },
            {
        name: 'Vinícius Silva Pacheco',
        description: 'Honey Potion: Explorando o Poder do eBPF com Elixir',
        start: '11:00AM',
        end: '11:30AM',
      },
            {
        name: 'Bruno Lopes',
        description: 'Aprenda Elixir criando um bot para o Discord',
        start: '11:30AM',
        end: '12:00PM',
      },
      {
        name: 'Intervalo para almoço',
        description: '',
        start: '12:00PM',
        end: '2:00PM',
      },
      {
        name: 'Carla Bezerra',
        description: 'Refatoração de code smells e seu impacto na qualidade do software',
        start: '2:00PM',
        end: '3:00PM',
      },
      {
        name: 'Gustavo Araújo',
        description: 'Construindo um Ambiente de Desenvolvimento Impecável em Elixir: Ferramentas Essenciais e Melhores Práticas',
        start: '3:00PM',
        end: '3:30PM',
      },
      {
        name: 'Francisco Heron de Carvalho Júnior',
        description: 'Fundamentos e Técnicas de Paralelização de Programas com Exemplos em Erlang e Elixir',
        start: '4:30PM',
        end: '5:30PM',
      },
        {
        name: 'Encerramento',
        description: '',
        start: '5:30PM',
        end: '6:00PM',
      },


    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-purple-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-purple-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-purple-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-full bg-purple-900/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-purple-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-purple-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            GMT-3
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-24">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-12">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-purple-550 sm:text-5xl">
            Programação e agenda
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-purple-900">
            Confira todas as palestras e keynotes
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-22 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
