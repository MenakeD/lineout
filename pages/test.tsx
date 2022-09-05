import Button from '../components/common/Button'
import IconButton from '../components/common/IconButton'
import Container from '../components/layouts/Container'
import { IoChatbubble } from 'react-icons/io5'
import Input from '../components/common/Form/Input'
import Form from '../components/common/Form'
import OptionCard from '../components/common/OptionCard'
import { AiOutlineQrcode } from 'react-icons/ai'

const TestPage = () => {
  return (
    <div>
      <Container>
        <h2 className='text-white'>TestPage</h2>
        <IconButton variant='secondary' loading>
          <IoChatbubble className='text-xl' />
        </IconButton>
        <Button>Hello</Button>
        <Form className='mt-6 bg-white p-10' onSubmit={() => {}}>
          <Input
            label='Name'
            name='name'
            placeholder='Ex: John Doe'
            required
            variant='dark'
          />
        </Form>
        <OptionCard
          Icon={<AiOutlineQrcode size={50} color='white' />}
          Text='View QR code'
        />
      </Container>
    </div>
  )
}

export default TestPage
