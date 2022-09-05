import React from 'react'
import { AiOutlineQrcode } from 'react-icons/ai'

type Props = {
  Icon: any
  Text: string
}

const OptionCard = ({ Icon, Text }: Props) => {
  return (
    <div className='w-fit'>
      <div className='bg-gray-main rounded-lg cursor-pointer'>
        <div className='flex flex-col justify-center space-y-3 py-6 px-6'>
          <div className='flex justify-center'>{Icon}</div>
          <p className='text-white font-normal flex justify-center'>{Text}</p>
        </div>
      </div>
    </div>
  )
}

export default OptionCard
