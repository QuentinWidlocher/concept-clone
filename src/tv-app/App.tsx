import React, { useEffect, useState } from 'react'
import DisplayPage from './features/display/routes/DisplayPage'
import '../shared/firebase'
import { onSnapshot } from '@firebase/firestore'
import { doc } from 'firebase/firestore'
import { db } from '../shared/firebase'
import { useParams } from 'react-router-dom'

function TvApp() {
  const { gameId } = useParams<{ gameId: string }>()
  const [tokens, setTokens] = useState([])

  useEffect(() => {
    if (gameId) {
      const unsub = onSnapshot(doc(db, 'games', gameId), (doc) => {
        setTokens(doc.data()?.tokens ?? [])
      })

      // FIXME The unmount won't trigger here if the user closes the tab
      return () => unsub()
    }
  }, [gameId])

  return (
    <div>
      <DisplayPage tokens={tokens} />
    </div>
  )
}

export default TvApp
