import React from 'react'

const ResumeList = ({values}) => {
  return (
    <ul>
      {values.map((value, index) => {
        return (
          <li key={index}>
            {value.key}: {value.value}
          </li>
        )
      })}
    </ul>
  )
}

export default ResumeList
