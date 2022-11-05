console.log("assigment latihan string front end");

//Javascript string concat
const str1 = 'Hello';
const str2 = 'WORLD';
const str3 = ' ';

console.log(str1.concat(' ', str2));
console.log(str2.concat(', ', str1));
console.log(str1.concat(str3, str2));
//digunakan untuk menggabungkan string menjadi satu 

//Includes
let str = 'JavaScript string includes';
console.log(str.includes('Script'));   
//metode string ini melakukan pencarian peda huruf besar maupun kecil untuk menentukan apakah satu string dapat ditemukan di dalam string lain 

//Length
let sentence = "JavaScript String";
let len = sentence.length;
console.log(len);    
//metode yang digunakan untuk mencari panjang string dan menghitung jumlah huruf yang ada

//Split
const text = "Java is awesome. Java is fun.";
let pattern = ".";
let newText = text.split(pattern);
console.log(newText);  
//Fungsi ini berfungsi sebagai pemisah atau pembagi di dalam string dan dikembalikan dalam bentuk array

//slice
const message = "JavaScriptSlice";
// slice the substring from index 0 to 10
let result = message.slice(0, 10);
console.log(result);  
//Metode ini digunakan untuk mendapatkan bagian dari string atau mengekstrak dan mengembalikan bagian dari string itu ke bentuk string baru


//substring
let string = "Program JavaScript substring";
substr1 = string.substring(0, 1);
console.log(substr1); //P           
//mengembalikan bagian tertentu dari string antara indeks awal dan akhir

//toLowerCase
let lowercase_str = str.toLowerCase();
console.log(lowercase_str); // javascript string       
//mengembalikan string yang dikonversi menjadi huruf kecil atau mengubah huruf besar menjadi huruf kecil

//toUpperCase
const upperMessage = message.toUpperCase();
console.log(upperMessage);               
//mengembalikan string yang dikonversi menjadi huruf besar atau mengubah huruf kecil menjadi huruf besar

//trim
const newMessage = message.trim();
console.log(newMessage);            
//Fungsi ini menghapus semua whitespace dari string yang ada di awal atau akhir string

//ValueOf
let strVar1 = new String("JavaScript valueof");
strVar1.valueOf();                
 //metode mengembalikan nilai primitif dari objek String dimana hasilnya tetap sama asalkan nilai stringnya sama.