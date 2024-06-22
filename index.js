#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addItems = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos? "
        },
        {
            name: "AddMore",
            type: "confirm",
            message: "Do you want to add more ? ",
            default: "false"
        }
    ]);
    todos.push(addItems.todo);
    console.log(todos);
}
;
