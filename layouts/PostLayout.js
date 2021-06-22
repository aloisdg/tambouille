import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/recettes/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/recettes/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { slug, fileName, date, title, tags, author } = frontMatter

  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetadata.siteUrl}/recettes/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 print:xl:divide-white print:xl:dark:divide-white print:xl:divide-y-0">
          <header className="pt-6 xl:pb-6 print:hidden">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Publié le</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 print:xl:divide-white print:xl:divide-transparent print:xl:divide-y-0 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <Link
              href={`/equipe#${siteMetadata.authors[author].slug}`}
              aria-label={`Link to ${siteMetadata.authors[author].name}`}
              title={`L'équipe - ${siteMetadata.authors[author].name}`}
              className="print:hidden"
            >
              <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
                <dt className="sr-only">Auteur ou autrice</dt>
                <dd>
                  <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                    <li className="flex items-center space-x-2 flex-col">
                      <img
                        src={siteMetadata.authors[author].image}
                        alt="avatar"
                        className="w-28 h-28 rounded-full"
                      />
                      <dl className="text-sm font-medium leading-5 whitespace-nowrap  mt-3">
                        <dt className="sr-only">Nom</dt>
                        <dd className="text-gray-900 dark:text-gray-100 text-xl">
                          {siteMetadata.authors[author].name}
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </dd>
              </dl>
            </Link>
            <div className="xl:pb-0 xl:col-span-3 xl:row-span-2 relative">
              <div className="pt-10 absolute right-0 print:hidden">
                <button
                  className="border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-blue-900 dark:focus:ring-orange-300 focus:outline-none transition-colors duration-200"
                  type="button"
                  onClick={() => window.print()}
                  title={`imprimer la recette: ${title}`}
                >
                  <span role="img" aria-label="imprimer" className="text-3xl">
                    🖨️
                  </span>
                </button>
              </div>
              <div className="pt-10 prose dark:prose-dark max-w-none">{children}</div>
              {/* <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300 print:hidden">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div> */}
            </div>
            <footer className="print:hidden">
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Recette Précédente
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 dark:text-orange-500 dark:hover:text-orange-400">
                          <Link href={`/recettes/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Recette suivante
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 dark:text-orange-500 dark:hover:text-orange-400">
                          <Link href={`/recettes/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/recettes"
                  className="text-blue-500 hover:text-blue-600 dark:text-orange-500 dark:hover:text-orange-400"
                >
                  &larr; Revenir aux recettes
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
