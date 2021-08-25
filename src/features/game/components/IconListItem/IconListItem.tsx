import clsx from 'clsx'
import React from 'react'
import Icon from '../../types/Icon'
import './IconListItem.css'

interface IconListItemProps {
  icon: Icon
  selected: boolean
  onClick: () => void
}

const IconListItem = ({ icon, onClick, selected }: IconListItemProps) => {
  return (
    <li
      className={clsx('icon-list-item', selected && 'bg-green-50')}
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
