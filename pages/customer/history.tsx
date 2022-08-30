import React from 'react'
import HistoryCard from '../../components/pages/customer/history-card'

type Props = {}

const CustomerHistory = (props: Props) => {
  return (
    <div className='bg-gray-dark min-h-screen py-8 px-4'>
      <h2 className='text-offWhite text-3xl font-semibold py-2'>History</h2>
      <div className='space-y-3 pt-5'>
        <HistoryCard shopName='Bandara Stores' date='12th August 2022' />
        <HistoryCard shopName='Bandara Stores' date='12th August 2022' />
        <HistoryCard shopName='Bandara Stores' date='12th August 2022' />
        <HistoryCard shopName='Bandara Stores' date='12th August 2022' />
        <HistoryCard shopName='Bandara Stores' date='12th August 2022' />
        <HistoryCard shopName='Bandara Stores' date='12th August 2022' />
      </div>
    </div>
  )
}

export default CustomerHistory
