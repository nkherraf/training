var varToDecode = `¤"'ªN\x041VTG\bĖ« \x1C÷\x170Çi\x05J?\n` +
'\x03°:Ei\x1E[y\x1F%"On\x07ug\x07Ā.`A;eÅE\x7F&đ\x05(Gh\\\n' +
"Q8N\x14\x85á\tT\t®\x18s\r\x19%\x0BZĈ\x02\x01xQ]Ē\x04%c\x0FiQ\t-Ł\x05\x1F\x83\x05\x02±\x8E\x11ø\x00\x01\x87(ª\x18Fæ\x0E\x02\x80\x94B Ī\r\x1F;·+f!\x1B*\x95\x19\x15&g?\x96~'?c\x92\x18\x01ą\x16\x0BGJM¬\x0E\t½\x17R\x95(3ć\x04\x12ù>\x16«)U°\x15I\x89\x04<¨\x10;p±D+y\x1F\t";

let decode=function(m,k) {
    let re=0;
    let m2 = m.split('');
    m2.forEach((value) => {
        re+=value.charCodeAt(0);
    });
    let code = re/k;
    return String.fromCharCode(code);
}

let decodeS = function(s) {
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

module.exports = {
    decode: decodeS,
    keyCoded: varToDecode,
}