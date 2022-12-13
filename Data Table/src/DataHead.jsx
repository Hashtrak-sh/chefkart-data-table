import React from 'react'

const DataHead = ({ column, sort }) => {
  return (
    <>
      <th>
        {column.split('_').join(' ')}
        <div className='dropdown-content'>
          <button
            onClick={() => {
              sort('id', true)
            }}
          >
            Unsort
          </button>
          <button
            onClick={() => {
              sort(column, true)
            }}
          >
            Sort ASC
          </button>
          <button
            onClick={() => {
              sort(column, false)
            }}
          >
            Sort DESC
          </button>
        </div>
      </th>
    </>
  )
}

export default DataHead
