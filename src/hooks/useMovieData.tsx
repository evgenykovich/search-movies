import { useEffect, useState } from 'react'
import { MovieDataProps, TableValueProps } from '../components'
import { getMovies } from '../utils/api'

export const useMovieData = () => {
  const [data, setData] = useState<MovieDataProps>({
    data: [],
    total_pages: 0,
  })
  const [searchValue, setSearchValue] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number | undefined>()

  const fetchData = async (title: string, page: number | undefined) => {
    try {
      const movieData = await getMovies({ title, currentPage: page })
      setData(movieData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData(searchValue, currentPage)
  }, [])

  const handleSetData = (newMovieData: TableValueProps[]) => {
    setData((prevData) => ({
      ...prevData,
      data: newMovieData,
    }))
  }

  const handleSearch = async () => {
    setCurrentPage(1)
    await fetchData(searchValue, 1)
  }

  const handlePageChange = async (page: number) => {
    setCurrentPage(page)
    await fetchData(searchValue, page)
  }

  return {
    data,
    searchValue,
    currentPage,
    setSearchValue,
    handleSearch,
    handleSetData,
    handlePageChange,
  }
}