import React from "react";
import Card from "./card"

type cardDetails = {
    name: string;
    tags:[string];
    disc: string;
    img : string;
    url : string;
    flip: boolean;
    inSameRow: number;
}

type CardRow = {
    row : [cardDetails]
}

// Acts as an adaptive row for my card objects
function CardCon({row}: CardRow){
    var inRow = row.length
    var rows = []
    for(var i = 0; i < inRow; i++){
        var curr = row[i]
        rows.push(<Card 
            name = {curr.name}
            tags = {curr.tags}
            disc = {curr.disc}
            img  = {curr.img}
            url  = {curr.url}
            flip = {false}
            inSameRow = {inRow}        
        />)
    }
    return(
        <tbody>{rows}</tbody>
    )
}

export default CardCon;