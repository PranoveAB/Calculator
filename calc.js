function set(op) { document.getElementById("display").value += op; }

function equal() {
    var exp = document.getElementById("display");
    var exp1 = exp.value;
    var ans = eval(exp1);
    exp.value = ans;
    document.getElementById("answer").value=ans;
}

function ce() {

    document.getElementById("display").value="";
}