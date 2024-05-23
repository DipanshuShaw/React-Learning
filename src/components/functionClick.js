import React from 'react'

function functionClick() {

    function clicked(){
        console.log("The button is been clicked");
    }

  return (
    <div>
      <button onClick={clicked}>
        Click
      </button>
    </div>
  )
}

export default functionClick
