import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/MDXComponents'
import { serialize } from 'next-mdx-remote/serialize'

export async function getStaticProps() {
  const content = `
  ## Recettes

  Toutes les recettes nous intéressent<sup>1</sup>. La principale condition pour son entrée sur Tambouille est que Kim et Aloïs l'approuve et l'apprécie. Nous postons en notre nom les recettes que nous cuisions. Nous publions également des proches volontaires. [Contactez&nbsp;nous&nbsp;!](mailto:alois@outlook.fr)

  ## Tags
  
  Comme source d'inspiration, consultons [la liste actuelle de tous les tags](/tags).

  Les tags sont des adjectifs ou des noms définissant une recette. Ils sont donc à mettre au féminin. Une recette est *française* par exemple. Dans la mesure du possible, favorisons l'usage de tag existant.

  Une recette peut être une [entrée](/tags/entree), un [plat](/tags/plat), un [dessert](/tags/dessert) et/ou un [apéritif](/tags/aperitif).

  Toutes les recettes doivent contenir un des tags suivants: [végétalienne](/tags/vegetalienne), [végétarienne](/tags/vegetarienne) et [carnée](/tags/carnee). Une recette est [végétalienne](/tags/vegetalienne) si elle ne contient aucun ingrédient d'origine animale. Sur Tambouille, une recette est [végétarienne](/tags/vegetarienne) si elle ne contient pas de viande. Une recette [végétarienne](/tags/vegetarienne) sur ce site peut donc contenir du lait, du miel, des oeufs, des mollusques, des insectes ou du poisson. Une recette [carnée](/tags/carnee) est une recette contenant de la viande (e.g. porc, volaille, etc.).

  ## Images

  Nous n'utilisons que des images libres de droit. Dans l'idéal, nous essayons de prendre une photo nous même et de la poster sur une hébergeur de photo libre de droit comme Pexels ou Unsplash.

  Les plats possédant le tag [carnée](/tags/carnee) ne doivent pas contenir d'image de viande. Nous privilégions une photo d'un aliment de la recette.

  Les gifs sont appréciés également.

  ## Notes

  1. Les recettes à base de boeuf ne sont pas les bienvenues sur Tambouille. Allez ruminer un coup sur [/r/happycowgifs/](https://www.reddit.com/r/happycowgifs/) ou regarder [l'impact écologique de la viande bovine](https://ourworldindata.org/environmental-impacts-of-food).
  `
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        require('remark-autolink-headings'),
        require('remark-code-titles'),
        require('remark-math'),
      ],
      inlineNotes: true,
    },
  })

  return { props: { mdxSource } }
}

export default function Contribuer({ mdxSource }) {
  return (
    <>
      <PageSeo
        title="Contribuer"
        description="Règle de contribution"
        url={`${siteMetadata.siteUrl}/contribuer`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contribuer
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Nous sommes heureux de vous voir contribuer à Tambouille. Voici comment cela se passe.
          </p>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
            <MDXRemote {...mdxSource} components={MDXComponents} />
          </div>
        </div>
      </div>
    </>
  )
}
