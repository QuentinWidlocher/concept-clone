import clsx from 'clsx'
import React, { useState } from 'react'
import colors from '../../../../../../shared/data/colors'
import Color from '../../../types/Color'
import ColorSelect from './ColorSelect'

interface ColorSelectorProps {
  selectedColor: Color
  onClick: (selectedColor: Color) => void
}

const ColorSelector = ({ selectedColor, onClick }: ColorSelectorProps) => {
  return (
    <ul className="flex justify-between align-bottom">
      {colors.map((color) => (
        <ColorSelect
          color={color}
          key={color}
          selected={color == selectedColor}
          onClick={onClick}
        />
      ))}
    </ul>
  )
}

export default ColorSelector
