// Mark's info
const markHeight = 78;
const markWeight = 1.69;
const markBmi = markHeight / markWeight / markWeight;
// John's info
const johnHeight = 92;
const johnWeight = 1.95;
const johnBmi = johnHeight / johnWeight / johnWeight;
// compare their BMI
const markHigherBMI = markBmi > johnBmi;
console.log("Mark's BMI: "+ markBmi);
console.log("John's BMI: "+ johnBmi);
console.log(markHigherBMI);