import React from 'react'
import DataRow from './DataRow'

const DataBody = ({ data, columns, changeColor }) => {
  return (
    <>
      {data.map((entry, idx) => {
        if (entry.show) {
          return (
            <DataRow
              key={`row-${idx}`}
              row={entry}
              columns={columns}
              changeColor={changeColor}
            />
          )
        }
      })}
    </>
  )
}

export default DataBody
