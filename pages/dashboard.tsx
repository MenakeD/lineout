import React from 'react'
import { VscGraphLine } from 'react-icons/vsc'
import OwnerQueueCard from '../components/common/OwnerQueueCard'

const Dashboard = () => {
  const queue = [
    {
      id: 1,
      name: 'Game Kade',
    },
    {
      id: 2,
      name: 'Game Kade',
    },
    {
      id: 3,
      name: 'Game Kade',
    },
    {
      id: 4,
      name: 'Game Kade',
    },
  ]
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <p className='font-bold text-xl text-white'>Your Queues</p>
        </div>
        <div className='grid justify-end'>
          <VscGraphLine size={30} color='white' />
        </div>
      </div>
      <div className='pt-6'>
        {queue &&
          queue.length &&
          queue.map((q) => (
            <div key={q.id}>
              <OwnerQueueCard name={q.name} />
            </div>
          ))}
      </div>
    </>
  )
}

export default Dashboard
