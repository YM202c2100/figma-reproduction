import Image from "next/image"

export default function Feature(){
  return(
    <div className="w-3/4 py-7 lg:w-2/5">
      {/* <Image/> */}
      <h2 className="text-2xl">Subheading</h2>
      <p className="text-stone-400 text-xl">
        Body text for whatever you'd like to say. Add main
        takeaway points, quotes, anecdotes, or even a very
        very short story. 
      </p>
    </div>
  )
}