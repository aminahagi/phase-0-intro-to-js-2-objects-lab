// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}


function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
    ...obj,
    [key] : value
  }
}


console.log(updateEmployeeWithKeyAndValue(employee, "workId", 340))
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}


destructivelyUpdateEmployeeWithKeyAndValue(employee, "workId", 250)
console.log(employee);

function deleteFromEmployeeByKey(obj, key){
    const Nobj = {
        ...obj
    }
    delete Nobj[key];
    return Nobj;
}


console.log(deleteFromEmployeeByKey(employee, "workId"))
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}


destructivelyDeleteFromEmployeeByKey(employee, "workId")
console.log(employee);