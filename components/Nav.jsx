import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href={"/"} className='flex gap-2 flex-centre' >
                <Image 
                    src={'/assets/images/logo.svg'}
                    width={200}
                    height={200}
                />
            </Link>
        </nav>
    );
};

export default Nav;