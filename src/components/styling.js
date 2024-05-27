import React from 'react'
import styles from '../myStyles.module.css'
const primary = {
    fontSize : '72px',
    color : 'red',
    textShadow: '1px 1px white'

}
function styling() {


  return (
    <div>
      <div style={primary}>
        This is Primary
      </div>
      <div className = {styles.secondary}>
        This is Secondary
      </div>
    </div>
  )
}

export default styling
