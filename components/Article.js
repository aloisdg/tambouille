import Image from 'next/image'
import Link from '@/components/Link'
import Tag from '@/components/Tag'

const Article = ({ slug, title, summary, tags, image, isH2 = true, hasExtraLink = true }) => {
  // let thumbnail
  // if (images[0].endsWith('.mp4')) {
  //   thumbnail = (
  //     <video
  //       className="object-contain rounded"
  //       autoPlay
  //       loop
  //       muted
  //       src={images[0]}
  //       type="video/mp4"
  //     >
  //       Contactez Alois et dites "video"
  //     </video>
  //   )
  // } else {
  let thumbnail = (
    <Link href={`/recettes/${slug}`} title={title} className="w-full xl:w-auto">
      <Image
        alt="illustration"
        className="rounded object-cover"
        src={image}
        layout="responsive"
        width={640}
        height={400}
      />
    </Link>
  )
  // }

  let headerLink = (
    <Link href={`/recettes/${slug}`} className="text-gray-900 dark:text-gray-100">
      {title}
    </Link>
  )

  let header = isH2 ? (
    <h2 className="text-2xl font-bold leading-8 tracking-tight">{headerLink}</h2>
  ) : (
    <h3 className="text-2xl font-bold leading-8 tracking-tight">{headerLink}</h3>
  )

  return (
    <article>
      <div className="space-y-2 grid xl:grid-rows-2 xl:grid-cols-4 xl:grid-flow-col xl:space-y-0 gap-2 xl:gap-4">
        <div className="xl:row-span-2">{thumbnail}</div>
        <div className="order-first xl:order-none xl:col-span-2 space-y-6">
          <div>
            {header}
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="xl:row-span-1 xl:col-span-2">
          <div className="prose text-gray-500 max-w-none dark:text-gray-400">{summary}</div>

          {hasExtraLink && (
            <div className="text-base font-medium leading-6">
              <Link
                href={`/recettes/${slug}`}
                className="text-blue-500 dark:text-orange-500 hover:text-blue-600 dark:hover:text-orange-400"
                aria-label={`Read "${title}"`}
              >
                Découvrir &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default Article
