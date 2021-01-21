function myFunction() {
    var x = document.getElementById("birth").value;
    var y = document.getElementById("current").value;
    var bY, bM, bD, cY, cM, cD, birth, current, year, month, day;
    birth = new Date(x);
    current = new Date(y);
    bY = birth.getFullYear();
    bM = birth.getMonth() + 1;
    bD = birth.getDate();
    cY = current.getFullYear();
    cM = current.getMonth() + 1;
    cD = current.getDate();
    
    switch(bM) {
    default:
        if (cD < bD) {
            day = cD - bD + 30;
            bM = bM + 1;
        }
        else {
            day = cD - bD;
        }
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if (cD < bD) {
            day = cD - bD + 31;
            bM = bM + 1;
        }
        else {
            day = cD - bD;
        }
        break;		
    }
    if (cM < bM) {
        month = cM - bM + 12;
        bY = bY + 1;
    }
    else {
        month = cM - bM;
    }
    year = cY - bY;

    document.getElementById("demo").innerHTML= "Your age is " + year + " years, " + month + " month(s) and " + day + " day(s) ";
}
document.getElementById("demo2").innerHTML = "Today's Date" + "<br><br>" + Date();
var text = 2;
if (text == 2 || text == 4) {
    document.getElementById("demo4").innerHTML = text;
}
function myFunction2() {
    document.getElementById("demo3").innerHTML = Date();
}