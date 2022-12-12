import React from 'react'
import classes from "../../assets/css/StaticPages.module.scss"

function index() {
  return (
    <div className={`${classes.staticPages}`}>
      <div className="container">
        <h3>O nama</h3>
        <div className={`${classes.staticPagesContent}`}></div>
      </div>
    </div>
  )
}

export default index
