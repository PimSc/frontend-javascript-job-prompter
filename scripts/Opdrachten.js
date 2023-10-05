// Opdracht 1a
// console.log("de afdeling sales heeft " + departments.sales.numberOfEmployees + " medewerkers");

// Opdracht 1b
// console.log(" Marketing is een leuke afdeling om te werken. " + departments.marketing.description);

// Opdracht 1c
// console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers")

// Opdracht 1d
// console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.jobs[1].description)


// Opdracht 2a
const userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service?');
console.log(userInput);


// Opdracht 2b
let roleTitleElement = document.getElementById("role-title");
let departmentDescriptionElement = document.getElementById("department-description");

switch (userInput) {
    case "marketing":
        roleTitleElement.textContent = "Marketing"
        departmentDescriptionElement.textContent = departments.marketing.description;
        break
    case "sales":
        roleTitleElement.textContent = "Sales"
        departmentDescriptionElement.textContent = departments.sales.description;
        break
    case "customer-service":
        roleTitleElement.textContent = "customer-service"
        departmentDescriptionElement.textContent = departments["customer-service"].description;
        break
    default: const userInput = prompt("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen."); }


// Opdracht 2c -


// Opdracht 3a
// const jobChoice = prompt(`Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 4 in. 0: ${departments.marketing.jobs[0].title} 1: ${departments.marketing.jobs[1].title}2: ${departments.marketing.jobs[2].title}3: ${departments.marketing.jobs[3].title}4: ${departments.marketing.jobs[4].title}`)

// console.log(jobChoice);

// Opdracht 3b
// switch (jobChoice){
//     case `0`:
//         console.log(`Je koos ${departments.marketing.jobs[0].title}. Een uitdagende rol! ${departments.marketing.jobs[0].title}`);
//         break;
//     case `1`:
//         console.log(`Je koos ${departments.marketing.jobs[1].title}. Een uitdagende rol! ${departments.marketing.jobs[1].title}`);
//         break;
//     case `2`:
//         console.log(`Je koos ${departments.marketing.jobs[2].title}. Een uitdagende rol! ${departments.marketing.jobs[2].title}`);
//         break;
//     case `3`:
//         console.log(`Je koos ${departments.marketing.jobs[3].title}. Een uitdagende rol! ${departments.marketing.jobs[3].title}`);
//         break;
//     case `4`:
//         console.log(`Je koos ${departments.marketing.jobs[4].title}. Een uitdagende rol! ${departments.marketing.jobs[4].title}`);
//         break;
//     default:
//         console.log(`Maak een andere keuze`)
// }

// Opdracht 3c-

// Opdracht 4a
console.log(userInput + "is een leuke afdeling om te werken. Er werken op dit moment  " + departments[userInput].numberOfEmployees + " medewerkers.")

// Opdracht 4b
const choice = prompt(`Je koos ` + userInput + `.` + ` wil je meer weten? Voer een getal tussen 0 en 3 in. 0: ` + departments[userInput].jobs[0].title + `, 1: ` + departments[userInput].jobs[1].title+ `, 2: ` + departments[userInput].jobs[2].title + `, 3: ` + departments[userInput].jobs[3].title)


console.log(choice)

// Opdracht 4c
switch (choice) {
    case "0":
            console.log("Je koos " + departments[choice].jobs[0].title + ", " + departments[userInput].jobs.description[0])
    case "1":
        console.log("Je koos " + departments[choice].jobs[1].title + ", " + departments[userInput].jobs.description[1])
    case "2":
        console.log("Je koos " + departments[choice].jobs[2].title + ", " + departments[userInput].jobs.description[2])
    case "3":
        console.log("Je koos " + departments[choice].jobs[3].title + ", " + departments[userInput].jobs.description[3])

}