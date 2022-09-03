import React from 'react'
import { AiOutlineShop } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'

type Props = {
  name: string
}

const OwnerQueueCard = ({ name }: Props) => {
  return (
    <div className='py-2'>
      <div className='bg-gray-main rounded-lg'>
        <div className='flex justify-between p-4'>
          <div className='flex flex-row space-x-3'>
            <div className='bg-yellow-main h-12 w-12 rounded-full'>
              <div className='flex justify-center pt-3'>
                <AiOutlineShop size={25} />
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold text-lg text-white'>{name}</p>
              <p className='font-semibolf text-xs text-yellow-main'>
                45 in queue
              </p>
            </div>
          </div>
          <div className='pt-3'>
            <RiDeleteBin5Line size={20} color='#C65252' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerQueueCard
