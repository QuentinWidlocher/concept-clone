import clsx from 'clsx'
import React from 'react'
import Token from '../../../../shared/types/Token'
import { getTokenShape } from '../../../../shared/helpers/token-helpers'

interface DisplayTokenProps {
  token: Token
}

const DisplayToken = ({ token }: DisplayTokenProps) => {
  return (
    <div
      className={clsx(
        'flex p-5 text-5xl',
        `bg-${token.color}-100 text-${token.color}-500`,
      )}
    >
      <span className={clsx(token.main ? '' : 'text-2xl my-auto ml-16')}>
        {getTokenShape(token)}
      </span>
      <span className="ml-5 my-auto">{token.icon.icon}</span>
      <ul className="ml-auto text-2xl">
        {token.icon.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default DisplayToken
