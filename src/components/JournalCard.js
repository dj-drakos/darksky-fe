import { Link } from 'react-router-dom';

export default function JournalCard({journal}) {
    const {date, englishname, id, image_url, journal_entry} = journal

    return (
        <Link className="journal-item" to={`/journal/${id}`}>
            <div>
                <img alt="journal pic" src={image_url} />
                <h4>
                    {date}
                </h4>
            </div>

            <article>
                <h2>
                    {englishname}
                </h2>
                <p>
                    {journal_entry}
                </p>
            </article>
        </Link>
    )
}
