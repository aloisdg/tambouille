import Figure from './Figure'
import siteMetadata from '@/data/siteMetadata'

const Tambouille = (tambouilleProps) => {
  const slug =
    siteMetadata.authors[
      Object.keys(siteMetadata.authors).filter((author) => author.name === tambouilleProps.author)
    ].slug
  let props = {
    ...tambouilleProps,
    host: 'Tambouille',
    hosturl: siteMetadata.siteUrl,
    srcurl: tambouilleProps.src,
    authorurl: `${siteMetadata.siteUrl}/equipe#${slug}`,
  }
  return <Figure {...props} />
}

export default Tambouille
