// In this file I practice all my work which I learnt from class 1 to class 5..
//                            ======> Variables <=======
// //  Variables are like containers that hold information or values in a computer program.
// Think of them as labels or names given to specific pieces of data. 
// These pieces of data can be numbers, text, or any other type of information used in the program.
//                        =======> Let , Const and Var <========
// "let", "const", and "var" are keywords used to declare variables in Typescript. 
//                           =======> Data Types <=======
//                    There are  seven basic types of data types.
//           String , Number , Boolean , Null, undefined , bigInt and Symbol.
// string :
var a = "Shumaila Rehman";
console.log(a);
// Number :
var x = 5;
var y = 15;
console.log(x + y);
// Boolean :
var B = true;
console.log(B);
// Null :
var empty = null;
console.log(empty);
// Undefined
var U = undefined;
console.log(U);
// BigInt
var big_1 = BigInt(10000);
var big_2 = BigInt(20000);
console.log(big_1 * big_2);
// Symbol
var mysym = Symbol("hello");
console.log(mysym);
//                              ======> Case Type <=======
//                        There are basic three types of cases.
//                       ======> camel Case <=======
var firstName = " Aehmad";
console.log(firstName);
//                    ========> Snake_Cases <=========
var student_age = 20;
console.log(student_age);
//                      =======> Pascan Casel <=======
var StudentGrade = "A";
console.log(StudentGrade);
//                        ======> Array <========
// In Typescript an Array is a data structure that can hold a collection of element. 
// you can declare in typescript using square bracket. In this ,index( address) starts from zero.
// basic syntax ====>   let variable : data type [] = [value]
var studentAge = [20, 25, 30];
console.log(studentAge);
console.log(studentAge[1]);
var fruitName = ["apple", "banana", "orange"];
fruitName[1] = "peach";
console.log(fruitName);
