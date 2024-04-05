import React from 'react'
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1>This is Dashboard</h1>
      <Link to='/products' className='underline'>Go to Product Section</Link>
    </>
  )
}

export default Dashboard