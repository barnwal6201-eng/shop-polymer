import React from 'react'

const Loading = () => {
  return (
    <div className='fixed top-20 left-0 w-full h-2 bg-gray-200 z-50'>

      <div
      className='h-full bg-gray-500'
      style={{
        animation: 'barload 1.5s ease-in-out forwards'
      }}
      />
      <style>
        {`
        @keyframes barload {
        0% {width: 0%}
        50% {width: 70%}
        100% {width: 100%}
        }
        `}
      </style>
    </div>
  )
}

export default Loading
