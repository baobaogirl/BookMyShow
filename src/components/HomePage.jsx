import Slider from './MainContent/Slider'
import RecommendedMovies from './MainContent/RecommendedMovies'
import Banner from './MainContent/Banner'
import LiveEvents from './MainContent/LiveEvents'
import Primere from './MainContent/Primere'
import MusicStudio from './MainContent/MusicStudio'
import Outdoor from './MainContent/Outdoor'
import LaughterTherapy from './MainContent/LaughterTherapy'
import PopularEvents from './MainContent/PopularEvents'
import LatestPlays from './MainContent/LatestPlays'
import TopGames from './MainContent/TopGames'
import FunActivities from './MainContent/FunActivities'
import Trending from './MainContent/Trending'

function HomePage() {
  return (
    <>
      <Slider />
      <RecommendedMovies /> 
      <Banner />
      <LiveEvents />
      <Primere />
      <MusicStudio />
      <Outdoor />
      <LaughterTherapy />
      <PopularEvents />
      <LatestPlays />
      <TopGames />
      <FunActivities />
      <Trending />
    </>
  )
}

export default HomePage
