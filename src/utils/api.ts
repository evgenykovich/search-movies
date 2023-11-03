import axios from 'axios'

type getMoviesParams = {
  title?: string
  currentPage?: number
}

export const getMovies = async ({ title = '', currentPage = 1 }: getMoviesParams) => {
  const response = await axios.get(
    `https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${currentPage}`
  )

  return response.data
}