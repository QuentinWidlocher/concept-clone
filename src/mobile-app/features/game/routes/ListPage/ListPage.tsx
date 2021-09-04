import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import ColorSelector from '../../components/TokenSelector/ColorSelector/ColorSelector'
import IconList from '../../components/IconList'
import icons, { iconsPerPage } from '../../../../../shared/data/icons'
import Color from '../../../../../shared/types/Color'
import Icon from '../../../../../shared/types/Icon'
import Token from '../../../../../shared/types/Token'
import './ListPage.css'
import TokenSelector from '../../components/TokenSelector/TokenSelector'
import { db } from '../../../../../shared/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { SwipeEventData, useSwipeable } from 'react-swipeable'

interface ListPageProps {
  gameId?: string
}

function changePage(currentPage: number, way: 'left' | 'right'): number {
  let nextPage = currentPage

  if (way == 'left') {
    if (currentPage - 1 >= 0) {
      nextPage = currentPage - 1
    }
  } else {
    if (currentPage + 1 <= iconsPerPage.length - 1) {
      nextPage = currentPage + 1
    }
  }

  return nextPage
}

const ListPage = ({ gameId }: ListPageProps) => {
  const [selectedColor, setSelectedColor] = useState<Color>('green')
  const [tokenIsMain, setTokenIsMain] = useState(true)
  const [tokens, setTokens] = useState<Token[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      // Swipe to the left, go to the right page
      setCurrentPage((currentPage) => changePage(currentPage, 'right'))
    },
    onSwipedRight: () => {
      // Swipe to the right, go to the left page
      setCurrentPage((currentPage) => changePage(currentPage, 'left'))
    },
  })

  function toggleToken(icon: Icon) {
    if (tokens.some((t) => t.icon.id == icon.id)) {
      // If a token is already placed, we remove a token from the selection
      setTokens((tokens) => tokens.filter((t) => t.icon.id != icon.id))
    } else {
      // Token is main if there is no other token of the same color already placed
      // or if the "main" chekbox is checked, meaning that the player wants to
      // change their main token
      let main = tokenIsMain || tokens.every((t) => t.color != selectedColor)

      // If a token is not placed, we add it to the selection
      let tokenToPlace: Token = {
        icon,
        color: selectedColor,
        main,
      }

      let tokensWithOnlyOneMain = [...tokens]

      // If we changed the main token...
      if (main) {
        tokensWithOnlyOneMain = tokens.map((token) => {
          // ... we "un-main" all the token of the same color, leaving only the last one
          // that'll be added next
          if (token.color == selectedColor) {
            return { ...token, main: false }
          } else {
            return token
          }
        })

        // Changing the main token is a one-time action. We don't let the checkbox checked
        // so the player automatically place normal token after their first one, or after changing
        setTokenIsMain(false)
      }

      setTokens([...tokensWithOnlyOneMain, tokenToPlace])
    }
  }

  useEffect(() => {
    if (gameId) {
      setDoc(doc(db, 'games', gameId), { tokens })
    }
  }, [tokens, gameId])

  return (
    <>
      <div className="m-5 mb-16 sm:flex flex-col">
        <h1 className="text-xl text-center mb-5">Concept clone (Mobile)</h1>
        <a
          className="bg-green-400 text-white rounded p-3 mx-auto hover:bg-green-600"
          href={`/${gameId}`}
          target="_blank"
        >
          Open the tv app
        </a>

        <div role="separator" className="my-3"></div>

        <div {...swipeHandlers}>
          <IconList
            icons={iconsPerPage[currentPage]}
            tokens={tokens}
            onIconClick={(icon) => toggleToken(icon)}
          />
        </div>
      </div>
      <TokenSelector
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
        selectedShapeIsMain={tokenIsMain}
        onShapeIsMainChange={setTokenIsMain}
      />
    </>
  )
}

export default ListPage
