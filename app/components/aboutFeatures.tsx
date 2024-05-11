import Image from "next/image"

export default function AboutFeatures(){
  return(
    <div>
      <h1 className="text-4xl mb-5">Heading</h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 ">
          {/* <Image/> */}
          <h2 className="text-2xl">Subheading</h2>
          <p className="text-stone-400 text-xl">
            Body text for whatever you'd like to say. Add main
            takeaway points, quotes, anecdotes, or even a very
            very short story. 
          </p>
        </div>

        <div className="w-full md:w-1/2 ">
          {/* <Image/> */}
          <h2 className="text-2xl">Subheading</h2>
          <p className="text-stone-400 text-xl">
            Body text for whatever you'd like to say. Add main
            takeaway points, quotes, anecdotes, or even a very
            very short story. 
          </p>
        </div>
      </div>
    </div>
  )
}