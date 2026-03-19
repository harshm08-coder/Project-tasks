from salary_processor import SalaryProcessor

class CompanyPayroll(SalaryProcessor):
    def process_salary(self, employee):
        print(f"Salary of {employee._name} = {employee.calculate_salary()}")