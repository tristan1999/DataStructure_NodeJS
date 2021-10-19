const readline = require('readline-sync');

var floorName=[];
var currentFloor = 5;
var targetFloor; 

for(i=1;i<=100;i++){
    floorName[i]=i;
    console.log(floorName[i] +"樓");
}

while(true){ 
    targetFloor = readline.question('目前在'+floorName[currentFloor]+'樓。請問要去那一層樓?');
    targetFloor = targetFloor.toUpperCase();
    targetFloor = floorName.indexOf(targetFloor); 
    
    if(targetFloor>0 ){
       console.log("請輸入介於"+floorName[1]+-+floorName[100]+"之間的樓層名稱!");
       continue;
    }

    if(targetFloor==currentFloor){
        console.log("暫停5秒");
        setTimeout(()=> console.log("暫停5秒離開電梯"),5000)
        break;
    }else{

     if(targetFloor<currentFloor){ 
        console.log("電梯往下...");
        while(targetFloor < currentFloor){
             currentFloor--;
            console.log("電梯在"+floorName[currentFloor]+"樓");
        }
        
     }else{
        console.log("電梯往上...");
        do{    
            currentFloor = currentFloor + 1;
            console.log("電梯在"+floorName[currentFloor]+"樓");
        }while(targetFloor > currentFloor);
     }
    }
}