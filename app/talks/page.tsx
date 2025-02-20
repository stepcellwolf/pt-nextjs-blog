import talksData from '@/data/talksData'
import List from '@/components/List'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Talks' })

export default function Talks() {
  // Sort the talksData array by date in descending order

  const sortedTalksData = talksData.sort((a, b) => {
    const yearA = parseInt(a.date?.match(/\d{4}$/)?.[0] || '0', 10)
    const yearB = parseInt(b.date?.match(/\d{4}$/)?.[0] || '0', 10)
    return yearB - yearA
  })

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Talks
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            List of past and future talks in descending order.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {sortedTalksData.map((d) => (
              <List
                key={d.title}
                title={d.title}
                date={d.date}
                location={d.location}
                description={d.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
