import React, { useState } from 'react'
import Icon from '../../../../shared/types/Icon'
import Token from '../../../../shared/types/Token'
import IconListItem from './IconListItem/IconListItem'

interface IconListProps {
  icons: Icon[]
  tokens: Token[]
  onIconClick: (icon: Icon) => void
}

const IconList = ({ icons, onIconClick, tokens }: IconListProps) => {
  return (
    <ul className="grid grid-cols-2 mx-auto">
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
