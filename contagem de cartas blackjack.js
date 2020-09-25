var count = 0;
var holdbet = "Hold";

function cc(card){
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:        
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0){
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}

cc("Q"); cc(3); cc ("K"); cc ("Q"); cc(5);
console.log (cc(2));