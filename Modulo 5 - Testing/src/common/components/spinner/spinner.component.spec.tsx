import { render, screen } from "@testing-library/react"
import React from "react"
import { SpinnerComponent } from "./spinner.component"

//Test for spinner.component.tsx
describe('SpinnerComponent', () => {
  it('should not render the modal', () => {
    render(<SpinnerComponent />)

    //Assert that the spinner is not displayed at first
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument()

  })

  it('should render the modal after some time', () => {
    render(<SpinnerComponent />)

    //Assert that the spinner is displayed after some time
    setTimeout(() => {
      expect(screen.queryByTestId('spinner')).toBeInTheDocument()
    }, 1000)

  })
})
