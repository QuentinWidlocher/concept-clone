import clsx from 'clsx'
import React from 'react'
import Color from '../../types/Color'

interface ColorSelectProps {
  color: Color
  selected: boolean
  onClick: (selectedColor: Color) => void
}

const ColorSelect = ({ color, selected, onClick }: ColorSelectProps) => {
  return (
    <li
      className={clsx(
        selected
          ? `bg-${color}-500 text-white -translate-y-2`
          : `bg-${color}-200 text-${color}-800`,
        'py-3 w-full flex-1 cursor-pointer text-center transform transition-transform',
        'hover:-translate-y-2',
      )}
      onClick={() => onClick(color)}
    >
      {color}
    </li>
  )
}

export default ColorSelect
