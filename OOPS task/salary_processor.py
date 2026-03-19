from abc import ABC,abstractmethod

class SalaryProcessor(ABC):
    @abstractmethod
    def process_salary(self,employee):
        pass