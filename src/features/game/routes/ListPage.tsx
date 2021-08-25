import React, { useState } from 'react'
import ColorSelector from '../components/ColorSelector/ColorSelector'
import IconList from '../components/IconList'
import colors from '../data/colors'
import icons from '../data/icons'
import Color from '../types/Color'

const ListPage = () => {
  const [selectedColor, setSelectedColor] = useState<Color>('green')

  return (
    <>
      <div className="m-10">
        <h1 className="text-xl mb-5">Icon List</h1>

        <IconList icons={icons} selectedColor={selectedColor} />
      </div>
      <div className="absolute bottom-0 w-full">
        <ColorSelector
          selectedColor={selectedColor}
          onClick={setSelectedColor}
        />
      </div>
    </>
  )
}

export default ListPage
