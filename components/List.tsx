import Link from './Link'

interface ListProps {
  title: string
  date?: string
  location?: string
  description: string
}

const List = ({ title, date, location, description }) => (
  <ul className="list-outside">
    <li className="mb-8">
      <div className="border-b dark:border-gray-700">
        <div className="p-4">
          <h2 className="mb-2 text-2xl leading-8 font-bold tracking-tight">{title}</h2>
          {date && <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Date: {date}</p>}
          {location && (
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Location: {location}</p>
          )}
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </li>
  </ul>
)

export default List
