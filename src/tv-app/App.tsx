import React, { useEffect, useState } from 'react'
import icons from '../shared/data/icons'
import Token from '../mobile-app/features/game/types/Token'
import DisplayPage from './features/display/routes/DisplayPage'
import '../shared/firebase'
import { onSnapshot } from '@firebase/firestore'
import { doc } from 'firebase/firestore'
import { db } from '../shared/firebase'

function App() {
  const [gameId, setGameId] = useState('')
  const [tokens, setTokens] = useState([])

  useEffect(() => {
    let id = window.location.pathname.replace('/', '')

    // Use the prod/dev modes to use a hard-coded id in dev
    // else use the id provided by the mobile app
    setGameId(id)
  }, [])

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

export default App
