"use client"
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'


const Nav = () => {
    const isUserLoggedIn = true
    const [providers, setProviders] = useState(null)


    useEffect(()=>{
        const setProviders = async () =>{
            const  response =  await getProviders()
            setProviders(response)
        }
    },[])

  return (
    <>
        <Link href='/'>Home Page</Link>
        {
            isUserLoggedIn ? <div>
                <Link href='/create-prompt'>Create Post</Link>
                <button onClick={signOut}>Signout</button>
            </div>:<></>
        }
    </>
  )
}

export default Nav