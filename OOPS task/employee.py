from abc import ABC,abstractmethod

class Employee(ABC):
    def __init__(self,emp_id,name,base_salary):
        self._emp_id = emp_id
        self._name = name
        self._base_salary = base_salary
        self._department = None
    
    def assign_department(self,department):
        self._department = department
    
    def get_details(self):
        return f"ID: {self._emp_id},Name: {self._name},Dept: {self._department}"
    
    @abstractmethod
    def calculate_salary(self):
        pass
