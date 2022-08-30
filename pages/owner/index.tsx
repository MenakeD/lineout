import QueueCard from '../../components/pages/owner/queue-card'
import { IoIosAdd } from 'react-icons/io'

const OwnerDashboard = () => {
  return (
    <div className='bg-gray-dark min-h-screen py-8 px-4'>
      <h2 className='text-offWhite text-3xl font-semibold py-2'>Your Queues</h2>
      <div className='space-y-3 pt-5'>
        <QueueCard shopName='Game Kade' inQueue={45} />
        <QueueCard shopName='Game Kade' inQueue={45} />
        <QueueCard shopName='Game Kade' inQueue={45} />
        <QueueCard shopName='Game Kade' inQueue={45} />
        <QueueCard shopName='Game Kade' inQueue={45} />
        <QueueCard shopName='Game Kade' inQueue={45} />
      </div>
      <div className='fixed bottom-4 right-4 bg-yellow-main hover:bg-yellow-dark p-2 rounded-md'>
        <IoIosAdd className='text-5xl font-medium' />
      </div>
    </div>
  )
}

export default OwnerDashboard
