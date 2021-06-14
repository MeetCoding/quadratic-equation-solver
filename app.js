document.getElementById('solve').addEventListener('click',()=> {
    let terms = [];
    terms.push(parseInt(document.getElementById('a').value))
    terms.push(parseInt(document.getElementById('b').value))
    terms.push(parseInt(document.getElementById('c').value))

    let xVal1 = document.getElementById('xVal1');
    let xVal2 = document.getElementById('xVal2');

    if(terms.includes(NaN)) {
        document.getElementById('error').style.visibility = 'visible';
        xVal1.style.visibility = 'hidden';
        xVal2.style.visibility = 'hidden';
    } else {
        document.getElementById('error').style.visibility = 'hidden';
        let ans = solve(terms);
        xVal1.style.visibility = 'visible';
        xVal2.style.visibility = 'visible';
        xVal1.innerHTML = `First Root = ${ans[0]}`;
        xVal2.innerHTML = `Second Root = ${ans[1]}`;
    }
})