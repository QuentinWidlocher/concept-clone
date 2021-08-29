import React from 'react'
import icons from '../shared/data/icons'
import Token from '../mobile-app/features/game/types/Token'
import DisplayPage from './features/display/routes/DisplayPage'

//TODO remove
const getIcon = (id: string) => icons.find((i) => i.id == id)
const mockTokens: Token[] = [
  { icon: getIcon('flag')!, color: 'red', main: true },
  { icon: getIcon('toys')!, color: 'green', main: false },
  { icon: getIcon('house')!, color: 'red', main: false },
  { icon: getIcon('camera')!, color: 'green', main: true },
  { icon: getIcon('box')!, color: 'blue', main: true },
  { icon: getIcon('tv')!, color: 'black', main: true },
  { icon: getIcon('plant')!, color: 'yellow', main: true },
]

function App() {
  return (
    <div>
      <DisplayPage tokens={mockTokens} />
    </div>
  )
}

export default App
