import { renderHook } from '@testing-library/react-hooks'
import { Lookup } from 'common/models'
import { act } from 'react-test-renderer'
import { useConfirmationDialog } from './'

describe('components/confirmation-dialog.hook', () => {
  it('should return an object with isOpen as false and an emptyLookup', () => {
    const { result } = renderHook(() => useConfirmationDialog())

    expect(result.current.isOpen).toEqual(false)
    expect(result.current.onAccept).toEqual(expect.any(Function))
    expect(result.current.onClose).toEqual(expect.any(Function))
    expect(result.current.onOpenDialog).toEqual(expect.any(Function))
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' })
  })

  it('should return an object with isOpen as true and an emptyLookup created after calling onOpenDialog', () => {
    const { result } = renderHook(() => useConfirmationDialog())

    const lookup: Lookup = { id: '1', name: 'test' }


    expect(result.current.isOpen).toEqual(false)
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' })

    act(() => {
      result.current.onOpenDialog(lookup)
    })

    expect(result.current.isOpen).toEqual(true)
    expect(result.current.itemToDelete).toEqual(lookup)
  })

  it('should return an object with isOpen as true and an emptyLookup created after calling onOpenDialog and then calling onClose', () => {
    const { result } = renderHook(() => useConfirmationDialog())

    const lookup: Lookup = { id: '1', name: 'test' }


    expect(result.current.isOpen).toEqual(false)
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' })

    act(() => {
      result.current.onOpenDialog(lookup)
    })

    expect(result.current.isOpen).toEqual(true)
    expect(result.current.itemToDelete).toEqual(lookup)

    act(() => {
      result.current.onClose()
    })

    expect(result.current.isOpen).toEqual(false)
  })
})
