from employee_types import FullTimeEmployees,PartTimeEmployee,Intern
from department import Department
from payroll import CompanyPayroll

employees = []
departments  = {}
payroll = CompanyPayroll()

while True:
    print("\n0.Print Hello\n1.Add Employee\n2.Create Department\n3.Assign Employee\n4.Show Employees\n5.Process Salary\n6.Exit")
    choice = input("Enter choice:")

    if choice == "0":
        print("Hello!")

    elif choice =="1":
        t = input("Type(1.FullTime 2.PartTime 3.Intern):")
        emp_id = input("ID:")
        name = input("Name:")

        if t=="1":
            salary = float(input("Base Salary:"))
            bonus = float(input("Bonus:"))
            employees.append(FullTimeEmployees(emp_id,name,salary,bonus))

        elif t=="2":
            rate = float(input("Hourly rate:"))
            hours = float(input("Hours worked:"))
            employees.append(PartTimeEmployee(emp_id,name,rate,hours))

        elif t=="3":
            stipend = float(input("Stipend:"))
            employees.append(Intern(emp_id,name,stipend))

    elif choice=="2":
        did = input("Dept ID:")
        dname = input("Dept name")
        departments[dname] = Department(did,dname)

    elif choice=="3":
        name = input("Employee name:")
        dname = input("Department name:")
        for e in employees:
            if e._name ==name:
                departments[dname].add_employees(e)

    elif choice=="4":
        for d in departments.values():
            print("\nDepartment:",d.dept_name)
            d.show_employees()

    elif choice=="5":
        for e in employees:
            payroll.process_salary(e)

    elif choice=="6":
        break

    