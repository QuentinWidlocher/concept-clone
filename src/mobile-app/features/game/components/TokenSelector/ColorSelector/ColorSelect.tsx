import clsx from 'clsx'
import React from 'react'
import Color from '../../../types/Color'

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
          ? `bg-${color}-500 -translate-y-5`
          : `bg-${color}-300 -translate-y-0`,
        'py-6 w-full flex-1 cursor-pointer text-center transform transition-transform',
        'hover:-translate-y-5',
      )}
      onClick={() => onClick(color)}
    ></li>
  )
}

export default ColorSelect
