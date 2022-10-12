import { useEffect, useState } from 'react';
import JournalCard from './JournalCard';
import { getJournals } from '../utils/server-utils';

export default function Journal({token}) {
    const [journals, setJournals] = useState([])

    useEffect(() => {
        getJournals(token)
            .then((res) => setJournals(res))
    }, [token])

    return (
        <div className="main">
            <h1>Journals</h1>
            <main>
                {journals.map(journal => <JournalCard key={journal.id} journal={journal} />)}
            </main>
        </div>
    )
}
