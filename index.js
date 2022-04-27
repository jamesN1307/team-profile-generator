const inquirer = require ('inquirer')
const manager = require('./Develop/lib/Manager')
const engineer = require ('./Develop/lib/Engineer')
const intern = require ('./Develop/lib/Intern')
const employee = require ('./Develop/lib/Employee')
const fs = require('fs')

const prompt = [
    {
        type:'confirm',
        name: 'welcome',
        message: 'Hi there welcome to the Team Generator! Ready to start?',
    },
    {
        type:'input',
        name: 'teamName',
        message: 'Enter your team name',
    },
    {
        type:'rawlist',
        name:'teamMoto',
        message:"Choose a motto for your team",
        choices: [
            'Our best is your best.',
            'Programing is 10% writing code, and 90% understanding why it is not working',
            'Stop talking show me your code',
            'Smart data structures and dumb code works a lot better than the other way around.'
        ],
    },
    {
        type:"confirm",
        name: "addPeople",
        message: "Do you want to add more people?"
    }
]

inquirer.prompt(prompt).then((ans) => {
    const firstContent = generateRoot(ans)
    
})

const addManager = () =>{
    return inquirer.prompt ([
        {
            type:'input',
            name: 'managerName',
            message: 'Please enter the manager name of this team',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Quit playing. Can I get the manager name?");
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'managerId',
            message: 'Please enter the manager ID',
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log("Wrong ID please try again")
                    return false;
                } else {
                    return true
                }
            }
        },
        {
            type:'input',
            name: 'managerEmail',
            message: 'Please enter the manager email',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Quit playing. Can I get the manager email?");
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'officeNumber',
            message: 'Please enter the manager office Number',
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log("Wrong office number please try again")
                    return false;
                } else {
                    return true
                }
            }
        },
    ]) .then(ans => {
        const newManager = new Manager (ans.managerName, ans.managerID, ans.managerEmail, ans.officeNumber)
        manager.push(newManager);
        console.log(newManager)
        teamGenerator();
    })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type:'input',
            name: 'engineerName',
            messages: 'Please enter your engineer name to add on the team'
        }
    ])
}