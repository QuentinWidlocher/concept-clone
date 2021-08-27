import React, { useState } from 'react'
import Icon from '../types/Icon'
import Token from '../types/Token'
import IconListItem from './IconListItem/IconListItem'

interface IconListProps {
  icons: Icon[]
  tokens: Token[]
  onIconClick: (icon: Icon) => void
}

const IconList = ({ icons, onIconClick, tokens }: IconListProps) => {
  return (
    <ul className="flex flex-wrap justify-evenly">
      {icons.map((icon) => {
        let token: Token | undefined = tokens.find((t) => t.icon.id == icon.id)

        return (
          <IconListItem
            icon={icon}
            onClick={() => onIconClick(icon)}
            token={token}
            key={icon.id}
          />
        )
      })}
    </ul>
  )
}

export default IconList
