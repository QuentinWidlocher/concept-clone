import clsx from 'clsx'
import React, { useState } from 'react'
import colors from '../../../data/colors'
import Color from '../../../types/Color'
import ColorSelect from './ColorSelect'

interface ColorSelectorProps {
  selectedColor: Color
  onClick: (selectedColor: Color) => void
}

const ColorSelector = ({ selectedColor, onClick }: ColorSelectorProps) => {
  return (
    <ul className="flex justify-between">
      {colors.map((color) => (
        <ColorSelect
          color={color}
          selected={color == selectedColor}
          onClick={onClick}
        />
      ))}
    </ul>
  )
}

export default ColorSelector
