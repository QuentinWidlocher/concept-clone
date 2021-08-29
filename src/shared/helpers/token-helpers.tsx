import React from 'react'
import Token from '../../mobile-app/features/game/types/Token'
import {
  QuestionMarkShape,
  ExclamationMarkShape,
  DotShape,
} from '../data/shapes'

export function getTokenShape(token?: Token) {
  if (token?.main && token?.color == 'green') {
    // Only the main green token is a "?"
    return <QuestionMarkShape />
  } else if (token?.main && token?.color != 'green') {
    // Main tokens of other colors are "!"
    return <ExclamationMarkShape />
  } else {
    return <DotShape />
  }
}
