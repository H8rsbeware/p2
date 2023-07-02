import React from 'react'
import NextLink from 'next/link'
import styles from '../../styles/Landing.module.scss'


function Landing(){
    return(
        <section className={styles.buffered_container}>
          <div >
            <div className={styles.landing_div}>
                <h1 className={styles.heading}>Hi, Im Oakley</h1><br />
                <span className={styles.typing_animation}><h2 className={styles.subtext}>A web-developer, and software engineer.</h2></span>
              </div>
            </div>
        </section> 
        
    )
}

export default Landing;