function isPrime(nu) {
    for(let y=2, s=Math.sqrt(nu);y<=s;y++) {
        if(nu%y === 0) {
            return false;
        }
    }
    return nu>1;
}

function closestPrime(n) {
    if(!isPrime(n)) {
        let travel = 1,notFound=true;
        while(notFound) {
            let a = n+travel;
            let b = (n-travel)>0?n-travel:1;
            switch(true) {
                case isPrime(b):
                    return b;
                case isPrime(a):
                    return a;
                default:
                    travel++;
            }
        }
    } else {
        return n;
    }
}

function decode(m,k) {
    let re=0;
    let m2 = m.split('');
    m2.forEach((value) => {
        re+=value.charCodeAt(0);
    });
    let code = re/k;
    return String.fromCharCode(code);
}

function decodeS(s) {
    let sup = Math.sqrt(s.charCodeAt(s.length-1));
    let strFin = "";
    for(let p=0;p<s.length-1;p+=sup) {
        let encodeVal = "";
        for(let q=p;q<p+sup;q++) {
            encodeVal+=s[q];
        }
        let decodeVal = decode(encodeVal,sup);
        strFin+=decodeVal;
    }
    return strFin;
}