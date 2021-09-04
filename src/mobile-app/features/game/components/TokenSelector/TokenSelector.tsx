import clsx from 'clsx'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Color from '../../../../../shared/types/Color'
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
          showDrawer ? 'translate-y-0' : 'translate-y-36',
        )}
      >
        <button
          className="w-full py-3"
          onClick={() => setShowDrawer((v) => !v)}
        >
          {showDrawer ? (
            <FaAngleDown className="mx-auto" />
          ) : (
            <FaAngleUp className="mx-auto" />
          )}
        </button>
        <ColorSelector selectedColor={selectedColor} onClick={onColorChange} />
        <span role="separator" className="mt-2"></span>
        <ShapeSelector
          color={selectedColor}
          shapeIsMain={selectedShapeIsMain}
          onShapeChange={onShapeIsMainChange}
        />
      </div>
    </>
  )
}

export default TokenSelector
