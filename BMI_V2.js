//VS PPT: https://drive.google.com/file/d/1pjOZp8Xp6Ghb31Nfnj0YRsVwAzMMyhCq/view?usp=sharing
//JS PPT: https://drive.google.com/open?id=0BwN5VWV_C7-5ZnE3d045YWZJb00
//Javascript 變數的使用
 
const readline = require('readline-sync');
height = readline.question('請輸入您的身高(cm)?');
height = Number(height)
//判斷數值是否不合理
//if (!isNaN(height) && height>0 && height<=220)
if (isNaN(height) || height <= 0 || height > 220) {
    console.log("您輸入的資料有誤! 請輸入介於1~220之間的數字")
} else {
    //計算理想的體重範圍
    height = (height / 100);
    //當bmi=18.5 時的體重?
    var idealLow = 18.5 * height**2;
    //當bmi=24 時的體重?
    var idealHi = 24 * height**2;
    console.log("你的理想體重範圍為: " + idealLow +" ~ "+idealHi+" Kg");
}
