const readline = require('readline-sync');
var weight = readline.question('請輸入您的體重(kg)?');
var height = readline.question('請輸入您的身高(cm)?');

(height > 220 || height < 50)? console.Log("身高錯誤"):console.log("身高正常");
(weight > 200 || weight < 10)? console.log("體重錯誤"):console.log("體重合理");

console.log("Hello! Your BMI value is " +  weight / ((height / 100) ** 2));
console.log("你的理想體重介於 " + 18.5 * height ** 2 + "~" + 24 * height ** 2);
