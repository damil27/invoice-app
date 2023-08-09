"use client"
import React, { useContext } from 'react'
import { DataContext } from './Provider'


const ShowData = () => {
    const GLobalData = useContext(DataContext)
    console.log(GLobalData)
  return (
    <div>ShowData</div>
  )
}

export default ShowData