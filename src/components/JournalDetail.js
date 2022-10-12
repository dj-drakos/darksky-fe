import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEntry, updateEntry, deleteEntry } from '../utils/server-utils';

export default function JournalDetail({token}){
  const [{entry, objectName, date, imageUrl, loading}, setState] = useState({
    entry: '',
    objectName: '',
    date: '',
    imageUrl: '',
    loading: true
  })
  const navigate = useNavigate()
  let { id } = useParams()

  useEffect(() => {
    setState((state) => ({...state, loading: true}))
    getEntry(id, token)
      .then((res) => {
        setState({ ...res, loading: false })
      })
      .catch((error) => console.error(error))
  }, [id, token])

  const handleChange = (e) => {
    setState((state) => ({ ...state, entry: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEntry(
      id, 
      {
        entry,
        objectName,
        date,
        imageUrl
      },
      token
      )

    navigate('../journal')
  }

  const handleDelete = async () => {
    await deleteEntry(id, token);
    navigate('../journal')
  }

  return (
    <div className="main">
      <h1>Edit Journal</h1>
      { loading ? <h2>Loading entry...</h2>
      :
      <div className='journal-detail'>
        <h2>{objectName}</h2>
        <div className='journal-detail-body'>
          <section>
            <img src={imageUrl} alt="astro" />
            <h4>{date}</h4>
          </section>
          <article>
            <form onSubmit={handleSubmit}>
              <textarea onChange={handleChange} value={entry}></textarea>
              <div className='journal-edit-buttons'>
                <button>Save</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </form>
          </article>
        </div>
      </div>
      }
  </div>
  )
}
