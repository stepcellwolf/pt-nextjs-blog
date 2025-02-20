import Link from './Link'
import Image from './Image'

const PublicationCard = ({ title, date, imgSrc, type, isbn, href, publisher }) => (
  <div className="md max-w-[292.8px] p-4 md:w-1/2">
    <div
      className={`border-opacity-60 h-full overflow-hidden rounded-md border-2 border-gray-200 dark:border-gray-700`}
    >
      {imgSrc && (
        <div>
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="md:h-439.2 lg:h-292.8 object-cover object-center"
                width={292.8}
                height={439.2}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="md:h-439.2 lg:h-292.8 object-cover object-center"
              width={292.8}
              height={439.2}
            />
          )}
        </div>
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Type: {type}</p>
        {date && <small>Date: {date}</small>} <br />
        {publisher && <small>Publisher: {publisher}</small>} <br />
        {isbn && <small>{isbn}</small>} <br />
        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
            aria-label={`Link to ${title}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Link &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default PublicationCard
