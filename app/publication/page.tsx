import publicationData from '@/data/publicationData'
import PublicationCard from '@/components/PublicationCard'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Publications
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            List of publications |{' '}
            <Link
              href="https://www.researchgate.net/profile/Predrag_Tasevski"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
            >
              Researchgate.net profile
            </Link>
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {publicationData.map((d) => (
              <PublicationCard
                key={d.title}
                title={d.title}
                date={d.date}
                imgSrc={d.imgSrc}
                type={d.type}
                isbn={d.isbn}
                href={d.href}
                publisher={d.publisher}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
