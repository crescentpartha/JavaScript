// Data Tyes 
//     Two Types - primitive & non-primitive (Object)

// Primitive Types are difined by JavaScript
//     (Number, String, Boolean, undefined, Null)

// Object Types are User Defined Data Type 
//     (Array, Object, Function)

var x = 20;
var name = 'Partha';
var age;
var id = true;

console.log(typeof x + " = " + x); //number = 20
console.log(typeof name + " = " + name); //string = Partha
console.log(typeof age + " = " + age); //undefined = undefined
console.log(typeof id + " = " + id); //boolean = true

// ********* Number *********

var n = 15
var nn = Number(45)
var nnn = Number('46.46')
console.log(nn) //45
console.log(nnn) //46.46
console.log(Number.parseInt(nnn)) //46 - Floating number converted to integer
console.log(Number.MAX_VALUE) //1.7976931348623157e+308 - Integer Maximum storage.
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991 - Integer Minimum storage.
console.log(1/0) //Infinity
console.log('abc' * 10) // NaN --> Not a Number

// ********* String ***********

// String Letaral Vs String Constructor
// String Letaral - Directly put a string value 

var str = 'String'
var str2 = "String"
var str3 = `String`

// String Constructor - Using Constructor to create a string 
var str4 = String('String')
var str5 = String(12345)
var str6 = String(3.1416)

console.log(str4, str5, str6) //String 12345 3.1416

// ******** Boolean *********

// Ask Yourself Anything!
// If the answer always be either true or false then you can call it Boolean 
// Q: Should I go out? Yes - true; No - false;
// Q: Is it raining? Yes - true; No - false;
// We have to think everything straight when it comes to solve problem using programming language. 

var b1 = true 
var b2 = false
 
var b3 = Boolean(true)
var b4 = Boolean(false)

console.log(b1, b2, b3, b4) //true false true false

// ******** Null Vs Undefined *********

// A Variable without Value Always Store Undefined 
// A Variable with Unknown value can Store Null 
// NULL is a special type used as a absence of an Object

var abc
var xyz = null

console.log(abc) //undefined
console.log(xyz) //null

// ******** Type Conversion & Truthy Value Vs Falsy Value *********
var str = '1000'
var n = 10

console.log(str * n) //10000 (Integer) - Implicit conversion;
console.log(str + n) //100010 (String) - Implicit conversion;

console.log(str) //1000 - String
console.log(Number(str)) //1000
console.log(Number.parseInt(str)) //1000 - More clear example;
console.log(n.toString()) //10 - Int to String conversion;

console.log(Number(Infinity)) //Infinity - Number
console.log(String(Infinity)) //Infinity - String (White Color)
console.log(Boolean(Infinity)) //True - Boolean
console.log(Boolean(-Infinity)) //True - Boolean

// *********** Falsy Values *******************

' '
0
null 
undefined 
NaN 

console.log(Boolean('')) //false
console.log(Boolean('partha')) //true
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(0)) //false
console.log(Boolean(451)) //true

console.log(true) //true
var bool = true 
console.log(bool.toString()) //true - String

// Contructor List - String, Number, Boolean 

// ******** Octal and Hexadecimal Numbers *********
// Hexadecimal is a Base 16 Number System
// Where Octal is a Base 8 Number System

// Add 0x for Hexadecimal number and 0 for Octal number 

var hex = 0xff
console.log(hex) //255
var oct = 0756
console.log(oct) //494

