import React from 'react'
import Cards from "./cards.jsx"

const details = [
    {
        number: 1,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/1200x/56/32/bb/5632bbdc22ea194c5ea30569b4f39e8a.jpg",
        overall: "satified"
    },
    {
        number: 2,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/736x/84/cf/87/84cf87fa3e1ba00650dd8b84df9ab994.jpg",
        overall: "satified"
    },
    {
        number: 3,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/736x/77/1b/70/771b706366d3749b2d22ecfd90157c84.jpg",
        overall: "satified"
    },
    {
        number: 4,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/1200x/56/32/bb/5632bbdc22ea194c5ea30569b4f39e8a.jpg",
        overall: "satified"
    }
    ,
    {
        number: 5,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/736x/87/2b/50/872b5011e0d1caf37078e9681c9b3486.jpg",
        overall: "satified"
    },
    {
        number: 6,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/736x/96/cc/fc/96ccfc64c7dbbb3b57cf8a3f1eac4db6.jpg",
        overall: "satified"
    }
    ,
    {
        number: 7,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/736x/96/cc/fc/96ccfc64c7dbbb3b57cf8a3f1eac4db6.jpg",
        overall: "satified"
    },
    {
        number: 8,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/736x/96/cc/fc/96ccfc64c7dbbb3b57cf8a3f1eac4db6.jpg",
        overall: "satified"
    },
    {
        number: 9,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/736x/96/cc/fc/96ccfc64c7dbbb3b57cf8a3f1eac4db6.jpg",
        overall: "satified"
    },
    {
        number: 10,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam voluptatem libero similique quo debitis, maiores illo, dolorem earum, maxime vitae quidem! Inventore numquam veniam rerum fugit recusandae rem quos",
        image: "https://i.pinimg.com/736x/96/cc/fc/96ccfc64c7dbbb3b57cf8a3f1eac4db6.jpg",
        overall: "satified"
    },
]

const cardsdiv = () => {
  return (
    <div id="cardsdiv" className='h-full flex flex-row overflow-x-auto gap-3 w-[70.2%] p-6 rounded-2xl'>
            {details.map((elements) => {
                return <Cards number={elements.number} review = {elements.review} image={elements.image} overall={elements.overall}/>

            })}
    
        </div>
  )
}

export default cardsdiv