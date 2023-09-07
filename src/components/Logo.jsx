import Image from 'next/image'
import logoImage from '@/images/logo.jpg'

export function Logo(props) {
  return (
    <Image
      src={logoImage}
      alt="Picture of the author"
      width={320}
      placeholder="blur"
    />
  )
}
