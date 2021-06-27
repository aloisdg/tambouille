import Figure from './Figure'

const Pexels = (pexelsProps) => {
  let props = {
    ...pexelsProps,
    host: 'Pexels',
    hosturl: 'https://pexels.com/',
  }
  return <Figure {...props} />
}

export default Pexels
