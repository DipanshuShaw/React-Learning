import React from 'react'

function Child(props) {
  return (
    <div>
      <button style={{
        margin : 50,
        padding : 8,
        cursor : 'grab'
      }} onClick={props.slapCounting}>
        Slap me Daddy !!
      </button>
    </div>
  )
}

export default Child
