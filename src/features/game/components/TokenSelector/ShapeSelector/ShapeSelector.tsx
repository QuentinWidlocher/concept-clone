import clsx from 'clsx'
import React from 'react'

interface ShapeSelectorProps {
  shapeIsMain: boolean
  onShapeChange: (shapeIsMain: boolean) => void
}

const ShapeSelector = ({ shapeIsMain, onShapeChange }: ShapeSelectorProps) => {
  let mainStyle = ''
  let normalStyle = ''
  let activeStyle = 'font-bold bg-gray-100'

  if (shapeIsMain) {
    mainStyle = activeStyle
  } else {
    normalStyle = activeStyle
  }

  return (
    <div className="flex">
      <button
        className={clsx('flex-1 p-5', mainStyle)}
        onClick={() => onShapeChange(true)}
      >
        ?
      </button>
      <button
        className={clsx('flex-1 p-5', normalStyle)}
        onClick={() => onShapeChange(false)}
      >
        .
      </button>
    </div>
  )
}

export default ShapeSelector
