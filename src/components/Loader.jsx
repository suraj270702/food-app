import React from 'react'
import {CircleDashed} from 'lucide-react'

const Loader = () => {
  return (
    <div>
        <CircleDashed className='w-[30px] h-[30px] animate-pulse' />
    </div>
  )
}

export default Loader