import React from "react";
import styles from '../../styles/Card.module.scss';
import Image from 'next/image'

import clsx from 'clsx'


type cardDetails = {
    name: string;
    tags:[string];
    disc: string;
    img : string;
    url : string;
    flip: boolean;
    inSameRow: number;
}





function Card({name, tags, disc, img, url, flip, inSameRow}: cardDetails){
    var image = "https://placeholder.pics/svg/300/DEDEDE/555555/ph2"
    if(url != "#"){
        image = `../../public/cards/${url}`
    }

    
    var calcWidth = 250
    var rowController = {
        width: calcWidth.toString() + "px",
    }


    if(inSameRow != -1){
        calcWidth = Math.round(95 / inSameRow)
        rowController.width = calcWidth.toString() + "%"
    }
    
    var imageScaling = (calcWidth * 0.95).toString() + "%"
    // controls the width of the cards to create some am
    


    if(flip == false){
        return(

            <div className={[styles.card_container].join(" ")} style={{width: rowController.width}}>
                <div className={styles.internal_card_container}>
                    <Image src={image} fill alt="Generated Image"  className={styles.card_image}/>
                    <div className={styles.card_text_area}>
                        <h3 className={styles.card_heading}>{name}</h3>
                        <p className={styles.card_tags}>{tags}</p>
                        <hr className={styles.horz_rule}/>
                        <p className={styles.card_disc}>{disc}</p>
                    </div>
                </div>

            </div>
        )
    }else{
        return(
            <div className={[styles.card_container].join(" ")} style={{width: rowController.width}}>

            </div>
        )
    }
}

export default Card;