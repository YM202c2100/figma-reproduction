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
                    <div>
                        <div>{card.title}</div>
                        <div>{card.description}</div>
                        <button>Button</button>
                    </div>
                    <Image src={card.src} alt="picture of fruits" width={"400"} height={"257"}/>
                </div>
            )
        })}
    </>)
}

export default CardGenerator;