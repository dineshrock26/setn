import React from 'react'

const Footer = () => {
  return (
    <div>      <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-bold p-5">Syman Educational Trust</p>
          <p className="text-sm">@2024 Iris-Tech. All rights reserved.</p>
        </div>
        {/* <div className="flex flex-wrap justify-center md:justify-end">
          <a href="#" className="mr-4">Link 1</a>
          <a href="#" className="mr-4">Link 2</a>
          <a href="#" className="mr-4">Link 3</a>
        </div> */}
      </div>
    </div>
  </footer></div>
  )
}

export default Footer