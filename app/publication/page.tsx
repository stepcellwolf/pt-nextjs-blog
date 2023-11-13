import publicationData from '@/data/publicationData'
import PublicationCard from '@/components/PublicationCard'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Publications
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            List of publications |{' '}
            <Link
              href="https://www.researchgate.net/profile/Predrag_Tasevski"
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
