import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import { ConfirmationDialogComponent } from "./confirmation-dialog.component"

const constantValues = {
  title: 'test title',
  children: 'test children',
  acceptButtonText: 'Accept',
  closeButtonText: 'Close',
}

describe('components/confirmation-dialog', () => {
  it('should render the component when isOpen is true', async () => {
    // Arrange
    const { title, children, acceptButtonText, closeButtonText } = constantValues

    // Act
    render(<ConfirmationDialogComponent
      title={title} isOpen={true}
      onAccept={() => { }} onClose={() => { }}
      labels={{ closeButton: closeButtonText, acceptButton: acceptButtonText }}>{children}</ConfirmationDialogComponent>)

    // Assert
    const titleElement = screen.queryByTestId('title')
    const childrenElement = screen.queryByTestId('children')
    const acceptButtonElement = screen.queryByRole('button', { name: acceptButtonText })
    const closeButtonElement = screen.queryByRole('button', { name: closeButtonText })


    expect(titleElement).toBeInTheDocument()
    expect(childrenElement).toBeInTheDocument()
    expect(acceptButtonElement).toBeInTheDocument()
    expect(closeButtonElement).toBeInTheDocument()
  })

  it('should not render the component when isOpen is false', () => {
    // Arrange
    const { title, children, acceptButtonText, closeButtonText } = constantValues

    // Act
    render(<ConfirmationDialogComponent
      title={title} isOpen={false}
      onAccept={() => { }} onClose={() => { }}
      labels={{ closeButton: closeButtonText, acceptButton: acceptButtonText }}>{children}</ConfirmationDialogComponent>)

    // Assert
    const titleElement = screen.queryByTestId('title')
    const childrenElement = screen.queryByTestId('children')
    const acceptButtonElement = screen.queryByRole('button', { name: acceptButtonText })
    const closeButtonElement = screen.queryByRole('button', { name: closeButtonText })

    expect(titleElement).not.toBeInTheDocument()
    expect(childrenElement).not.toBeInTheDocument()
    expect(acceptButtonElement).not.toBeInTheDocument()
    expect(closeButtonElement).not.toBeInTheDocument()
  })

  it('should call the close method when the user clicks on the close button', () => {
    // Arrange
    const { title, children, acceptButtonText, closeButtonText } = constantValues
    const onCloseMock = jest.fn()
    // Act
    render(<ConfirmationDialogComponent
      title={title} isOpen={true}
      onAccept={() => { }} onClose={onCloseMock}
      labels={{ closeButton: closeButtonText, acceptButton: acceptButtonText }}>{children}</ConfirmationDialogComponent>)

    const closeButtonElement = screen.queryByRole('button', { name: closeButtonText })
    userEvent.click(closeButtonElement)

    // Assert
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it('should call the accept and close method when the user clicks on the accept button', () => {
    // Arrange
    const { title, children, acceptButtonText, closeButtonText } = constantValues
    const onAcceptMock = jest.fn()
    const onCloseMock = jest.fn()
    // Act
    render(<ConfirmationDialogComponent
      title={title} isOpen={true}
      onAccept={onAcceptMock} onClose={onCloseMock}
      labels={{ closeButton: closeButtonText, acceptButton: acceptButtonText }}>{children}</ConfirmationDialogComponent>)

    const acceptButtonElement = screen.queryByRole('button', { name: acceptButtonText })
    userEvent.click(acceptButtonElement)

    // Assert
    expect(onAcceptMock).toHaveBeenCalledTimes(1)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
