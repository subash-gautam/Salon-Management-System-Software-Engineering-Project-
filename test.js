/** @format */

const csvData = "John,Doe,30";
const dataArray = csvData.split(",");
dataArray[2] = "31"; // Update the age
const updatedCSV = dataArray.join(",");
console.log(updatedCSV); // Output: "John,Doe,31"