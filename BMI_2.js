//VS PPT: https://drive.google.com/file/d/1pjOZp8Xp6Ghb31Nfnj0YRsVwAzMMyhCq/view?usp=sharing
//JS PPT: https://drive.google.com/open?id=0BwN5VWV_C7-5ZnE3d045YWZJb00
//Javascript 變數的使用

const readline = require('readline-sync');
var weight = readline.question('請輸入您的體重(kg)?');
var height = readline.question('請輸入您的身高(cm)?');
var bmi = weight / ((height / 100) ** 2);


if (height > 220 || height < 50) {
    console.Log(身高不合理);
} else
    console.log('身高合理');

if (weight > 200 || weight < 10) {
    console.log(體重不合理)
} else
    console.log('體重合理')
        ;

var ideallow = 18.5 * height ** 2;
var idealHi = 24 * height ** 2;
console.log("Hello! Your BMI value is " + bmi);
console.log("你的理想體重介於 " + ideallow + "~" + idealHi);
//使用第三方套件 readline-sync (待使用者輸入資料後程式再繼續執行)
//NodeJS 套件管理程式為 npm，需打開終端機輸入指令
//安裝 readline-sync 套件指令: npm install readline-sync
//另可透過package.json指定所有相關套件後 npm install 即可安裝所有套件




//not only bmi value, but also judgement
//Ask user to input height only, is it workable?