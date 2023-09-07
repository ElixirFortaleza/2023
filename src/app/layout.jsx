import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata = {
  title: {
    template: '%s - Elixir Fortaleza Conf - 2023',
    default: 'Elixir Fortaleza Conf - 2023 - Organizada pela comunidade Elixir',
  },
  description:
    'Uma conferência do ecossistema de Erlang, feita por Elixir em Foco, Elug CE, DAINF e PPGCA da UTFPR, Departamento de Computação da UFC e UFC Virtual. Este é um evento organizado pela comunidade Elixir.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
