// import Header from "app/components/header.tsx"
import Header from "./components/header"
import CardGenerator from "./components/cardGenerator"

export default function Page() {
  return (
    <div className="container mx-auto">
      <Header/>
      {/* メインタイトル */}
      <div className="flex flex-col items-center">
        <div className="text-4xl sm:text-6xl mt-20 lg:text-7xl xl:text-8xl 2xl:text-9xl">Landing page title</div>
        <div className="text-lg m-4 text-stone-400 lg:text-2xl xl:text-3xl xl:my-8 2xl:text-5xl">
          And a subheading describing you site, too
        </div>
        <button className="text-xs bg-black text-white px-4 py-3 rounded-md lg:text-xl xl:text-3xl xl:px-8 xl:py-6">Button</button>
      </div>
      {/* Content description */}
      <div className="container mx-auto my-28">
        <CardGenerator/>
      </div>
    </div>
    
  )
}