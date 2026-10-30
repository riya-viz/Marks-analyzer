
let sName = "Riya kumari";
let sRoll = 19;
let sDepartment = "Computer Science";

let markEnglish = 84;
let markScience = 95;
let markSocial = 96;
let markHindi = 83;
let markMaths = 98;

let score = [84, 95, 96, 83, 98];

function getTotal(score) {
    let sum = 0;

    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }

    console.log("Total Marks =", sum);
}

getTotal(score);

function getPercentage(score) {
    let sum = 0;

    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }

    let percent = (sum / 500) * 100;

    console.log("Percentage =", percent, "%");
}

getPercentage(score);

function getHighest(score) {
    let sortedMarks = score.sort((a, b) => a - b);

    console.log("Highest Marks =", sortedMarks[sortedMarks.length - 1]);
}

getHighest(score);

function getLowest(score) {
    let sortedMarks = score.sort((a, b) => a - b);

    console.log("Lowest Marks =", sortedMarks[0]);
}

getLowest(score);

let subjectCount = 0;

for (let i = 0; i < score.length; i++) {
    if (score[i] >= 40) {
        subjectCount++;
    }
}

console.log("Number of subjects having marks greater than 40 =", subjectCount);

let fullName = "pratibha singh";

let capitalName = fullName.toUpperCase();

let totalCharacters = fullName.length;

console.log("Name in uppercase:", capitalName);
console.log("Number of characters:", totalCharacters);

function showReport(score) {

    console.log("========== STUDENT REPORT ==========");

    console.log("Name :", sName);
    console.log("Roll Number:", sRoll);
    console.log("Department :", sDepartment);

    let sum = 0;

    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }

    console.log("Total Marks =", sum);

    let percent = (sum / 500) * 100;

    console.log("Percentage =", percent, "%");

    let sortedMarks = score.sort((a, b) => a - b);

    console.log("Highest Marks =", sortedMarks[sortedMarks.length - 1]);

    console.log("Lowest Marks =", sortedMarks[0]);

    let passMark = 33;
    let passedCount = 0;

    for (let i = 0; i < score.length; i++) {
        if (score[i] >= passMark) {
            passedCount++;
        }
    }

    console.log("Number of subjects passed =", passedCount);
}

showReport(score);

function getRemark(score) {

    let sum = 0;

    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }

    let percent = (sum / 500) * 100;

    if (percent >= 80) {
        console.log("Excellent");
    }
    else if (percent >= 60 && percent <= 80) {
        console.log("Good");
    }
    else if (percent >= 40 && percent <= 60) {
        console.log("Average");
    }
    else {
        console.log("Needs Improvement");
    }
}

getRemark(score);
