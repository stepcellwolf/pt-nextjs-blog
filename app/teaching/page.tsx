import talksData from '@/data/teachingData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Teaching & Mentoring' })

export default function Talks() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Teaching & Mentoring
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            List of teaching and mentoring activities.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {talksData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                date={d.date}
                location={d.location}
                description={d.description}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
