import Figure from './Figure'
import siteMetadata from '@/data/siteMetadata'

const Tambouille = (tambouilleProps) => {
  const slug = Object.values(siteMetadata.authors).filter(
    (author) => author.name === tambouilleProps.author
  )[0].slug
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
