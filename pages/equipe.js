import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function Equipe() {
  return (
    <>
      <PageSeo
        title="L'équipe"
        description="Notre équipe de choc"
        url={`${siteMetadata.siteUrl}/equipe`}
      />
      <div id={siteMetadata.authors.kim.slug} className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            L'équipe
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img
              src={siteMetadata.authors.kim.image}
              alt="avatar"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.authors.kim.name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">QA</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:kim.clarisse+tambouille@protonmail.com`} />
              <SocialIcon kind="github" href="https://github.com/kimclarisse" />
              <SocialIcon kind="linkedin" href="https://www.linkedin.com/in/kimclarisse/" />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Kim est automaticienne de tests. Elle apprécie la cuisine méditérannéene et mexicaine.
              Quand elle ne cuisine pas, elle aime les jeux narratifs et marcher entre les pins.
            </p>
            <p>
              En plus de partager ses recettes favorites, elle traques les bugs et les fautes sur le
              site.
            </p>
          </div>
        </div>
      </div>
      <div id={siteMetadata.authors.alois.slug} className="divide-y">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img
              src={siteMetadata.authors.alois.image}
              alt="avatar"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.authors.alois.name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Développeur</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              <span>
                Aloïs aime l'équitation, l'océan et marcher dans la nature. Il est sympa, mais
                rarement joignable. Quand il ne code pas des projets inutiles, il joue aux
              </span>
              <a className="mx-1" href="https://lichess.org/@/alois" title="lichess">
                échecs
              </a>
              <span>ou traîne sur internet.</span>
            </p>
            <p>
              En plus de partager ses recettes favorites, il créé les fonctionalités et les bugs du
              site.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
