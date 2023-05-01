import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

// const encode = Encode_Sans({
//   variable: '--font-encode',
//   subsets: ['latin'],
//   weight: ['100', '300', '400', '500', '700', '900'],
// })
//va en la class como ${encode.variable}

export default function MainLayout({ children }) {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center`}>
      <Head>
        <title>Portfolio Constantin Nicolas</title>
      </Head>
      <Navbar />
      <main className={`w-full max-w-[1200px] px-[50px] h-full min-h-full py-12`}>{children}</main>
    </div>
  )
}
