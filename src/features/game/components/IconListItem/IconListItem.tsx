import clsx from 'clsx'
import React from 'react'
import Color from '../../types/Color'
import Icon from '../../types/Icon'
import './IconListItem.css'

interface IconListItemProps {
  icon: Icon
  selected: boolean
  selectColor: Color
  onClick: () => void
}

const IconListItem = ({
  icon,
  onClick,
  selected,
  selectColor,
}: IconListItemProps) => {
  return (
    <li
      className={clsx(
        'icon-list-item',
        selected && `bg-${selectColor}-100 hover:bg-${selectColor}-100`,
      )}
      onClick={() => onClick()}
    >
      <span className="text-5xl mr-6 w-12">{icon.icon}</span>
      <ul className="h-full my-auto">
        {icon.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      {selected ? <span className="ml-auto my-auto">✅</span> : null}
    </li>
  )
}

export default IconListItem
