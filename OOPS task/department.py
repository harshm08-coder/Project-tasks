class Department:
    def __init__(self,dept_id,dept_name):
        self.dept_id = dept_id
        self.dept_name = dept_name
        self.employees = []

    def add_employees(self,employee):
        employee.assign_department(self.dept_name)
        self.employees.append(employee)

    def show_employees(self):
        for emp in self.employees:
            print(emp.get_details())