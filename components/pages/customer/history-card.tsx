import { BiStore } from 'react-icons/bi'

type Props = {
  shopName: string
  date: string
}

const HistoryCard = ({ shopName, date }: Props) => {
  return (
    <div className='bg-gray-main px-6 py-2.5 w-full rounded-lg flex items-center space-x-4'>
      <div className='bg-yellow-main rounded-full p-2'>
        <BiStore className='text-2xl' />
      </div>
      <div>
        <h2 className='text-offWhite font-semibold text-xl'>{shopName}</h2>
        <h3 className='text-yellow-main text-sm font-medium'>{date}</h3>
      </div>
    </div>
  )
}

export default HistoryCard
