import { useState } from 'react'
import { BsSortDownAlt, BsSortUp } from 'react-icons/bs'
import { MovieDataProps } from '../MovieSearch'
import { Pagination } from './Pagination'
import { Container, MoviesTable, MoviesTableContainer } from './Table.styles'

type TableProps = {
  searchData: MovieDataProps
  searchValue: string
  currentPage: number
  handleSetData: (data: TableValueProps[]) => void
  handleFetchNewData: (currentPage: number) => void
}

enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export type TableValueProps = {
  Title: string;
  Year: number;
  imdbID: string;
}

export const Table = ({ searchData, handleSetData, handleFetchNewData, currentPage }: TableProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<SortDirection>(SortDirection.Ascending)
  const { data, total_pages } = searchData ?? { data: [], total_pages: 0, page: 1 }

  const handlePageChange = (page: number) => {
    handleFetchNewData(page)
  }

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending)
    } else {
      setSortColumn(column)
      setSortOrder(SortDirection.Ascending)
    }

    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === SortDirection.Ascending) {
        return a[column as keyof TableValueProps] > b[column as keyof TableValueProps] ? 1 : -1
      } else {
        return b[column as keyof TableValueProps] > a[column as keyof TableValueProps] ? 1 : -1
      }
    })

    handleSetData(sortedData)
  }

  return (
    <>
      {searchData && searchData.data.length ? (<Container>
          <MoviesTableContainer>
            <MoviesTable>
              <thead>
              <tr>
                {data.length > 0 &&
                  Object.keys(data[0]).map((key) => {
                    if (key !== 'imdbID') {
                      return (
                        <th key={key} onClick={() => handleSort(key)} data-testid={`header-${key}`}>
                          <div>
                            {key} {sortColumn === key && (
                            sortOrder === SortDirection.Ascending ? <BsSortDownAlt/> : <BsSortUp/>
                          )}
                          </div>
                        </th>
                      )
                    }
                    return null
                  })}
              </tr>
              </thead>
              <tbody>
              {data.map((movie: TableValueProps) => (
                <tr key={movie.imdbID} data-testid={`table-row-${movie.imdbID}`}>
                  {Object.entries(movie).map(([key, value], index) => {
                    if (key !== 'imdbID') {
                      return <td key={index}>{value}</td>
                    }
                    return null
                  })}
                </tr>
              ))}
              </tbody>
            </MoviesTable>
          </MoviesTableContainer>
          <Pagination
            data-testid="pagination"
            currentPage={currentPage}
            totalPages={total_pages}
            onPageChange={handlePageChange}
          />
        </Container>
      ) : (
        <Container>no data</Container>
      )}
    </>
  )
}