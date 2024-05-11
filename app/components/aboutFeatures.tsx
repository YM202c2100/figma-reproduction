"use Client"

import Feature from "./feature"
import { StaticImageData } from "next/image"

import img_world from "../../public/figma-world.jpg"
import img_person from "../../public/figma-person.jpg"
import img_privacy from "../../public/figma-privacy.jpg"
import img_calender from "../../public/figma-calentder.jpg"

const src_list:StaticImageData[] = [img_world, img_person, img_privacy, img_calender];

export default function AboutFeatures(){
  return(
    <div>
      <h1 className="text-4xl mb-5">Heading</h1>
      <div className="flex flex-wrap justify-between">
        {src_list.map(src => <Feature src={src}/>)}
      </div>
    </div>
  )
}