import '@/styles/globals.css'
import { Manrope } from 'next/font/google'
import { Grid } from '@mui/material'

import MySorobanReactProvider from '@/soroban/MySorobanReactProvider'
import Navbar from '@/components/Layout/navbar'

//Define the metadata and the <head> attributtes
const main_font = Manrope({
  weight: ['200', '800' ],
  subsets: ['latin']
})

export const metadata = {
  title: 'Paltalabs Test',
  description: 'NextJS technical test for Paltalabs',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  //Defines the main layout wich will be used on every page of the application
  return (
    <html lang="en">
      <body className={main_font.className} data-testid='body'>
        <MySorobanReactProvider> {/* this is required to share the soroban context through the children components */}
          <Navbar/>
          <Grid
          alignItems={'center'}
          justifyContent={'center'}
          container
          className='app-container'
          >
            <Grid
            item
            xs={10} md={8} 
            >
              {children}
            </Grid>
          </Grid>
        </MySorobanReactProvider>
      </body>
    </html>
  )
}
