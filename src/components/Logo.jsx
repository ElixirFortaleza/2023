import Image from 'next/image'
import logoImage from '@/images/logo.jpg'

export function Logo(props) {
  return (
    <Image
      src={logoImage}
      alt="Elixir Fortaleza Conf 2023"
      width={320}
      placeholder="blur"
    />
  )
}
