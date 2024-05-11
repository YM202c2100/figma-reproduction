import Image from "next/image"

export default function AboutFeatures(){
  return(
    <div>
      <div>
        <div>
        {/* <Image/> */}
        <h4>Subheading</h4>
        <p className="text-stone-400">
          Body text for whatever you'd like to say. Add main
          takeaway points, quotes, anecdotes, or even a very
          very short story. 
        </p>
        </div>
        <div>
        <h4>Subheading</h4>
        <p className="text-stone-400">
          Body text for whatever you'd like to say. Add main
          takeaway points, quotes, anecdotes, or even a very
          very short story. 
        </p>
        </div>
      </div>
    </div>
  )
}