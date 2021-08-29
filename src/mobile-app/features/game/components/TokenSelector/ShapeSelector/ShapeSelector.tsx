import clsx from 'clsx'
import React from 'react'
import Color from '../../../types/Color'
import { FaQuestion, FaExclamation } from 'react-icons/fa'
import {
  DotShape,
  ExclamationMarkShape,
  QuestionMarkShape,
} from '../../../data/shapes'

interface ShapeSelectorProps {
  shapeIsMain: boolean
  color: Color
  onShapeChange: (shapeIsMain: boolean) => void
}

const ShapeSelector = ({
  shapeIsMain,
  onShapeChange,
  color,
}: ShapeSelectorProps) => {
  let mainStyle = ''
  let normalStyle = ''
  let activeStyle = `font-bold text-${color}-900 bg-${color}-100`

  if (shapeIsMain) {
    mainStyle = activeStyle
  } else {
    normalStyle = activeStyle
  }

  return (
    <div className="flex p-3">
      <button
        className={clsx('flex-1 p-5 rounded-l', mainStyle)}
        onClick={() => onShapeChange(true)}
      >
        {color == 'green' ? (
          <QuestionMarkShape className="m-auto" />
        ) : (
          <ExclamationMarkShape className="m-auto" />
        )}
      </button>
      <button
        className={clsx('flex-1 p-5 rounded-r', normalStyle)}
        onClick={() => onShapeChange(false)}
      >
        <DotShape className="m-auto" />
      </button>
    </div>
  )
}

export default ShapeSelector
