import { render } from '@redwoodjs/testing/web'

import CommonLayout from './CommonLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CommonLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommonLayout />)
    }).not.toThrow()
  })
})
