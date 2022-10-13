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

  const handleClick = async (e, action) => {
    e.preventDefault();
    await action(id, token, {
      entry,
      objectName,
      date,
      imageUrl
    },)
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
            <form >
              <textarea onChange={handleChange} value={entry}></textarea>
              <div className='journal-edit-buttons'>
                <button onClick={(e) => handleClick(e, updateEntry)}>Save</button>
                <button onClick={(e) => handleClick(e, deleteEntry)}>Delete</button>
              </div>
            </form>
          </article>
        </div>
      </div>
      }
  </div>
  )
}
