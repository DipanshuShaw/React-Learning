import React from 'react'

function person({personContent}) {
  return (
    <div>
      <h2>
        I am {personContent.name}, I am {personContent.age} years old. My branch is {personContent.branch}
      </h2>
    </div>
  )
}

export default person
