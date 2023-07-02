
import React from 'react'
import NextLink from 'next/link'
import styles from '../../styles/Nav.module.scss'


type curr = {
    act: string;
} 

function NavBar({act}: curr){
    if(act != "hm" && act != "ab" && act != "pt" && act != "pj" && act != "pr"){
        console.error("Please parse the current page to the navbar [hm | ab | pt | pj | pr]");
    }
    return(
        <nav>
            <div className={styles.nav}>
                <ul className={styles.nav_container}>
                    <li className={styles.nav_item}>
                        <NextLink href="/" className={act == "hm" ? styles.active: styles.nav_item_link}>
                            Home
                        </NextLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NextLink href="/about" className={act == "ab" ? styles.active: styles.nav_item_link}>
                            About
                        </NextLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NextLink href="/portfolio" className={act == "pt" ? styles.active: styles.nav_item_link}>
                            Portfolio
                        </NextLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NextLink href="/projects" className={act == "pj" ? styles.active: styles.nav_item_link}>
                            Projects
                        </NextLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NextLink href="/personal" className={act == "pr" ? styles.active: styles.nav_item_link}>
                            Personal
                        </NextLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

