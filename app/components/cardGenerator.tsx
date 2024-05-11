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
        {/* {Cards.map(card => {
            return(
                <div key={card.src} className="flex justify-center items-center mb-28 bg-slate-400">
                    <div className=" bg-green-300">
                        <div className="text-4xl">{card.title}</div>
                        <div className="text-stone-400 text-xl my-4">{card.description}</div>
                        <button className="text-xs bg-black text-white px-5 py-4 rounded-md">Button</button>
                    </div>
                    <div className="relative bg-red-400">
                        <Image src={card.src} alt="picture of fruits" fill={true} style={{objectFit:"contain"}} className="rounded-xl"/>
                    </div>
                </div>
            )
        })} */}
        <div className="flex flex-col md:flex-row">
            <Image src={pear} alt="Picture of pear" sizes="100vw" className="w-full h-auto md:w-1/2"/>
            <div className=" bg-green-300 md:w-1/2">
                <div className="text-4xl">Heading</div>
                <div className="text-stone-400 text-xl my-4">A subheading for this section, as long or as short as you likde
                </div>
                <button className="text-xs bg-black text-white px-5 py-4 rounded-md">Button</button>
            </div>
        </div>
    </>)
}

export default CardGenerator;