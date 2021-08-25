import React from 'react'
import IconList from '../components/IconList'
import icons from '../data/icons'

const ListPage = () => {
  return (
    <div className="m-10">
      <h1 className="text-xl mb-5">Icon List</h1>

      <IconList icons={icons} />
    </div>
  )
}

export default ListPage
