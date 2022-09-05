import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

const QueueData = () => {
  const queue: boolean = true
  return (
    <div className='bg-yellow-main rounded-lg'>
      <div className='flex justify-between'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-8 px-2 py-2'>
            {queue ? (
              <>
                <div>
                  <p className='font-bold text-gray-dark text-base'>
                    Jayakody Stores
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className='font-bold text-gray-500 text-base'>
                  <p>You are not in any</p>
                  <p>queues.</p>
                </div>
              </>
            )}
            <div className='flex justify-between'>
              <div className={`${!queue ? 'invisible' : 'visible'}`}>
                <p className='font-bold text-gray-500 text-sm mr-4'>
                  Estimated time
                </p>
                <p className='font-bold text-gray-dark text-lg'>0h 45m</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${!queue ? 'invisible' : 'visible px-6 pt-4'}`}>
          <div className=''>
            <div className='flex justify-center'>
              <div className='flex flex-col'>
                <div className='flex justify-center'>
                  <p className='font-bold text-gray-500 text-5xl'>24</p>
                </div>
                <div className='flex justify-start'>
                  <p className='font-bold text-gray-500 text-xs'>Position</p>
                </div>
              </div>
            </div>
            <div className={`${!queue ? 'visible pt-4' : 'invisible '}`}>
              <HiDotsHorizontal size={50} color='gray' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QueueData
