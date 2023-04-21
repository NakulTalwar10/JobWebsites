import React from 'react'
import './Second.css'


const Second = () => {
    return (
        <div className="mx-5 my-5 md:mx-10 md:my-10 lg:mx-20 lg:my-20 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/3">
          <h1 className="text-4xl md:text-5xl font-bold mx-5 md:mx-10 my-3">Find a Career</h1>
          <ul className="mx-5 md:mx-10 my-10 space-y-4">
            <li>
              <button className="shadow__btn w-full">IT &amp; Software</button>
            </li>
            <li>
              <button className="shadow__btn w-full">Internship</button>
            </li>
            <li>
              <button className="shadow__btn w-full">Digital Marketing</button>
            </li>
            <li>
              <button className="shadow__btn w-full">Graphic Designing</button>
            </li>
          </ul>
        </div>
  
        {/* Job listings */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Job Card 1 */}
          <div className="card shadow-md">
            <div className="bg-blue-500 text-white p-5">
              <p className="text-2xl md:text-3xl font-bold">BCA</p>
              <p className="text-lg md:text-xl font-bold">Senior Backend Engineer</p>
              <p className="text-lg md:text-xl font-bold text-blue-200">Jatarka, Indonesia</p>
            </div>
            <div className="bg-gray-100 p-5">
              <button className="bg-blue-500 text-white py-3 px-6 font-bold rounded-md hover:bg-blue-700 transition-all duration-200">
                Apply Now
              </button>
            </div>
          </div>
  
          {/* Job Card 2 */}
          <div className="card shadow-md">
            <div className="bg-blue-500 text-white p-5">
              <p className="text-2xl md:text-3xl font-bold">MEP Associate Manager</p>
              <p className="text-lg md:text-xl font-bold text-blue-200">Jatarka, Indonesia</p>
            </div>
            <div className="bg-gray-100 p-5">
              <button className="bg-blue-500 text-white py-3 px-6 font-bold rounded-md hover:bg-blue-700 transition-all duration-200">
                Apply Now
              </button>
            </div>
          </div>
  
          {/* Job Card 3 */}
          <div className="card shadow-md">
            <div className="bg-blue-500 text-white p-5">
              <p className="text-2xl md:text-3xl font-bold">Critical Care Medicine Specialist</p>
              <p className="text-lg md:text-xl font-bold text-blue-200">Jatarka, Indonesia</p>
            </div>
            <div className="bg-gray-100 p-5">
              <button className="bg-blue-500 text-white py-3 px-6 font-bold rounded-md hover:bg-blue-700 transition-all duration-200">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Second