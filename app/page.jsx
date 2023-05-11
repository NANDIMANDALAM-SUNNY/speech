import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>Speech and talk</h1>
        <Feed />
    </section>
  )
}

export default Home