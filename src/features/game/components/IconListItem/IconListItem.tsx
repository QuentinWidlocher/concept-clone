import clsx from 'clsx'
import React from 'react'
import Color from '../../types/Color'
import Icon from '../../types/Icon'
import Token from '../../types/Token'
import './IconListItem.css'

interface IconListItemProps {
  icon: Icon
  token?: Token
  onClick: () => void
}

const IconListItem = ({ icon, onClick, token }: IconListItemProps) => {
  let tokenShape = token?.main ? '?' : '.'
  let itemColor = token ? `${token.color}-${token.main ? '100' : '50'}` : ''

  return (
    <li
      className={`icon-list-item bg-${itemColor} hover:bg-${itemColor}`}
      onClick={() => onClick()}
    >
      <span className="text-5xl mr-6 w-12">{icon.icon}</span>
      <ul className="h-full my-auto">
        {icon.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      {token ? <span className="ml-auto my-auto">{tokenShape}</span> : null}
    </li>
  )
}

export default IconListItem
