
let terms = [2,-9,10];
console.log(solve(terms));

function solve(terms) {

    let splits = getSplits(terms);
    if(splits==null) return;

    let firstCommon = [];
    firstCommon.push(getHCF(terms[0],splits[0]));
    firstCommon.push(getHCF(splits[1],terms[2]));

    let secondCommon = [];
    secondCommon.push(terms[0]/firstCommon[0]);
    secondCommon.push(splits[0]/firstCommon[0]);

    if(secondCommon[0] != splits[1]/firstCommon[1]) return;
    if(secondCommon[1] != terms[2]/firstCommon[1]) return;

    let root1 = firstCommon[0] != 1?`${-firstCommon[1]}/${firstCommon[0]}`:`${-firstCommon[1]}`;
    let root2 = secondCommon[0] != 1?`${-secondCommon[1]}/${secondCommon[0]}`:`${-secondCommon[1]}`;

    return [root1,root2];
}

function getHCF(num1,num2) {
    $num1 = Math.abs(num1);
    $num2 = Math.abs(num2);
    let hcf = 1;
    for(let i=1; i<=Math.max($num1,$num2); i++) 
        if($num1%i == 0 && $num2%i == 0 && i>hcf) hcf = i;
    return num1>0?hcf:-hcf;
}

function getSplits(terms) {
    if(terms.includes(0)) return;
    let factors = getFactors(terms[0] * terms[2]);
    let sign = getSign(terms);
    let splits = null;
    for(let i=0, j=factors.length-1;i < j;i++, j--) {
        let outcome = isPossible(sign, factors[i], factors[j], terms[1]);
        if(outcome[0]) splits = [outcome[1],outcome[2]];
    }
    return splits;
}

function getFactors(num) {
    num = Math.abs(num);
    let factors = [];
    for(let i=1; i<=num; i++) {
        if(num%i != 0) continue;
        factors.push(i);
    }
    return factors;
}

function getSign(terms) {
    let mid = terms[1];
    if(terms[2] > 0) {
        if(mid > 0) return '+small+big';
        else return '-small-big';
    } else {
        if(mid > 0) return '+big-small';
        else return '+small-big';
    }
}

function isPossible(sign,split1,split2,result) {
    let big = Math.max(split1,split2);
    let small = Math.min(split1,split2);
    switch(sign) {
        case '+small+big': if(+small+big==result) return [true, +small, +big];
        case '-small-big': if(-small-big==result) return [true, -small, -big];
        case '+big-small': if(+big-small==result) return [true, +big, -small];
        case '+small-big': if(+small-big==result) return [true, +small, -big];
    }
    return [false,0,0];
}