import React from 'react'

function Basic_Information({ formData, updateFormData, errors ,handleNext}) { 
  
  return (
    <div className="min-h-screen flex pt-7 items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <div className="flex flex-col gap-4">

          <div className="mb-4 border-b-4 border-black pb-4 text-center">
            <h1 className="text-3xl text-black font-bold">
              Basic Information
            </h1>
          </div>

          {/* First Name */}
          <div>
            <label className="text-black font-semibold">First Name</label>
            <input
              type="text"
              value={formData.firstname}
              onChange={(e) => updateFormData('firstname', e.target.value)} 
              placeholder="First name"
              className={`w-full p-2 text-black rounded border ${errors.firstname ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="text-black font-semibold">Last Name</label>
            <input
              type="text"
              value={formData.lastname} 
              onChange={(e) => updateFormData('lastname', e.target.value)}
              placeholder="Last name"
              className={`w-full p-2 text-black rounded border ${errors.lastname ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
          </div>

          {/* Age */}
          <div>
            <label className="text-black font-semibold">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => updateFormData('age', e.target.value)} 
              placeholder="Age"
              className={`w-full p-2 text-black rounded border ${errors.age ? "border-red-500" : "border-gray-300"}`}
              min="1"
              max="120"
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="text-black font-semibold">Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => updateFormData('gender', e.target.value)}
              className={`w-full p-2 text-black rounded border ${errors.gender ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>

          {/* Button */}
           <div className='flex justify-end mt-4'>
          <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-900 cursor-pointer text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                Next
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basic_Information