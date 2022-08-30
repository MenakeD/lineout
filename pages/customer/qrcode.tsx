import QRCode from 'react-qr-code'
const QRCodePage = () => {
  return (
    <div className='bg-gray-dark min-h-screen flex flex-col items-center justify-center space-y-8'>
      <div className='space-y-1'>
        <h2 className='text-yellow-main text-3xl text-center font-semibold'>
          Your QR Code
        </h2>
        <h3 className='text-offWhite text-base text-center font-medium'>
          Show this code to your shop owner
        </h3>
      </div>
      <div className='p-6 bg-gray-main rounded-lg'>
        <QRCode value='123456778' />
      </div>
    </div>
  )
}

export default QRCodePage
