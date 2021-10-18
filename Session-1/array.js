//store similar kind of data type in array
//array index always start from 0
var n = [10, 20, 30, 40];
console.log("Number Array " + n);
var s = new Array('Alex', 'bob', 'catty');
console.log("String Array " + s);
console.log("First Element " + n[0] + " " + s[0]);
console.log("Index 2 " + n[2]);
console.log("Index 3 " + s[3]); // no element available -- print undefined
//tuple
var student = [102, 'sonam soni'];
console.log("Student 1");
console.log("Student Id: " + student[0]);
console.log("Student Name: " + student[1]);
student[0] = 302;
student[1] = "Sunita";
console.log("Student 2");
console.log("Student Id: " + student[0]);
console.log("Student Name: " + student[1]);
