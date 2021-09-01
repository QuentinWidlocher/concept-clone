import React, { useEffect, useState } from 'react'
import ListPage from './features/game/routes/ListPage/ListPage'
import '../shared/firebase'
import { db, games } from '../shared/firebase'
import { addDoc, deleteDoc, doc, getDocs } from '@firebase/firestore'

function MobileApp() {
  const [gameId, setGameId] = useState('')

  useEffect(() => {
    // FIXME Use the prod/dev modes to use a hard-coded id in dev
    addDoc(games, {}).then((newGame) => {
      setGameId(newGame.id)
    })

    return () => {
      // FIXME The unmount won't trigger here if the user closes the tab
      deleteDoc(doc(db, 'games', gameId)).then(console.log).catch(console.error)
    }
  }, [])

  return <div>{gameId ? <ListPage gameId={gameId} /> : null}</div>
}

export default MobileApp
