import React from 'react'
import Container from '../../components/layouts/Container'
import OptionCard from '../../components/common/OptionCard'
import { AiOutlineQrcode } from 'react-icons/ai'
import { VscGraphLine } from 'react-icons/vsc'
import { CgNotes } from 'react-icons/cg'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const Dashboard = () => {
  const size = 100
  const color = 'white'
  return (
    <Container>
      <p>Dashboard</p>
      <div className='grid grid-cols-2 gap-4'>
        <OptionCard
          Icon={<AiOutlineQrcode size={size} color={color} />}
          Text='View QR code'
        />
        <OptionCard
          Icon={<VscGraphLine size={size} color={color} />}
          Text='View reports'
        />
        <OptionCard
          Icon={<CgNotes size={size} color={color} />}
          Text='View history'
        />
        <OptionCard
          Icon={<AiOutlineQuestionCircle size={size} color={color} />}
          Text='Help'
        />
      </div>
    </Container>
  )
}

export default Dashboard
