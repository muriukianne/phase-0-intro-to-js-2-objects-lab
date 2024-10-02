function updateEmployeeWithKeyAndValue(employee, key , value){
    return{
        ...employee,
        [key]:value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key , value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey (employee,key) {
    let newEmployee = {...employee}
    delete newEmployee [key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee , key){
    delete employee[key]
    return employee
}

let employee = {
name : "Sam" , 
streetAddress : "sdft11",
age : 31
}
console.log(employee)

let updateEmployee = UpdateEmployeeWithKeyAndValue (employee,"streetAddress", "sdft12")
console.log (updatedEmployee)
console.log(employee)

destructivelyUpdateEmployeeWithKeyAndValue(employee,"age",32)
console.log (employee)


let newEmployee = deleteFromEmployeeByKey(employee , "age")
console.log(newEmployee)
console.log(employee)

destructivelyDeleteFromEmployeeByKey(employee , "streetAddress")
console.log(employee)