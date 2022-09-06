import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { CovidCase } from '../models/iCases'

function AppCasesStatus({selectedState}: {selectedState:CovidCase}) {
  return (
    <div className='w-52'>
        {!selectedState.isNewCases && 
            <div className="flex items-center  space-x-3 text-green-700 
                            text-sm border shadow-md
                            border-green-500 px-2 py-1 rounded-md bg-green-100">
                <FaCheck  />
                <span>No New Cases</span>
            </div>
          }

          {selectedState.isNewCases && 
            <div className="flex items-center  space-x-3 text-red-700
                            text-sm border shadow-md
                            border-red-500 px-2 py-1 rounded-md bg-red-100">
                <FaTimes  />
                <span>New Cases Reported</span>
            </div>
          }
          <p className='text-[10px] mt-0 mx-4'>{selectedState.newCaseStatus}</p>
    </div>
  )
}

export default AppCasesStatus