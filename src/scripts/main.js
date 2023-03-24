import { fetchComputers, fetchCustomers, fetchDepartments, fetchEmployeeCustomers, fetchEmployees,fetchLocations } from "./dataAccess.js"
import { threeMice } from "./workForce.js"
const mainContainer = document.querySelector("#container")

const render =() =>{
    fetchEmployees()
    .then(()=> fetchComputers())
    .then(()=> fetchDepartments())
    .then(()=> fetchLocations())
    .then(()=> fetchCustomers())
    .then(()=> fetchEmployeeCustomers())
    .then(
        () => {
            mainContainer.innerHTML = threeMice()
        }
    )
   
}
render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)