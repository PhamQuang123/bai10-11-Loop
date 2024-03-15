// let check = 0;
// let asc = 0;
// let a = +prompt("Nhập số lượng số nguyên tố cần in: ");
// let j = 2
// while (j >= 2) {
//
//     if (asc == a) {
//         break;
//     }
//     for (let i = 2; i < j; i++) {
//         if (j % i == 0) {
//             check++;
//         }
//     }
//     if (check == 0) {
//         asc++;
//         console.log(j)
//
//     } else {
//         check = 0;
//     }
//     j++
// }

// BÀi 6 tổng 30 số ầu tin chia hết cho 7
//     let isExist = 0;
//     let sum = 0;
//     let i = 7
//     while (i >= 7) {
//         if (i % 7 == 0) {
//             isExist++;
//             sum += i;
//         }
//         if (isExist == 30) {
//             break;
//         }
//         i++;
//     }
//     console.log("Tổng 30 số đầu tiên chia hết cho 7 là: " + sum)

// Game đoán số
//  function game() {
//      let a = +prompt("Nhập số khoảng để đoán số từ 0 đến: ")
//      let b = Math.floor(Math.random() * a);
//      let count = 0;
//      do {
//          let c = +prompt("Nhập số muốn đoán: ")
//          if (c == b){
//              alert("Đoán đúng. Good");
//              break;
//          }else if (c > b){
//              count++;
//              alert("số  đoán lớn hơn")
//          }else   {
//              count++
//              alert("số đoán nhỏ hơn")
//          }
//          if (count == 3){
//              alert("Đã hết lượt đoán")
//              break;
//          }
//
//      } while (true);
//  }

// Tích các số t a-b
//     let a = +prompt("Nhập số a:")
//     let b = +prompt("Nhập số b");
//     let tich = 1;
//     for (let i = a; i <= b ; i++) {
//         tich *= i;
//     }
//     console.log("Tích từ a-b là: " + tich);


// Tổng các số chia 5 dư 2 t a-b

// let a = +prompt("Nhập số a:")
// let b = +prompt("Nhập số b");
// let sum = 0;
// for (let i = a; i <= b ; i++) {
//     if (i % 5 == 2){
//         sum += i;
//     }
// }
// console.log("Tổng cá số từ a-b chia cho 5 dư 2 là: " + sum)


// for (let i = 50; i >= 0 ; i -= 5) {
//     console.log(i);
// }
// console.log("Bảng cửu chương 5 là: ")
//
// for (let i = 1; i < 11; i++) {
//     console.log("5"+ " x " + i + " = " + 5*i);
// }
// Chuyển str => arr
//     let arr = ["red", "green", "white", "black"];
//     console.log('"' + arr.join() + '"')

// Thêm "-" vào giữa 2 số chẵn liền kề nhau
// let a = prompt("Nhập số: ")
// let newA = "";
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0 && a[i + 1] % 2 == 0) {
//         newA += a[i] + "-";
//
//     }else{
//         newA += a[i];
//     }
// }
// console.log(newA)

// Đổi chữ hoa thành thươnờng, chữ thường thành hoa trong chuỗi
// let str1 = prompt("Nhập chuỗi:")
// let arr2 = str1.split("");
// let newStr2 = "";
// console.log("Chuỗi ban đâu: " + str1)
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] == arr2[i].toUpperCase()) {
//         arr2[i] = arr2[i].toLowerCase();
//     } else if (arr2[i] == " ") {
//         newStr2 += arr2[i];
//         continue;
//     } else {
//         arr2[i] = arr2[i].toUpperCase();
//     }
//
//     newStr2 += arr2[i];
// }
// console.log(newStr2)

// let text = "";
// let number1 = 1;
// let number2 = 1;
// let number3 = 0;
// text += number1 + "," + number2;
// for (let i = 0; i < 18; i++) {
//     number3 = number1 + number2;
//     number1 = number2;
//     number2 = number3;
//     text += "," + number3;
// }
// console.log(text)

// let arr = ["tôi", "là", "ai ???"];
// let text = "";
//
// //
// function textArea() {
//     let a = document.getElementById("id-1").value;
//     let j = a.length;
//     if (j > 0) {
//         for (let count = 0; count < j; count++) {
//             text += arr[count];
//             if (count == 2) {
//
//                 document.getElementById("id-1").value = "";
//                 text = "";
//             }
//         }
//     }
//
//
//     document.getElementById("id-1").value = text;
//     text = "";
//     setTimeout(textArea, 1)


    // setTimeout(textArea(), 1)
// }


let arr = [1, 7, 5, 9, 2, 6];

// let sum =0 ;
// let sum1 = 0;
// let sum2 = 0;
// let max = arr[0];
// let maxChan = 0;
// let count = 0;
// let average = 0;
// let sum3 = 0;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let i = 0; i <arr.length; i++) {
//
//     if (arr[i]%2 == 0){
//         console.log("Phần tử chẵn trong mảng là: " + arr[i]);
//         sum += arr[i];
//         if (maxChan < arr[i]){
//             maxChan = arr[i];
//         }
//     }
//     if (i %2 == 0){
//         console.log("các phần tử tại vị trí chẫn trong mảng là:" + arr[i]);
//     }
//     if (arr[i] > 10){
//         sum1 += arr[i];
//     }
//     if (arr[i] % 7 == 2){
//         sum2 += arr[i];
//     }
//     if (arr[i] > max){
//         max = arr[i];
//     }
//     if (arr[i] % 5==0){
//         count++;
//         sum3 += arr[i];
//         average = sum3 / count;
//     }
// }
// console.log("Tổng các phần tử chăn là: " + sum);
// console.log("Tổng phần tử > 10 là: " + sum1);
// console.log("Tổng các phần tử chia 7 dư 2 là:" + sum2);
// console.log("maxChan là: " + maxChan);
// console.log("Max = " + max);
// console.log("Số lượng các phần tử chia hết cho 5 là: " + count);
// console.log("trung bình các phần tử chia hết cho 5 là: " + average);
//

// let SLN = arr[0];
// let SLT2 = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > SLN) {
//         SLT2 = SLN;
//         SLN = arr[i];
//     }
// }
// if (SLN == SLT2) {
//     console.log("Các phần tử trong mảng có giá trị bằng nhau")
// } else {
//     console.log("Số lớn thứ 2 là: " + SLT2);
//
// }
// let inputNumber = +prompt("NHập số cần check:");
// let asc = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == inputNumber){
//         asc++;
//     }
// }

// console.log(`Số lần ${inputNumber} xuất hện trong mảng là: ${asc}`);
