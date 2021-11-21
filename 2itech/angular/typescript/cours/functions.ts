export function somme(...num: number[]): number {
    // let res = 0;
    // for (const el of num) {
    //     res+=el;
    // }
    // return res;
    return num.reduce((pV, nV) => pV + nV);
}

// console.log(somme(3, 5, 2, 3, 6));

export function totalChars(...str: string[]) {
    let allStr = "";
    for (const el of str) {
        allStr += el;
    }
    return allStr.length;
}

// console.log(totalChars());

export function total(...arg: (string | number)[]): number {
    let res = 0;
    for (const el of arg) {
        res += typeof(el)=="string"?el.length:el;
    }
    return res;
}

// console.log(total(""));
