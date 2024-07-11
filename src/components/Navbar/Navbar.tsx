import Link from 'next/link';
import React from 'react';
import { UserButton, useAuth } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/dist/types/server';


const Navbar = async () => {
    const {userId} = await auth();
    const isAuth = !!userId
  return (
    <div>
        <ul className=' flex justify-between m-10 items-center'>
            <div>
                <Link href="/">
                    <li>Home</li>
                </Link>
            </div>
            <div className='flex gap-10'>
                {!isAuth ? (
                <>
                <Link href="/sign-in">
                    <li>Login</li>
                </Link>
                <Link href="/sign-up">
                    <li>Signup</li>
                </Link>          
                </>
                ): (
                <>
            
                <Link href="/sign-up">
                    <li>Profile</li>
                </Link>
                <li><UserButton/></li>
                </>

                )}
            </div>
        </ul>
    </div>
  )
}

export default Navbar