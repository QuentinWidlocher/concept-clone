import clsx from 'clsx'
import React, { useState } from 'react'
import Color from '../../types/Color'
import ColorSelector from './ColorSelector/ColorSelector'
import ShapeSelector from './ShapeSelector/ShapeSelector'

interface TokenSelectorProps {
  selectedColor: Color
  onColorChange: (selectedColor: Color) => void
  selectedShapeIsMain: boolean
  onShapeIsMainChange: (shapeIsMain: boolean) => void
}

const TokenSelector = ({
  selectedColor,
  onColorChange,
  selectedShapeIsMain,
  onShapeIsMainChange,
}: TokenSelectorProps) => {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      <div
        className={clsx(
          'drawer transform',
          showDrawer ? 'translate-y-0' : 'translate-y-32',
        )}
      >
        <button
          className="mx-auto w-full py-3"
          onClick={() => setShowDrawer((v) => !v)}
        >
          ^
        </button>
        <ColorSelector selectedColor={selectedColor} onClick={onColorChange} />
        <span role="separator" className="my-2"></span>
        <ShapeSelector
          shapeIsMain={selectedShapeIsMain}
          onShapeChange={onShapeIsMainChange}
        />
      </div>
    </>
  )
}

export default TokenSelector
