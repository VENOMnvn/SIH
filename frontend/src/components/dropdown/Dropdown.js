import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <ul style={{color:"darkslategrey"}} className='flex justify-center gap-x-4'>
        <li className='px-4 py-2 cursor-pointer'>Advocate</li>
        <li className='px-4 py-2 cursor-pointer'>Legal Consultant</li>
        <li className='px-4 py-2 cursor-pointer'>Notaries</li>
        <li className='px-4 py-2 cursor-pointer'>Mediators</li>
        <li className='px-4 py-2 cursor-pointer'>Arbitrators</li>
      </ul>
    </div>
  )
}

export default Dropdown
