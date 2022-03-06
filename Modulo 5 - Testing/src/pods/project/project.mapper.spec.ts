import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import * as projectMapper from './project.mapper';

describe('pods/project/projectMapper', () => {
  it('should render as expected passing required properties', () => {
    // Arrange

    let employeeSumaryList: apiModel.EmployeeSummary[] = [
      { id: '1', employeeName: 'Juan', isAssigned: false },
    ];

    let project: apiModel.Project = {
      id: '1',
      employees: employeeSumaryList,
      isActive: false,
      name: 'Test Project',
      comments: 'Test comment',
      externalId: '1',
    };
    // Act
    const projectMapped: viewModel.Project = projectMapper
      .mapProjectFromApiToVm(project);

      // Assert
      .expect(getByTestId(props['data-testid']))
      .toHaveClass(props.className);
    expect(getByText('Test rowData')).toBeInTheDocument();
  });

  it('should render a row component with two cells', () => {
    // Arrange
    const props = {
      className: 'test-className',
    };

    // Act

    // Assert
    expect(getByText('Test rowData 1')).toBeInTheDocument();
    expect(getByText('Test rowData 2')).toBeInTheDocument();
  });
});
