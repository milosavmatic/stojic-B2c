import React from 'react'
import classes from "../../assets/css/StaticPages.module.scss"

function BecomeaPartner() {
  return (
    <div className={`${classes.staticPages}`}>
      <div className="container">
        <h3>Postani naš partner</h3>
        <div className={`${classes.staticPagesContent}`}></div>
      </div>
    </div>
  )
}

export default BecomeaPartner
