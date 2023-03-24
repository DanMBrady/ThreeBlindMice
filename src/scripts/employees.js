import { getEmployees, getComputers, getDepartments, getLocations } from "./dataAccess.js";
import { getCustomers, getEmployeeCustomers } from "./dataAccess.js";

export const employees = () =>{
    const employees = getEmployees()
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    const customers = getCustomers()
    const employeeCustomers = getEmployeeCustomers()


let correctComputer = (employee) =>{
    for(const computer of computers){
        if(computer.id === employee.computerId){
            return computer
        }
    }
}

let correctDepartment = (employee) =>{
    for(const department of departments){
        if(department.id === employee.departmentId){
            return department
        }
    }
}

let correctLocation = (employee) =>{
    for(const location of locations){
        if(location.id === employee.locationId){
            return location
        }
    }
}

let correctCustomer = (employee) =>{
   // let correctEC= null
    let string =""
    let correctEC = employeeCustomers.filter(customer =>customer.employeeId=== employee.id)
    let correctC = customers.filter(customer => correctEC.find(name=> name.customerId === customer.id) )
    let i =0
    for(const match of correctC){
        if(i===0){
            string+=`${match.name}`
            i++
        }
        else{
            string +=` and ${match.name}`
        }
    }
    
    return string


}


    let html = `
    
        ${
            employees.map(
                employee=>{
                    const computer = correctComputer(employee)
                    const department = correctDepartment(employee)
                    const location = correctLocation(employee)
                    const customer = correctCustomer(employee)
                    
                    return `<div class ="bios">
                    <article> <h2>Employee Name</h2></article>
                       <article>${employee.firstName} ${employee.lastName}</article>
                       <article> <h2>Computer</h2></article>
                       <article>Currently using a ${computer.year} ${computer.model}</article>
                       <article> <h2>Department</h2></article>
                       <article>Works in the ${department.name} department</article>
                       <article> <h2>Location</h2></article>
                       <article>Works in the ${location.name} office</article>
                       <article> <h2>Customers</h2></article>
                       ${customer}
                       </div>`

                }
            ).join('')
               
            }
            
        `
        return html
   
   
    }
    
