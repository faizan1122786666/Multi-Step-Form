import React from 'react'

function Review({ formData, handleBack, handleSubmit }) {
  return (
    <div className="min-h-screen flex items-center pt-7 justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <div className="flex flex-col gap-3">

          {/* Heading */}
          <div className="mb-3 border-b-4 border-black pb-4 text-center">
            <h1 className="text-3xl text-black font-bold">
              Review Your Information
            </h1>
          </div>

          {/* Basic Information */}
          <div className="space-y-2 ">
            <p><strong>First Name:</strong> {formData.firstname}</p>
            <p><strong>Last Name:</strong> {formData.lastname}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone }</p>
            <p><strong>Address:</strong> {formData.address}</p>
          </div>

          {/* Personal Information */}
          <div className="space-y-2">
            <p><strong>Occupation:</strong> {formData.occupation}</p>
            <p><strong>Education:</strong> {formData.education}</p>
            <p><strong>Hobbies:</strong> {formData.hobbies}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4 border-t mt-4">
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Review
