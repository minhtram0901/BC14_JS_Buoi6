// Bài 1: Tìm số nguyên dương nhỏ nhất
$(document).ready(function(){
    var s = 0;
    var n = 0;
    while(s <= 10000){
        n +=1;
        s += n;        
    }
    var p = document.getElementById("bt1-output");
    p.innerHTML = "Số nguyên dương nhỏ nhất: " + n;
});

//Bài 2: Tính tổng: S(n) = x + x^2+ x^3 + … + x^n
function sumx(){
    var x = +document.getElementById("bt2-x").value;
    var n = +document.getElementById("bt2-num").value;
    var sum = 0;
    for (var i = 1; i<=n; i++){
        sum += Math.pow(x,i);
    }
    var p = document.getElementById("bt2-output");
    p.innerHTML = "S(n) = " + sum ;
}

// Bài 3: Tính giai thừa n!
function giaithua(){
    var n = +document.getElementById("bt3-n").value;
    var tichn = 1;
    for (var i = 1; i<=n ; i++){
        tichn *= i;
    }
    var p = document.getElementById("bt3-output");
    p.innerHTML = n + "! = " + tichn ;
}

// Bài 4
function printDiv(){
    var divFather = document.getElementById("father");
    divFather.innerHTML = "";
    for(var i = 1; i<=10; i++){
        var divChild = document.createElement("div");
        if(i%2===0){            
            divChild.innerHTML = "Div chẵn " + i;
            divChild.style.backgroundColor = "#FD4141";
        } else {
            divChild.innerHTML = "Div lẻ " + i;
            divChild.style.backgroundColor = "#365AFF";
        }
        divChild.style.color = "#fff";
        divFather.appendChild(divChild);
    }
    divFather.style.display = "block";
}