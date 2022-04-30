const inquirer = require("inquirer");
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const generateHtml = require("./Develop/util/generateHtml");
const fs = require("fs");
const teamBuilder = [];

inquirer.prompt([
    {
        name: "managerName",
        type: "input",
        message:"Please enter the manager's name"
    },
    {
        name: "managerId",
        type: "input",
        message:"Please enter the manager's id"
    },
    {
        name: "managerEmail",
        type: "input",
        message:"Please enter the manager's email"
    },
    {
        name: "managerOffice",
        type: "input",
        message:"Please enter the manager's office number"
    }   
]).then(function(response){
    const newManger = new Manager(response.managerName,response.managerId,response.managerEmail,response.managerOffice)
    teamBuilder.push(newManger);
    task();
})
function task() {
    console.log(teamBuilder);
    inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message:"What would you like to do",
            choices:["add intern", "add Engineer", "finalize"]
        }   
    ]).then(function(response){
        if (response.choice === "add intern") {
            inquirer.prompt([
                {
                        name: "internName",
                        type: "input",
                        message:"Please enter the intern's name"
                },
                {
                    name: "internId",
                    type: "input",
                    message:"Please enter the intern's id"
                },
                {
                    name: "internEmail",
                    type: "input",
                    message:"Please enter the intern's email"
                },
                {
                    name: "internSchool",
                    type: "input",
                    message:"Please enter the intern's school"
                }
            ]).then(function(response){
                const newIntern = new Intern (response.internName,response.internId,response.internEmail,response.internSchool);
                teamBuilder.push(newIntern);
                task();
            })
        }
        if (response.choice === "add Engineer") {
            inquirer.prompt([
                {
                        name: "engineerName",
                        type: "input",
                        message:"Please enter the engineer's name"
                },
                {
                    name: "engineerId",
                    type: "input",
                    message:"Please enter the engineer's id"
                },
                {
                    name: "engineerEmail",
                    type: "input",
                    message:"Please enter the engineer's email"
                },
                {
                    name: "engineerGithub",
                    type: "input",
                    message:"Please enter the engineer's Github username"
                }
            ]).then(function(response){
                const newEngineer = new Engineer (response.engineerName,response.engineerId,response.engineerEmail,response.engineerGithub);
                teamBuilder.push(newEngineer);
                task();
            })
        }
        if(response.choice === "finalize"){
            console.log("CONGRATULATION!!!YOU HAVE COMPLETED BUILDING YOUR TEAM. Please check the UTIL fold for your URTEAM file :) ");
            fs.writeFile("./Develop/util/URteam.html", generateHtml(teamBuilder), function(error){
                console.log(error);
            })
            
        }

    })
}