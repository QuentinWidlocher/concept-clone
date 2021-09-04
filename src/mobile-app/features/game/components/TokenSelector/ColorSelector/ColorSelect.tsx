import clsx from 'clsx'
import React from 'react'
import Color from '../../../../../../shared/types/Color'

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
          ? `bg-${color}-500 h-16 hover:h-16 rounded-t`
          : `bg-${color}-300 h-10`,
        'py-6 mt-auto w-full flex-1 cursor-pointer text-center transform transition-transform',
        'hover:h-14 hover:rounded-t',
      )}
      onClick={() => onClick(color)}
    ></li>
  )
}

export default ColorSelect
