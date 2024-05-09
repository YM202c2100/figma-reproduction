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
                <div key={card.src} className="flex justify-between items-center mb-28">
                    <div className="mr-36">
                        <div className="text-4xl">{card.title}</div>
                        <div className="text-stone-400 text-xl my-4">{card.description}</div>
                        <button className="text-xs bg-black text-white px-5 py-4 rounded-md">Button</button>
                    </div>
                    <Image src={card.src} alt="picture of fruits" width={"550"} height={"354"} className="rounded-xl"/>
                </div>
            )
        })}
    </>)
}

export default CardGenerator;