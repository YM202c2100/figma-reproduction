"use client"

type Card ={src:string, title:string, description:string};

const Cards:Card[] = [{src:"src1", title:"title1", description:"description1"},
                      {src:"src2", title:"title2", description:"description2"}];

function CardGenerator(){
    return(<>
        {/* {Cards.map((card)=>{
            return (
                <p>{card.title}</p>
            )
        })} */}
        {Cards.map(card => {
            return(<>
                <div>{card.title}</div>
                <div>{card.title}</div>
            </>)
        })}
    </>)
}

export default CardGenerator;