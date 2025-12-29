import React from 'react'

function Contact_Information({ formData, updateFormData, errors, handleNext , handleBack }) { 
  
  return (
    <div className="min-h-screen flex items-center pt-7 justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <div className='flex flex-col gap-4'>

          <div className='mb-4 border-b-4 border-black pb-4 text-center'>
            <h1 className='text-3xl text-black font-bold'>
              Contact Information
            </h1>
          </div>

          {/* Email */}
          <div>
            <label className='text-black font-semibold'>
              Email
            </label>
            <input
              type="email"
              value={formData.email} 
              onChange={(e) => updateFormData('email', e.target.value)} 
              placeholder='you@gmail.com' 
              className={`w-full p-2 text-black rounded border ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className='text-black font-semibold'>
              Phone Number
            </label>
            <input 
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              placeholder='Enter phone number'
              className={`w-full p-2 text-black rounded border ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div>
            <label className='text-black font-semibold'>
              Address
            </label>
            <textarea
              value={formData.address}
              onChange={(e) => updateFormData('address', e.target.value)} 
              placeholder='Enter your address'
              rows="4" 
              className={`w-full p-2 text-black border rounded border-gray-300 h-32 resize-none`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          {/* Buttons */}
            <div className='flex justify-between mt-4'>
             <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
              Back
            </button>
            <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-900 text-white cursor-pointer rounded-lg font-semibold hover:bg-blue-800 transition">
                Next
              </button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Contact_Information