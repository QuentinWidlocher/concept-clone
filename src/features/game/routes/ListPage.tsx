import React, { useState } from 'react'
import ColorSelector from '../components/ColorSelector/ColorSelector'
import IconList from '../components/IconList'
import icons from '../data/icons'
import Color from '../types/Color'
import Icon from '../types/Icon'
import Token from '../types/Token'

const ListPage = () => {
  const [selectedColor, setSelectedColor] = useState<Color>('green')
  const [mainToken, setMainToken] = useState(true)
  const [tokens, setTokens] = useState<Token[]>([])

  function toggleToken(icon: Icon) {
    if (tokens.some((t) => t.icon.id == icon.id)) {
      // If a token is already placed, we remove a token from the selection
      setTokens((tokens) => tokens.filter((t) => t.icon.id != icon.id))
    } else {
      // Token is main if there is no other token of the same color already placed
      // or if the "main" chekbox is checked, meaning that the player wants to
      // change their main token
      let main = mainToken || tokens.every((t) => t.color != selectedColor)

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
        setMainToken(false)
      }

      setTokens([...tokensWithOnlyOneMain, tokenToPlace])
    }
  }

  return (
    <>
      <div className="m-10">
        <h1 className="text-xl mb-5">Icon List</h1>

        <IconList
          icons={icons}
          tokens={tokens}
          onIconClick={(icon) => toggleToken(icon)}
        />
      </div>
      <div className="absolute bottom-0 w-full">
        <ColorSelector
          selectedColor={selectedColor}
          onClick={setSelectedColor}
        />
        <input
          type="checkbox"
          name="main"
          checked={mainToken}
          onChange={() => setMainToken((v) => !v)}
        />
      </div>
    </>
  )
}

export default ListPage
