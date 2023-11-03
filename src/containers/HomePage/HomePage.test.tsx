import React from 'react'
import { render } from '@testing-library/react'
import { HomePage } from './HomePage'

test('Renders the HomePage component', () => {
  const { getByTestId } = render(<HomePage/>)

  expect(getByTestId('home-page')).toBeInTheDocument()
})

test('Renders the "Search Movies" header', () => {
  const { getByText } = render(<HomePage/>)

  expect(getByText('Search Movies')).toBeInTheDocument()
})