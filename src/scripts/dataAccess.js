const applicationState = {
    people:[],
    }
    const mainContainer = document.querySelector("#container")
    const API = "http://localhost:8088"
    
    export const fetchEmployees = () => {
        return fetch(`${API}/employees`)
            .then(response => response.json())
            .then(
                (People) => {
                   
                    applicationState.people = People
                }
            )
    }

    export const fetchComputers = () => {
        return fetch(`${API}/computers`)
            .then(response => response.json())
            .then(
                (Computer) => {
                   
                    applicationState.computers = Computer
                }
            )
    }


    export const fetchDepartments = () => {
        return fetch(`${API}/departments`)
            .then(response => response.json())
            .then(
                (Department) => {
                   
                    applicationState.departments = Department
                }
            )
    }

    export const fetchLocations = () => {
        return fetch(`${API}/locations`)
            .then(response => response.json())
            .then(
                (Location) => {
                   
                    applicationState.locations = Location
                }
            )
    }

    export const fetchCustomers = () => {
        return fetch(`${API}/customers`)
            .then(response => response.json())
            .then(
                (Customer) => {
                   
                    applicationState.customers = Customer
                }
            )
    }

    export const fetchEmployeeCustomers = () => {
        return fetch(`${API}/employeeCustomers`)
            .then(response => response.json())
            .then(
                (eC) => {
                   
                    applicationState.EC = eC
                }
            )
    }


    export const getEmployees =() =>{
        return applicationState.people.map(person =>({...person}))
    }

    export const getComputers =() =>{
        return applicationState.computers.map(computer =>({...computer}))
    }

    export const getDepartments =() =>{
        return applicationState.departments.map(department =>({...department}))
    }

    export const getLocations =() =>{
        return applicationState.locations.map(location =>({...location}))
    }

    export const getCustomers =() =>{
        return applicationState.customers.map(customer =>({...customer}))
    }
    export const getEmployeeCustomers =() =>{
        return applicationState.EC.map(employeeC =>({...employeeC}))
    }