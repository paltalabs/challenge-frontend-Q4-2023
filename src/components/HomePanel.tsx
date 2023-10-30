import React from 'react'
import styles from '@/styles/Components/HomePanel.module.css'
import {Paper} from '@mui/material'
import UserData from './UserData'


function HomePanel() {
  //It only returns the panel where de data will be display
  return (
    <Paper
    elevation={6}
    data-testid='home_panel'
    className={styles.home_panel}>
      <UserData />
    </Paper>
  )
}

export default HomePanel