/*
Joshua Miller
ITD2
11/16/2021
Employee Tracker
*/





class Employee{
  constructor(name,age){
    this.name= name;
    this.age= age;
    this.annualSalary=0;
  }
}

class PartTime extends Employee{
  constructor(name,age,payRate,hours){
    super(name,age); 
    this.payRate=payRate;
    this.hours=hours;
    this.employeeType="Part Time"; 
    //console.log("Part Time Created!!!");  
  }
  calculatePay(){
    let annualSalary = (this.payRate*this.hours)*52;
  }
}

class FullTime extends Employee{
  constructor(name,age,payRate){
    super(name,age);
    this.payRate=payRate;
    this.employeeType="Full Time";
  }
  calculatePay(){
    this.annualSalary = (this.payRate*this.hours)*52-1000;
  }
}

class Main{
  constructor(){
    console.log("Main Created"); 
    this.employeeArray=[];
    const partTime = new PartTime("Josh",32,15,35,"PartTime");
    const partTime2 = new PartTime("Jeff",33,"75000",18,38,"PartTime");
    const partTime3 = new PartTime("Aaron",38,"15000",11,12,"PartTime");
    this.employeeArray.push(partTime3);
    this.employeeArray.push(partTime2);
    this.employeeArray.push(partTime);
    this.employeeArray.sort;
    this.menuStart();
    }

      menuStart(){
        console.log(this.employeeArray);
        this.mainChoice = prompt("Main Menu\n1. Add Employee\n2. Remove Employee\n3. Edit Employee \n4. Display Employee");
        if(this.mainChoice == "1"){
          this.addEmployee();
        }  
        else if(this.mainChoice == "2"){
          this.removeEmployee();
        }
        else if(this.mainChoice == "3"){
          this.editEmployee();
        }
        else if(this.mainChoice == "4"){
          this.displayEmployee();
        }
      }
      
      addEmployee(){
        let add;
        add = prompt("Add Employee Name,Age,Hours/Wk,Pay Rate [Separate each by a Comma]");
        let input= add.split(",");
        
        if (input[2]<=39){
          const partTime = new PartTime(input[0],input[1],input[2],input[3]);
          this.employeeArray.push(partTime);
          console.log(this.employeeArray);
          this.menuStart();
          }
        else {
          const fullTime = new FullTime(input[0],input[1],input[2],input[3]);
          this.employeeArray.push(fullTime);
          console.log(this.employeeArray);
          this.menuStart();
          }
        }
      
      removeEmployee(){
        let remove;
        remove = prompt("Enter the Employee ID and Name");
        let removeInput = remove.split(",");
        this.employeeArray.splice(this.employeeArray.indexOf(removeInput));


        this.menuStart();
      }
      
      editEmployee(){
        let edit;
        edit = prompt("Enter Employee Name and updated PayRate" + "[Separated by a Comma]");
        let editInput = edit.split(",");
        this.employeeArray.splice(editInput);
        console.log(this.employeeArray);
        this.menuStart();      
      }
      displayEmployee(){
        console.log("My Employees");
        console.log("ID\tName\tSalary\thrs\tpay\tFT/PT");
        console.log(this.employeeArray);
        this.menuStart();
      }
  }

(()=>{
  const main = new Main();
})();





























      // const partTime = new PartTime("Josh",32,"50000",15,35,"PartTime");
      // const partTime2 = new PartTime("Marcy",33,"75000",18,38,"PartTime");
      // const partTime3 = new PartTime("Aaron",38,"15000",11,12,"PartTime");
      // let partTimers = [partTime,partTime2,partTime3];




    // function mainMenu(){

//     let mainChoice = prompt("Main Menu\n1. Add Employee\n2. Remove Employee\n3. Edit Employee \n4. Display Employee");

//     let addEmployee;
//     let removeEmployee;
//     let editEmployee;

//       if (mainChoice == "1"){
//         addEmployee = prompt("Add Employee Name,Age,Hours/Wk,Pay Rate [Separate each by a Comma]");
//         let employeeArray= addEmployee.split(",");
//         console.log(employeeArray);
        
//           if (employeeArray[2]<=39){
//             const partTime = new PartTime();
//             mainMenu();
//             }
//           else {
//             const fullTime = new FullTime();
//             mainMenu();         
//         }
//       }
//         else if(mainChoice == "2"){
//           removeEmployee = prompt("Enter Employee Number and Name you want to Remove")
//           console.log("removeEmployee");
//           mainMenu();
//         }
//         else if(mainChoice == "3"){
//           editEmployee = prompt("Update Pay Rate of Employee")
//           console.log("editEmployee");
//           mainMenu();
//         }
//         else if(mainChoice == "4"){
//           console.log("My Employees");
//           console.log("ID  Name  Salary  HRS  Pay  FT/PT");
//           mainMenu();
//         }
//         else{
//           alert("Enter a Valid Option");
//           mainMenu();
//       }
//   }