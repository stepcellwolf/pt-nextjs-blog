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
          <h2 className="text-2xl font-bold leading-8 tracking-tight mb-2">{title}</h2>
          {date && <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Date: {date}</p>}
          {location && (
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Location: {location}</p>
          )}
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </li>
  </ul>
)

export default List
