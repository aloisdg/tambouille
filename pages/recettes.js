import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'

export const POSTS_PER_PAGE = 10

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('recettes')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Recettes({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSeo
        title="Recettes"
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/recettes`}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Toutes les recettes"
      />
    </>
  )
}
