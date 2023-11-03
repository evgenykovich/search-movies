import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders the component with page numbers', () => {
    const { getByTestId, getByText } = render(
      <Pagination currentPage={1} totalPages={2} onPageChange={() => {
      }}/>
    )

    const previousButton = getByTestId('previous-button')
    const nextButton = getByTestId('next-button')

    expect(previousButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()

    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
  })

  it('does not trigger the onPageChange callback when the "Previous" button is disabled', () => {
    const onPageChange = jest.fn()
    const { getByTestId } = render(
      <Pagination currentPage={1} totalPages={10} onPageChange={onPageChange}/>
    )

    const previousButton = getByTestId('previous-button')
    fireEvent.click(previousButton)

    expect(onPageChange).toHaveBeenCalledTimes(0)
  })

  it('does not trigger the onPageChange callback when the "Next" button is disabled', () => {
    const onPageChange = jest.fn()
    const { getByTestId } = render(
      <Pagination currentPage={10} totalPages={10} onPageChange={onPageChange}/>
    )

    const nextButton = getByTestId('next-button')
    fireEvent.click(nextButton)

    expect(onPageChange).toHaveBeenCalledTimes(0)
  })

  it('triggers the onPageChange callback when a page number is clicked', () => {
    const onPageChange = jest.fn()
    const { getByText } = render(
      <Pagination currentPage={3} totalPages={10} onPageChange={onPageChange}/>
    )

    const pageThreeButton = getByText('3')
    fireEvent.click(pageThreeButton)

    expect(onPageChange).toHaveBeenCalledWith(3)
  })
})