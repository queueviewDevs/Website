import React from 'react'

const Tracking = () => {
  return (
    <div className="bg-purple-900 border-2 border-purple-600 p-4 rounded-lg shadow-lg max-w-2xl mx-auto my-6">
      <h2 className="text-xl font-bold mb-3 text-center text-purple-100 bg-purple-800 py-2 rounded-md">
        Queue View
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-right font-medium text-purple-300">
          Location:
        </div>
        <div className="text-purple-100 font-bold">N/A</div>
        
        <div className="text-right font-medium text-purple-300">
          In Line:
        </div>
        <div className="text-purple-100 font-bold">N/A</div>
        
        <div className="text-right font-medium text-purple-300">
          Est. Wait:
        </div>
        <div className="text-purple-100 font-bold">N/A</div>
      </div>
    </div>
  )
}

export default Tracking