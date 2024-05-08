// import Header from "app/components/header.tsx"
import Header from "./components/header"

export default function Page() {
  return (<>
    <Header/>
    {/* メインタイトル */}
    <div className="flex flex-col items-center">
      <div className="text-5xl mt-20">Landing page title</div>
      <div className="m-4 text-stone-400">
        And a subheading describing you site, too
      </div>
      <button className="text-xs mx-10 bg-black text-white px-4 py-3 rounded-md">Button</button>
    </div>
  </>)
}