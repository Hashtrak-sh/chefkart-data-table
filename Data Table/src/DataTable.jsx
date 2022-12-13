import React from 'react'
import DataHead from './DataHead'
import mockData from './mock_data.csv'

import './DataTable.css'
import { useState } from 'react'
import DataBody from './DataBody'

const parse = (data) => {
  return data
    .map((row) => {
      return {
        ...row,
        id: Number(row.id),
        time: new Date(row.time),
        show: row.show === 'true',
        edit: row.edit === 'true',
        status: row.status === 'true',
      }
    })
    .filter((entry) => entry.show)
}

const DataTable = () => {
  const [data, setData] = useState(parse(mockData))
  const columns = Object.keys(mockData[0])

  const changeColor = (id) => {
    setData((data) =>
      data.map((row) => {
        if (row.id === id) {
          return { ...row, status: !row.status }
        } else {
          return { ...row }
        }
      })
    )
  }

  const sort = (column, isAscending) => {
    if (
      column === 'status' ||
      column === 'show' ||
      column === 'edit' ||
      column === 'id'
    ) {
      const sortedData = [...data].sort((a, b) => {
        if (isAscending) {
          return a[column] - b[column]
        } else {
          return b[column] - a[column]
        }
      })

      setData([...sortedData])
    } else {
      const sortedData = [...data].sort((a, b) => {
        if (isAscending) {
          if (a[column] > b[column]) {
            return 1
          } else if (a[column] < b[column]) {
            return -1
          } else {
            return 0
          }
        } else {
          if (a[column] > b[column]) {
            return -1
          } else if (a[column] < b[column]) {
            return 1
          } else {
            return 0
          }
        }
      })

      setData([...sortedData])
    }
  }

  return (
    <div className='data-table-container'>
      {data && (
        <table className='data-table'>
          <thead>
            <tr>
              {columns.map((column, idx) => {
                return (
                  <DataHead key={`head-${idx}`} column={column} sort={sort} />
                )
              })}
            </tr>
          </thead>
          <tbody>
            <DataBody data={data} columns={columns} changeColor={changeColor} />
          </tbody>
        </table>
      )}
    </div>
  )
}

export default DataTable
