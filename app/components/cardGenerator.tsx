"use client"
import Image, { StaticImageData } from "next/image";

import pear from "../../public/Figma-pear.jpg";
import watermelon from "../../public/Figma-watermelon.jpg";

type Card ={src:StaticImageData, title:string, description:string};

const Cards:Card[] = [{src:pear,
                       title:"Heading",
                       description:"A subheading for this section, as long or as short as you likde"},
                      {src:watermelon,
                       title:"Heading",
                       description:"A subheading for this section, as long or as short as you like"}];

function CardGenerator(){
    return(<>
        {Cards.map((card, i) => {
            return(
                <div key={card.src.src} className={`mb-10 md:mb-20  md:flex ${i%2 == 0 ? "":"md:flex-row-reverse"}`}>
                    <Image src={card.src} alt="Picture of OO" className="md:w-1/2 rounded-xl"/>
                    <div className={`flex-grow py-10 flex flex-col justify-center ${i%2 == 0 ?"md:pl-16": "md:pr-16"}`}>
                        <div className="text-4xl">{card.title}</div>
                        <div className="text-stone-400 text-xl my-4">{card.description}</div>
                        <button className="w-20 text-xs bg-black text-white px-5 py-4 rounded-md">Button</button>
                    </div>
                </div>
            )
        })}
    </>)
}

export default CardGenerator;