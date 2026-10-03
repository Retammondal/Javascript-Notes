// Date object is a built-in object used to create, read, and manipulate dates and times.
// Date Object --> Not store in Human readable format; stores in UNIX EPOCH
// new Date() --> Always Return value in ISO 8601 Format

// Creating Date Object
// 1. Without Passing Arguements -> Current date, time from Computer machine
const now1 = new Date();
console.log(now1); // but in ISO 8601 format

// 2. Pass Recognized Date String -> ISO 8601 format
const now2 = new Date("2026-08-29T12:44:46.148Z");
console.log(now2);

// 3. Passing components
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// Note: Month index starts from 0
const birthDate = new Date(2005, 3, 20, 15, 45, 20);
console.log(birthDate);

// 4. Passing TimeStamps --> passing miliseconds (UNIX EPOCH)
const epochTime = new Date(1777486500);
console.log(epochTime);

console.log("----------------------------------------------------------");

// Formatting Date Object from ISO 8601 format --> String 

// 1. x.toISOString() --> Universal Standards Format
// 2. x.toLocaleDateString('en-IN') --> Human-readable local format
// 3. x.toLocaleString('en-IN') --> Full local date and time

console.log(`ISO Standard Format of birthDate -- `, birthDate.toISOString());
console.log(`Date Format of birthDate -- `, birthDate.toLocaleDateString());
console.log(`Local String Format of birthDate -- `, birthDate.toLocaleString());

console.log("----------------------------------------------------------");

// Getting Information (Getters)

// 1. x.getFullYear()
// 3. x.getDate() : 1-31
// 2. x.getMonth() : 0-11
// 4. x.getDay() : 0-6
// 5. x.getHours()
// 6. x.getMinutes() 

console.log(`Getting Year`, birthDate.getFullYear());
console.log(`Getting Date`, birthDate.getDate());
console.log(`Getting Month`, birthDate.getMonth());
console.log(`Getting Day`, birthDate.getDay());
console.log(`Getting Hours`, birthDate.getHours());
console.log(`Getting Minutes`, birthDate.getMinutes());