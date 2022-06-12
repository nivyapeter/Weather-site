import React from 'react'

function SearchData() {
  return (
    <div>
         <div className="bg-white rounded-lg hidden md:block absolute w-96 dataBlock">
          <div className="border-b-2 p-3">
            <span>Recents</span>
          </div>
          <div>You Have No Recent Locations</div>
        </div>
    </div>
  )
}

export default SearchData