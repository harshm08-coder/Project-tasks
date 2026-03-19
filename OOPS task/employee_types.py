from employee import Employee

class FullTimeEmployees(Employee):
    def __init__(self,emp_id,name,base_salary,bonus):
        super().__init__(emp_id,name,base_salary)
        self.bonus = bonus

    def calculate_salary(self):
        return self._base_salary + self.bonus
    
class PartTimeEmployee(Employee):
    def __init__(self,emp_id,name,hourly_rate,hours_worked):
        super().__init__(emp_id,name,0)
        self.hourly_rate = hourly_rate
        self.hourly_worked = hours_worked

    def calculate_salary(self):
        return self.hourly_rate * self.hourly_worked
    
class Intern(Employee):
    def __init__(self,emp_id,name,stipend):
        super().__init__(emp_id,name,stipend)

    def calculate_salary(self):
        return self._base_salary