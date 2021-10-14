import Image from 'next/image'
import CustomLink from './Link'
import Pexels from './Pexels'
import Wikipedia from './Wikipedia'
import Tambouille from './Tambouille'

const MDXComponents = {
  Pexels,
  Unsplash,
  Wikipedia,
  Tambouille,
  Image,
  a: CustomLink,
}

export default MDXComponents
