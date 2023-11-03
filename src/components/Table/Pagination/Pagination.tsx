import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { PaginationButton, PaginationContainer, PaginationPlaceholder } from './Pagination.styles'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const maxVisiblePages = 5
  const maxPagesEitherSide = Math.floor(maxVisiblePages / 2)
  const startPage = Math.max(1, currentPage - maxPagesEitherSide)
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index)

  return (
    <PaginationContainer data-testid="pagination">
      <PaginationButton
        data-testid="previous-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <BsChevronLeft/>
      </PaginationButton>
      {startPage > 1 && (
        <>
          <PaginationButton onClick={() => onPageChange(1)}>1</PaginationButton>
          {startPage > 2 && <PaginationPlaceholder>...</PaginationPlaceholder>}
        </>
      )}
      {pages.map((page) => (
        <PaginationButton
          key={page}
          onClick={() => onPageChange(page)}
          selected={currentPage === page}
        >
          {page}
        </PaginationButton>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <PaginationPlaceholder>...</PaginationPlaceholder>}
          <PaginationButton onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </PaginationButton>
        </>
      )}
      <PaginationButton
        data-testid="next-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <BsChevronRight/>
      </PaginationButton>
    </PaginationContainer>
  )
}
