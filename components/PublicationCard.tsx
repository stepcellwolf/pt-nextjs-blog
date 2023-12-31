import Link from './Link'

const PublicationCard = ({ title, date, imgSrc, type, isbn, href, publisher }) => (
  <div className="md max-w-[292.8px] p-4 md:w-1/2">
    <div
      className={`h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc && (
        <div>
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <img
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-439.2 lg:h-292.8"
                width={292.8}
                height={439.2}
              />
            </Link>
          ) : (
            <img
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-439.2 lg:h-292.8"
              width={292.8}
              height={439.2}
            />
          )}
        </div>
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Type: {type}</p>
        {date && <small>Date: {date}</small>} <br />
        {publisher && <small>Publisher: {publisher}</small>} <br />
        {isbn && <small>{isbn}</small>} <br />
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
