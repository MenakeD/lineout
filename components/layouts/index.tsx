import { ReactNode } from 'react'
import Header from '../common/Header'
import Container from './Container'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='antialiased min-h-[95vh] bg-gray-dark'>
        <Container>{children}</Container>
      </main>
    </>
  )
}

export default Layout
