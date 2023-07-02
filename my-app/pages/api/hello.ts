// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()



const jsonFilePath = "../../public/json/defaultcardloader"


async function main(){
	const cards = await prisma.card.findMany()
	if(cards.length == 0){
		var res = await fetch(jsonFilePath)
		let resToJson = await res.json()

		for(var i = 0; i < resToJson.length; i++){
			var curr = resToJson[i]
			var card = await prisma.card.create({
				data:{
					name: curr[0],
					disc: curr[2],
					img : curr[3],
					url : curr[4],
					tags: curr[1]
				}
			})
			console.log(card)
		}
	}
	
}

main()
  .then(async() => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 

