import Image from 'next/image'
import CustomLink from './Link'
import Pexels from './Pexels'
import Wikipedia from './Wikipedia'

const MDXComponents = {
  Pexels,
  Wikipedia,
  Image,
  a: CustomLink,
}

export default MDXComponents
