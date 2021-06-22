import Figure from './Figure'

const Unsplash = (unsplashProps) => {
  let props = { ...unsplashProps, host: 'Unsplash', hosturl: 'https://unsplash.com/' }
  return <Figure {...props} />
}

export default Unsplash
