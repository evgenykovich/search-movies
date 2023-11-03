import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Table } from './Table'

describe('Table', () => {
  it('renders the component with headers and data', () => {
    const searchData = {
      data: [
        { Title: 'Movie 1', Year: 2022, imdbID: 'tt1' },
        { Title: 'Movie 2', Year: 2021, imdbID: 'tt2' },
      ],
      total_pages: 2,
    }

    const { getByTestId, getByText } = render(
      <Table
        searchData={searchData}
        handleSetData={() => {
        }}
        handleFetchNewData={() => {
        }}
        currentPage={1}
        searchValue={''}
      />
    )

    const tableRow = getByTestId('table-row-tt1')
    const headerTitle = getByTestId('header-Title')
    const headerYear = getByTestId('header-Year')

    expect(tableRow).toBeInTheDocument()
    expect(headerTitle).toBeInTheDocument()
    expect(headerYear).toBeInTheDocument()

    expect(getByText('Movie 1')).toBeInTheDocument()
    expect(getByText('Movie 2')).toBeInTheDocument()
  })

  it('sorts data when a header is clicked', () => {
    const handleSetData = jest.fn()

    const searchData = {
      data: [
        { Title: 'Movie A', Year: 2022, imdbID: 'tt1' },
        { Title: 'Movie B', Year: 2021, imdbID: 'tt2' },
      ],
      total_pages: 2,
    }

    const { getByTestId } = render(
      <Table
        searchData={searchData}
        handleSetData={handleSetData}
        handleFetchNewData={() => {
        }}
        currentPage={1}
        searchValue={''}
      />
    )

    const headerTitle = getByTestId('header-Title')
    fireEvent.click(headerTitle)

    expect(handleSetData).toHaveBeenCalledWith([
      { Title: 'Movie A', Year: 2022, imdbID: 'tt1' },
      { Title: 'Movie B', Year: 2021, imdbID: 'tt2' },
    ])
  })

  it('handles page change when Pagination is clicked', () => {
    const handleFetchNewData = jest.fn()

    const searchData = {
      data: [
        { Title: 'Movie A', Year: 2022, imdbID: 'tt1' },
        { Title: 'Movie B', Year: 2021, imdbID: 'tt2' },
      ],
      total_pages: 2,
    }

    const { getByText } = render(
      <Table
        searchData={searchData}
        handleSetData={() => {
        }}
        handleFetchNewData={handleFetchNewData}
        currentPage={3}
        searchValue={''}
      />
    )

    const pagination = getByText('2')
    fireEvent.click(pagination)

    expect(handleFetchNewData).toHaveBeenCalledWith(2)
  })
})
