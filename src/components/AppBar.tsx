import React from "react"

import '../App.scss'
import './AppBar.scss'
import MaterialIcon from "./MaterialIcon"

const AppBar: React.FC = () => {
  return (
    <nav>
      <div className="relative-inner center" style={{boxSizing: 'border-box'}}>
        <div className="center back-btn" style={{left: 0}}>
          <MaterialIcon name='arrow_back' />
          <span style={{marginLeft: '4px', fontFamily: "'Kanit', sans-serif"}}>Back</span>
        </div>
        <div className="center"
          style={{
            backgroundColor: 'white',
            color: 'gray',
            height: '32px',
            fontSize: '100%',
            paddingLeft: '8px',
            paddingRight: '8px',
            position: 'absolute',
            right: '8px',
            borderRadius: '16px'
          }}
        >
          <MaterialIcon name="search" style={{fontSize: '150%'}}/>
          <input
            style={{
              width: '20vw',
              height: '75%',
              marginLeft: '4px',
              background: 'none',
              border: 'none',
              fontSize: '90%',
              color: 'gray',
              outline: 'none',
              fontFamily: "'Sarabun', sans-serif",
              fontWeight: 'bold'
            }}
          />
        </div>
      </div>
    </nav>
  )
}

export default AppBar