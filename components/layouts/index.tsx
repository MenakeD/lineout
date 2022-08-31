import { ReactNode } from 'react'
import Header from '../common/Header'
import Container from './Container'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='antialiased min-h-screen bg-gray-dark'>
      <Header />
      <Container className='min-h-[90vh]'>{children}</Container>
    </div>
  )
}

export default Layout
