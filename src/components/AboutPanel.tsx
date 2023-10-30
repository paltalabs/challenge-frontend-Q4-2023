import React from 'react'
import styles from '@/styles/Components/About/about-panel.module.css'
function AboutPanel() {
  const LinkedInURL = 'https://linkedin.com/in/matias-poblete-duran'
  const GitHubURL = 'https://github.com/MattPoblete '
  //Returns all the "about" view with the links to my linkedin and github profiles
  return (
    <div className={styles.about__panel} data-testid='about_panel'>
      <h2>Hello world!</h2>
      <br/>
      <p> 
        My name is Matias Poblete, and this is my application test for the front-end developer position at Paltalabs. 
        If you are interested in my background, you can click on <a href={LinkedInURL}>this link</a> to be redirected to my LinkedIn profile or click on <a href={GitHubURL}>this other link</a> to see my past personal projects on my GitHub page. 
        I have based the styles on your landing page and used your logo because this test is only being sent to the Paltalabs team. 
        <br/><br/>Thanks for your time!
      </p>
    </div>
  )
}

export default AboutPanel