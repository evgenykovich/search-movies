import { renderHook, act } from '@testing-library/react'
import { useMovieData } from './useMovieData'
import * as api from '../utils/api'
import { MovieDataProps, TableValueProps } from '../components'

jest.mock('../utils/api')

const mockMovieData = {
  data: [
    {
      Title: 'Movie Page 1',
      Year: '2021',
      imdbID: 'Movie ID 1',
    },
    {
      Title: 'lorem ipsum',
      Year: '2021',
      imdbID: 'some id',
    },
  ],
  total_pages: 3,
}
const mockMovieDataForPage2 = {
  data: [
    {
      Title: 'Movie Page 2',
      Year: '2021',
      imdbID: 'Movie ID 2',
    },
    {
      Title: 'lorem ipsum 2',
      Year: '2021',
      imdbID: 'some id 1',
    },
  ],
  total_pages: 3,
}

type HookResult = {
  current: {
    handleSearch: () => Promise<void>
    handleSetData: (newMovieData: TableValueProps[]) => void
    data: MovieDataProps
    setSearchValue: (value: (((prevState: string) => string) | string)) => void
    currentPage: number | undefined
    searchValue: string
    handlePageChange: (page: number) => Promise<void>
  }
}

describe('useMovieData', () => {
  let hookResult: HookResult

  beforeEach(() => {
    const mockGetMovies = jest.spyOn(api, 'getMovies')
    mockGetMovies.mockResolvedValue(mockMovieData)

    hookResult = renderHook(() => useMovieData()).result
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch movie data when searchValue changes', async () => {
    act(() => {
      hookResult.current.setSearchValue('lorem ipsum')
    })

    await act(async () => {
      await hookResult.current.handleSearch()
    })

    expect(hookResult.current.data).toEqual(mockMovieData)
    expect(hookResult.current.currentPage).toBe(1)
  })

  it('should fetch movie data when currentPage changes', async () => {
    const mockGetMovies = jest.spyOn(api, 'getMovies')

    mockGetMovies
      .mockResolvedValueOnce(mockMovieData)
      .mockResolvedValueOnce(mockMovieDataForPage2)

    act(() => {
      hookResult.current.handlePageChange(1)
    })

    await act(async () => {
      await hookResult.current.handleSearch()
    })

    expect(mockGetMovies).toHaveBeenCalledWith({ title: '', currentPage: 1 })

    act(() => {
      hookResult.current.handlePageChange(2)
    })

    await act(async () => {
      await hookResult.current.handleSearch()
    })

    expect(mockGetMovies).toHaveBeenCalledWith({ title: '', currentPage: 2 })

    mockGetMovies.mockRestore()
  })
})
