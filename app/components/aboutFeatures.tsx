import Image from "next/image"
import Feature from "./feature"

export default function AboutFeatures(){
  return(
    <div>
      <h1 className="text-4xl mb-5">Heading</h1>

      <div className="flex flex-wrap justify-between">
        <Feature/>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}