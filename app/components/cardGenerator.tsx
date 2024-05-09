"use client"
import Image from "next/image";
type Card ={src:string, title:string, description:string};

const Cards:Card[] = [{src:"/Figma-pear.jpg",
                       title:"Heading",
                       description:"A subheading for this section, as long or as short as you likde"},
                      {src:"/Figma-watermelon.jpg",
                       title:"Heading",
                       description:"A subheading for this section, as long or as short as you like"}];

function CardGenerator(){
    return(<>
        {Cards.map(card => {
            return(
                <div key={card.src}>
                    <Image src={card.src} width={"300"} height={"300"} alt={`Image of ${card.title}`}/>
                    <div>{card.title}</div>
                    <div>{card.description}</div>
                    <button>Button</button>
                </div>
            )
        })}
    </>)
}

export default CardGenerator;