import { Link } from 'react-router-dom';

export default function JournalCard({ entryData }) {
    const { date, objectName, id, imageUrl, entry } = entryData
    return (
        <Link className="journal-item" to={`/journal/${id}`}>
            <div>
                <img alt="journal pic" src={imageUrl} />
                <h4>{date}</h4>
            </div>
            <article>
                <h2>{objectName}</h2>
                <p>{entry}</p>
            </article>
        </Link>
    )
}
