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
        <div className="bg-slate-400 flex p-4">
            <div className="bg-green-300 flex-grow">a</div>
            <div className="bg-red-400 flex-grow h-96">b</div>
        </div>
    </>)
}

export default CardGenerator;