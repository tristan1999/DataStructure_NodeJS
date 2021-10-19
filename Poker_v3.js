var poker = new Array;
var player1 = [], player2 = [], player3 = [], player4 = [];

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
console.log("撲克牌打亂 : " + poker.sort(compare));
poker.sort(compare1);
poker.sort(compare2);
console.log("撲克牌排序 : " + poker.sort(compare3));

function compare(a, b) { 
    return Math.random() - 0.5;
}
function compare3(a, b) {
    if (b.charCodeAt(0) == a.charCodeAt(0)) {
    } else {
        return b.charCodeAt(0) - a.charCodeAt(0);
    }
}
function compare1(a, b) {
    if (b.charCodeAt(1) == a.charCodeAt(1)) {
    } else {
        return b.charCodeAt(1) - a.charCodeAt(1);
    }
}
function compare2(a, b) {
    if (b.charCodeAt(2) == a.charCodeAt(2)) {
    } else {
        return b.charCodeAt(2) - a.charCodeAt(2);
    }
}
function compare4(a, b) {
    if (b.charCodeAt(0) == a.charCodeAt(0)) {
    } else {
        return b.charCodeAt(0) - a.charCodeAt(0)
    }
}

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



console.log("Player1:" + player1 + "   排序後: " + player1.sort(compare4));
console.log("Player2:" + player2 + "   排序後: " + player2.sort(compare4));
console.log("Player3:" + player3 + "   排序後: " + player3.sort(compare4));
console.log("Player4:" + player4 + "   排序後: " + player4.sort(compare4));


