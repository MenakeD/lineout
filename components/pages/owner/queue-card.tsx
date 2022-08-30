import { HiOutlineTrash } from 'react-icons/hi'
import { BiStore } from 'react-icons/bi'
type Props = {
  shopName: string
  inQueue: string | number
}

const QueueCard = ({ shopName, inQueue }: Props) => {
  return (
    <div className='bg-gray-main px-6 py-2.5 w-full rounded-lg flex items-center justify-between'>
      <div className='flex items-center space-x-4'>
        <div className='bg-yellow-main rounded-full p-2'>
          <BiStore className='text-2xl' />
        </div>
        <div>
          <h2 className='text-offWhite font-semibold text-xl'>{shopName}</h2>
          <h3 className='text-yellow-main text-sm font-medium'>
            {inQueue} in Queue
          </h3>
        </div>
      </div>
      <HiOutlineTrash className='text-red-400 text-2xl cursor-pointer' />
    </div>
  )
}

export default QueueCard
