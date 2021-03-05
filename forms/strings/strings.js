let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

let upperCaseString = quoteString.toUpperCase();

console.log(upperCaseString)

let authorString = "- Henry Ford"

let completeString = quoteString.concat(authorString);

console.log(completeString)

let found = completeString.includes("Henry")

if (found = true){
    console.log("Henry was in completeString.")
} else {
    console.log("Henry was NOT in completeString.")}