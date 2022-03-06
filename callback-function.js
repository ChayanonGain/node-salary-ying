const { compareSync } = require("bcrypt");

function calculate(x, y, callback) {
  console.log(`กำลังคำนวน`);
  setTimeout(() => {
    let sum = x + y;
    callback(sum);
  }, 3000);
}

function display(result) {
  console.log(`ผลบวกมีค่าเท่ากับ: ${result}`);
}

// function แบบทั่วไป
// มีการ setTimeOut เลยทำให้ทำงานช้ากว่า function display
//let cal = calculate(100,200);
// ทำให้ display มีค่าเป็น undefined
//display(cal)

// function แบบโครงสร้างของ callback
calculate(100, 200, display);

const url = `www.google.co.th`;

const arrUrl = [`www.google.co.th`, `cp`, `Betago`];

function downloading(param, callback) {
  setTimeout(() => {
    console.log(`กำลังดาวน์โหลด......`);
    callback(param);
  }, 3000);
}

downloading(arrUrl[i], function (result) {
  console.log(`Download : ${result} Complete...`);
});
