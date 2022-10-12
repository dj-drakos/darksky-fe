import { useEffect, useState } from 'react';
import JournalCard from './JournalCard';
import { getJournal } from '../utils/server-utils';

export default function Journal({token}) {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        getJournal(token)
            .then((res) => setEntries(res))
    }, [token])

    return (
        <div className="main">
            <h1>Journal</h1>
            <main>
                {entries.length ? 
                entries.map(entry => <JournalCard key={entry.id} entryData={entry} />)
                :<h2>There are no entries in your journal.</h2>
                }
            </main>
        </div>
    )
}
