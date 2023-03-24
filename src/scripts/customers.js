import { getEmployees,} from "./dataAccess.js";
import { getCustomers, getEmployeeCustomers } from "./dataAccess.js";


export const customers=() =>{
const customers= getCustomers()
const employeeCustomers = getEmployeeCustomers()
const employees = getEmployees()


let correctEmployee = (customer) =>{
    let string = ""
    let correctEC = employeeCustomers.filter(customerE =>customerE.customerId=== customer.id)
   
    let correctE = employees.filter(employee=> correctEC.find(name=> name.employeeId === employee.id))
    console.log(correctE)
    let i = 0 
    for(const match of correctE){
        if(i===0){
            string+=`${match.firstName} ${match.lastName}`
            i++
        }
        else{
            string +=` and ${match.firstName} ${match.lastName}`
        }
    }
    
    return string
}



    
    let html = `
    
            ${
                customers.map(customer=>{
                    const employee = correctEmployee(customer)

                    return `<div class ="customers">
                    <h2>Customer Name</h2>
                    <article>${customer.name}</article>
                    <h2>Products</h2>
                    <article>Currently selling ${customer.product}</article>
                    <h2>Employees</h2>
                   ${employee}
                    </div>`
                }).join('')

            }
    
    
    `
    return html
}