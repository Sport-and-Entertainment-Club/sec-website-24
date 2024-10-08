import React, { useState } from 'react'

const Card = ({ icon, title, bg, descriptiontoshow, descriptionwhilehover }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`rounded-lg py-4 px-8 ${bg} transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <p className='text-purple text-3xl font-bold my-4'>{title}</p>  
        <p className='text-lg'>
          {descriptiontoshow}
          <span 
            className={`transition-opacity duration-300 ease-in-out ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {descriptionwhilehover}
          </span>
        </p>
      </div>
      <div className='flex justify-end w-full'>
        <img 
          src={icon} 
          alt="icon"  
          className='transition-transform duration-300 ease-in-out transform hover:scale-110'
        />   
      </div>
    </div>
  )
}

export default Card