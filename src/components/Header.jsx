import '../App.css'

const Header = () => {
  return (
    <>
      <div className='py-10 bg-indigo-700 text-center text-white'>
        <div className='px-24'>
          <img src="./utma.png" alt="Utma Logo" className='mx-auto' style={{ maxWidth: '170px' }} />
        </div>
        <div className='text-center px-10 pt-12 hidden lg:block'>
          <ul className='flex justify-center items-center'>
            <a href=""><li className='px-16 text-xl font-bold'>Profile</li></a>
            <a href=""><li className='px-16 text-xl font-bold'>Resources</li></a>
            <a href=""><li className='px-16 text-xl font-bold'>Info</li></a>
            <a href=""><li className='px-16 text-xl font-bold'>Contact</li></a>
            <a href=""><li className='px-16 text-xl font-bold'>More</li></a>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
