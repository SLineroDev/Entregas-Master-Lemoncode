import * as apiModel from './api/project.api-model'
import * as viewModel from './project.vm'
import { mapProjectFromApiToVm } from './project.mapper'

describe('./pods/project', () => {
  it('should return empty project when feeding undefined project', () => {
    // Arrange
    const project = undefined
    const expectedResult = viewModel.createEmptyProject()

    // Act
    const result = mapProjectFromApiToVm(project)

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it('should return empty project when feeding null project', () => {
    // Arrange
    const project = null
    const expectedResult = viewModel.createEmptyProject()

    // Act
    const result = mapProjectFromApiToVm(project)

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it('should return empty project when feeding empty object', () => {
    // Arrange
    const project = {} as apiModel.Project
    const expectedResult = viewModel.createEmptyProject()

    // Act
    const result = mapProjectFromApiToVm(project)

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it('should return a project with one employee when feeding one project with one employee', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'test name',
      externalId: 'test extId',
      comments: 'test comment',
      isActive: true,
      employees: [{
        id: '1',
        isAssigned: true,
        employeeName: 'test employee name',
      },],
    }

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'test name',
      externalId: 'test extId',
      comments: 'test comment',
      isActive: true,
      employees: [{
        id: '1',
        isAssigned: true,
        employeeName: 'test employee name',
      },],
    }

    // Act
    const result = mapProjectFromApiToVm(project)

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it('should return a project with two employees when feeding one project with two employees', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'test name',
      externalId: 'test extId',
      comments: 'test comment',
      isActive: true,
      employees: [{
        id: '1',
        isAssigned: true,
        employeeName: 'test employee name',
      },
      {
        id: '2',
        isAssigned: true,
        employeeName: 'test employee name 2',
      }],
    }

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'test name',
      externalId: 'test extId',
      comments: 'test comment',
      isActive: true,
      employees: [{
        id: '1',
        isAssigned: true,
        employeeName: 'test employee name',
      },
      {
        id: '2',
        isAssigned: true,
        employeeName: 'test employee name 2',
      }],
    }

    // Act
    const result = mapProjectFromApiToVm(project)

    // Assert
    expect(result).toEqual(expectedResult)
  })
})
