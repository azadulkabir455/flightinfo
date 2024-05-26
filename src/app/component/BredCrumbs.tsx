import React from 'react'
const menuItem = ["Home","Booking History","Flight", "STFL17121182045413"]
export default function BredCrumbs() {
  return (
    <>
        <ul className='breadCrumbs'>
            {
              menuItem.map((item, index) => {
                return(
                  <li key={index}>{item}</li>
                )
              })
            }
        </ul>
    </>
  )
}
