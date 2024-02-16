import React from 'react'
import Header from "../../components/header"
import Intro from "./intro"
const home = () => {
  return (
    <div >
      <Header/>
      <div className='bg-primary px-40 '>
      <Intro/>
      </div>
    </div>
  )
}

export default home