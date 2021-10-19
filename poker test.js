var poker = new Array;

for (var i = 0; i < 52; i++) {
    switch (parseInt(i / 13)) {
        case 0:
            poker.push("H" + (parseInt(i % 13) + 1) + " ");
            break;
        case 1:
            poker.push("S" + (parseInt(i % 13) + 1) + " ");
            break;
        case 2:
            poker.push("C" + (parseInt(i % 13) + 1) + " ");
            break;
        case 3:
            poker.push("D" + (parseInt(i % 13) + 1) + " ");
    }

}
console.log("撲克牌陣列 : " + poker);
var player1 = [], player2 = [], player3 = [], player4 = [];

function compare(a, b) { return Math.random() - 0.5; }



poker.sort(compare);


function compare3(a, b) {
    (b.charCodeAt(0) == a.charCodeAt(0)) ?any : b.charCodeAt(0) - a.charCodeAt(0);return 0;
    
}
function compare1(a, b) {
    for (var iii = 0; iii < 2; iii++) {
        var hit = [];

        if (b.charCodeAt(hit[iii]) == a.charCodeAt(hit[iii])) {
            //compare charAt(1), charAt(2)
        } else {
            return b.charCodeAt(hit[iii]) - a.charCodeAt(hit[iii]);
        }
        return b.charCodeAt(hit[iii]) - a.charCodeAt(hit[iii]);

    }


}
function compare2(a, b) {

    if (b.charCodeAt(2) == a.charCodeAt(2)) {
        //compare charAt(1), charAt(2)
    } else {
        return b.charCodeAt(2) - a.charCodeAt(2);
    }

}




console.log("撲克牌打亂 : " + poker);
poker.sort(compare1);
//poker.sort(compare2);
//poker.sort(compare3);

console.log("撲克牌排序 : " + poker);


var player1 = [], player2 = [], player3 = [], player4 = [];

for (let i = 0; i < poker.length;) {
    var rand = Math.floor(Math.random() * poker.length);

    player1.push(poker[rand]);
    poker.splice(rand, 1);

    var rand = Math.floor(Math.random() * poker.length);

    player2.push(poker[rand]);
    poker.splice(rand, 1);

    var rand = Math.floor(Math.random() * poker.length);

    player3.push(poker[rand]);
    poker.splice(rand, 1);

    var rand = Math.floor(Math.random() * poker.length);

    player4.push(poker[rand]);
    poker.splice(rand, 1);

}
function compare4(a, b) {
    if (b.charCodeAt(0) == a.charCodeAt(0)) {
        //compare charAt(1), charAt(2)
    } else {
        return b.charCodeAt(0) - a.charCodeAt(0)
    }
}


console.log("Player1:" + player1);
console.log("Player2:" + player2);
console.log("Player3:" + player3);
console.log("Player4:" + player4);


