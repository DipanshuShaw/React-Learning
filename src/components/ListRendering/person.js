import React from 'react'

function person({person}) {
  return (
    <div>
      <h2>
        I am {person.name}, I am {person.age} years old. My branch is {person.branch}
      </h2>
    </div>
  )
}

export default person
