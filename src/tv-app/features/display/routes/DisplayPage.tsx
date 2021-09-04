import React from 'react'
import colors from '../../../../shared/data/colors'
import Color from '../../../../shared/types/Color'
import Token from '../../../../shared/types/Token'
import DisplayToken from '../components/DisplayToken'

type TokenByColors = { [k in Color]?: Token[] }

// Transform a list of Token to a TokenByColors to group tokens by color
function getSortedTokens(tokens: Token[]): TokenByColors {
  // First, from the array of tokens, we create an object (a dictionnary) like this :
  // { 'green': [], 'red': [] }
  // So we can group our tokens by color
  let tokensByColor = tokens.reduce(
    (obj, token) => ({
      ...obj,
      [token.color]: [...(obj[token.color] ?? []), token],
    }),
    {} as TokenByColors,
  )

  // Next, for each color, we sort the list of tokens to put the main in first
  // TODO use a map to construct another variable here
  colors.forEach(
    (color) =>
      (tokensByColor[color] = tokensByColor[color]?.sort((t) =>
        t.main ? -1 : 1,
      )),
  )

  return tokensByColor
}

interface DisplayPageProps {
  tokens: Token[]
}

const DisplayPage = ({ tokens }: DisplayPageProps) => {
  let sortedTokens: TokenByColors = getSortedTokens(tokens)

  let list = null

  if (tokens.length <= 0) {
    list = <h1 className="text-xl m-auto">Waiting for the first token...</h1>
  } else {
    list = (
      <ul className="flex flex-wrap justify-evenly w-full my-auto">
        {colors
          .filter((c) => (sortedTokens[c]?.length ?? 0) > 0)
          .map((color) => (
            <li key={color} className="flex-1 mb-5">
              <ul className="p-12">
                {sortedTokens[color]?.map((token) => (
                  <li key={token.icon.id}>
                    <DisplayToken token={token} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    )
  }

  return <div className="h-screen flex">{list}</div>
}

export default DisplayPage
