import { Table, TableValueProps } from '../Table'
import { useMovieData } from '../../hooks/useMovieData'
import { ContentContainer } from '../../containers/HomePage/HomePage.styles'
import {
  InputContainer,
  LabelContainer,
  SearchButton,
  SearchInput
} from './MovieSearch.styles'

export type MovieDataProps = {
  data: TableValueProps[]
  total_pages: number
  page?: number
}

export const MovieSearch = () => {
  const {
    data,
    searchValue,
    currentPage,
    setSearchValue,
    handleSearch,
    handleSetData,
    handlePageChange,
  } = useMovieData()

  return (
    <>
      <ContentContainer>
        <LabelContainer>Search for any movie you like:</LabelContainer>
        <InputContainer>
          <SearchInput
            type="text"
            placeholder="search for a movie"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </InputContainer>
      </ContentContainer>
      <ContentContainer>
        <Table
          searchData={data}
          searchValue={searchValue}
          handleSetData={handleSetData}
          handleFetchNewData={handlePageChange}
          currentPage={currentPage || 1}
        />
      </ContentContainer>
    </>
  )
}