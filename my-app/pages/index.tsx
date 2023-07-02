import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

import NavBar from './comps/nav'
import Landing from './comps/landing'
import Card from './comps/card'

import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const card = {
    name: "IDK",
    tags: "[Tags]",
    disc: "A team project developing a game from scratch over a 4 month period. The idea a psychological horror surrounding a sole passanger on an abandoned ship, exploring areas and solving puzzles to answer the question of who you are. While the project wasnt finished, time and effort from the whole group went into the final product. Written in C# using the unity game engine.",
    img: "https://placeholder.pics/svg/800/DEDEDE/555555/RaceCar",
    url: "#",
    flip: false,
    inSamerow: 3,
  }

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Software Webdev SoftwareDev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar act={"hm"}/>
        <Landing />

        <Card 
            name = {"IDK"}
            tags = {["[Tags]"]}
            disc = {"A team project developing a game from scratch over a 4 month period. The idea a psychological horror surrounding a sole passanger on an abandoned ship, exploring areas and solving puzzles to answer the question of who you are. While the project wasnt finished, time and effort from the whole group went into the final product. Written in C# using the unity game engine."}
            img  = {"https://placeholder.pics/svg/800/DEDEDE/555555/RaceCar"}
            url  = {"#"}
            flip = {false}
            inSameRow = {2}
        />
        
      </main>
    </>
  )
}
