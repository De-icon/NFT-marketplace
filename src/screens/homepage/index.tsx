import Hero from "./hero";
import TopCreators from "./topCreators";
import TrendingCollection from "./trendingCollection"
import Categories from "./categories"
import Discover from "./discover"

export default function Homepage() {
  return (
    <div className=" p-10 w-full h-full">
      <Hero />
      <TrendingCollection />
      <TopCreators variant=""/>
      <Categories />
      <Discover />
    </div>
  )
}
