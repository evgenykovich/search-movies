import { MovieSearch } from '../../components'
import {
  HomePageContainer,
  HomePageHeader,
} from './HomePage.styles'

export const HomePage = () => {
  return (
    <HomePageContainer data-testid='home-page'>
      <HomePageHeader>Search Movies</HomePageHeader>
      <MovieSearch/>
    </HomePageContainer>
  )
}
