import React from 'react'

function Personal_Information({ formData, updateFormData, errors , handleNext , handleBack }) {
  
  return (
    <div className="min-h-screen flex items-center pt-7 justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <div className='flex flex-col gap-4'>

          <div className='mb-4 border-b-4 border-black pb-4 text-center'>
            <h1 className='text-3xl text-black font-bold '>
              Personal Information
            </h1>
          </div>

          {/* Occupation */}
          <div>
            <label className='text-black font-semibold'>
              Occupation
            </label>
            <input
              type="text"
              value={formData.occupation}
              onChange={(e) => updateFormData('occupation', e.target.value)}
              placeholder='Enter your occupation'
              className={`w-full p-2 text-black rounded border ${errors.occupation ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
          </div>

          {/* Education */}
          <div>
            <label className='text-black font-semibold'>
              Education
            </label>
            <select
              value={formData.education}
              onChange={(e) => updateFormData('education', e.target.value)}
              className={`w-full p-2 text-black rounded border ${errors.education ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select education level</option>
              <option value="High School">High School</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Bachelor's">Bachelor's Degree</option>
              <option value="Master's">Master's Degree</option>
              <option value="Others">Others</option>
            </select>
            {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
          </div>

          {/* Hobbies */}
          <div>
            <label className='text-black font-semibold'>
              Hobbies <span className="text-gray-500 text-sm font-normal">(Optional)</span>
            </label>
            <textarea
              value={formData.hobbies} 
              onChange={(e) => updateFormData('hobbies', e.target.value)} 
              placeholder='Tell us about your hobbies'
              rows="4" 
              className='w-full p-2 text-black border rounded border-gray-300 h-32 resize-none'
            />
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
                className="px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                Next
              </button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Personal_Information