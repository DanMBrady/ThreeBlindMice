
import { customers } from "./customers.js"
import { employees } from "./employees.js"

export const threeMice =() =>{
    return `
    
    <div class ="top">
    <h1>Employee Bio's</h1>
    </div>
    <div class ="main">
    ${employees()}
    </div>
    <div class ="bottom">
    <h1>Customer Bio's</h2>
    </div>
    <div class="base">
    ${customers()}
    </div>
    
    `
    
}