import Hero from "./hero";
import TopCreators from "./topCreators";
import TrendingCollection from "./trendingCollection"

export default function Homepage() {
  return (
    <div className=" p-10 w-full h-full">
      <Hero />
      <TrendingCollection />
      <TopCreators />
    </div>
  )
}
