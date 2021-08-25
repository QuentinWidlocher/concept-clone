import React, { useState } from 'react'
import Color from '../types/Color'
import Icon from '../types/Icon'
import IconListItem from './IconListItem/IconListItem'

interface IconListProps {
  icons: Icon[]
  selectedColor: Color
}

const IconList = ({ icons, selectedColor }: IconListProps) => {
  const [selectedIconsIndex, setSelectedIconsIndex] = useState<number[]>([])

  function toggleIndex(index: number) {
    if (selectedIconsIndex.includes(index)) {
      // If the index is already selected, we remove the index from the selection
      setSelectedIconsIndex((indexes) => indexes.filter((i) => i != index))
    } else {
      // If the index is not selected, we add it to the selection
      setSelectedIconsIndex((indexes) => [...indexes, index])
    }
  }

  return (
    <ul>
      {icons.map((icon, index) => (
        <IconListItem
          icon={icon}
          onClick={() => toggleIndex(index)}
          selected={selectedIconsIndex.includes(index)}
          selectColor={selectedColor}
          key={icon.id}
        />
      ))}
    </ul>
  )
}

export default IconList
