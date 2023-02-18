#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let tasks = [];
async function start() {
    let n = "";
    await inquirer.prompt([{
            type: "list",
            name: "option",
            message: "............ Select One Option .........\n",
            choices: ["Show Tasks", "Add Task", "Delete Task"]
        }]).then((answers) => {
        n = answers.option;
    });
    if (n == "Show Tasks") {
        await showTask();
    }
    else if (n == "Add Task") {
        await addTask();
    }
    else if (n == "Delete Task") {
        await deleteTask();
    }
}
async function againPlayMatch() {
    do {
        await start();
        console.log("\n");
        var option = await inquirer.prompt([{
                type: "input",
                message: chalk.green("Press Y to Continue or Press Any key to Exit.........."),
                name: "question",
            }]);
    } while (option.question == "y" || option.question == "Y" || option.question == "YES" || option.question == "yes" || option.question == "Yes");
}
;
await againPlayMatch();
async function addTask() {
    await inquirer.prompt([{
            type: "input",
            name: "task",
            message: "............ Enter Task to ADD .........\n",
        }]).then((answers) => {
        tasks.push(answers.task);
        console.log("............... Task Added ..................");
    });
}
function deleteTask() {
    if (tasks.length > 0) {
        tasks.pop();
        console.log("Task Deleted");
    }
    else {
        console.log("No remaing Tasks to Delete....");
    }
}
function showTask() {
    let i = 0;
    for (let task of tasks) {
        console.log(`Task : ${i} is ${task} `);
        i++;
    }
}
