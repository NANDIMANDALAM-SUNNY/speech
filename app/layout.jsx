import React from 'react'
import '@styles/globals.css'
import Nav from '@components/Nav'


export const metadata = {
    title : "Speech",
    description : "sdcsdc"
}

const RootyLayout = ( { children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
            <Nav />
            
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootyLayout