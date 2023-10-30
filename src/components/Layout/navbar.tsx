import React from 'react'
import { Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Components/Layout/Navbar.module.css'

function Navbar() {
    //Returns the navbar component that will be rendered on the main layout allowing the navigation through the app and displaying the logo
    const logoStyle = {
        width: '200px',
        heigth: 'auto',
      }
    return (
        <nav data-testid='navbar' className={styles.navbar}>
            <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center">
                <Grid 
                className={styles.navbar__logo}
                item={true} 
                xs={12} sm={4} md={2}>
                    <Image
                        src="/logo.svg"
                        alt="navbar_icon"
                        data-testid='navbar_icon'
                        width={150}
                        height={100}
                        style={logoStyle}
                        priority
                    />
                </Grid>
                <Grid
                container
                item={true}
                columnGap={5}
                justifyContent="center"
                alignItems="center" 
                xs={8} md={5} lg={4}>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                </Grid>
            </Grid>
        </nav>
  )
}

export default Navbar