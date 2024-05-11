import Image, {StaticImageData} from "next/image"

type srcProps = {
  src:StaticImageData
}
const Feature:React.FC<srcProps> = ({src})=>{
  return(
    <div className="w-3/4 py-7 lg:w-2/5">
      <Image src={src} alt={src.src} width={50} height={50} className="relative right-1"/>
      <h2 className="text-2xl">Subheading</h2>
      <p className="text-stone-400 text-xl">
        Body text for whatever you'd like to say. Add main
        takeaway points, quotes, anecdotes, or even a very
        very short story. 
      </p>
    </div>
  )
}

export default Feature;