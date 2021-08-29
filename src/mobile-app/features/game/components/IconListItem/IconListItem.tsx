import clsx from 'clsx'
import React from 'react'
import {
  DotShape,
  ExclamationMarkShape,
  QuestionMarkShape,
} from '../../data/shapes'
import Color from '../../types/Color'
import Icon from '../../types/Icon'
import Token from '../../types/Token'
import './IconListItem.css'

function getTokenShape(token?: Token) {
  if (token?.main && token?.color == 'green') {
    // Only the main green token is a "?"
    return <QuestionMarkShape />
  } else if (token?.main && token?.color != 'green') {
    // Main tokens of other colors are "!"
    return <ExclamationMarkShape />
  } else {
    return <DotShape />
  }
}

interface IconListItemProps {
  icon: Icon
  token?: Token
  onClick: () => void
}

const IconListItem = ({ icon, onClick, token }: IconListItemProps) => {
  let tokenShape = getTokenShape(token)

  let itemColor = token ? `${token.color}-${token.main ? '200' : '100'}` : ''
  let textColor = token ? `${token.color}-800` : ''

  return (
    <li
      className={`icon-list-item font-bold text-${textColor} bg-${itemColor} hover:bg-${itemColor}`}
      onClick={() => onClick()}
    >
      <span className="text-5xl mr-6 my-auto w-12">{icon.icon}</span>

      {token ? <span className="ml-auto my-auto">{tokenShape}</span> : null}
    </li>
  )
}

export default IconListItem
