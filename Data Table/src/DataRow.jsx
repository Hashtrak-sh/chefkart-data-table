import React, { useState } from 'react'

const DataRow = ({ row, columns, changeColor }) => {
  const handleClick = (e) => {
    changeColor(row.id)
  }

  return (
    <tr
      className={`status-${row.status}`}
      onClick={() => {
        handleClick()
      }}
    >
      {columns.map((column, idx) => {
        if (column === 'time') {
          const date = row.time
          const day = date.getDate()
          const month = date.getMonth() + 1
          const year = date.getFullYear()
          return (
            <td key={`row-entry-${idx}`}>
              {day}/{month}/{year}
            </td>
          )
        }
        if (column === 'status') {
          return <td key={`row-entry-${idx}`}>{status.toString()}</td>
        }
        return <td key={`row-entry-${idx}`}>{row[column].toString()}</td>
      })}
    </tr>
  )
}

export default DataRow
