// var vowelConsonantScore = function(s) {
//     let v = 0;
//     let c = 0;
//     let score; 
//     let vowels = ["a", "e", "i", "o", "u"];
//     for (let j = 0; j < s.length; j++){
//         if ((s[j] >= 0 || s[j] <= 9)||s[j].length === 0){
//             continue;
//         }
//         if(vowels.includes(s[j])){
//             v++;
//         } else{
//             c++;
//         }
//     } 
//     score = (c > 0) ? Math.floor(v/c) : 0
//     console.log(`The number of vowels - ${v} - divided by the number of consonants - ${c} - is ${score}`)
// }; 

const vowelConsonantScore = (s) => {
    let v = 0;
    let c = 0;
    const vowels = new Set(["a", "e", "i", "o", "u",]);

    for (let i = 0; i < s.length; i++) {
        const ch = s[i].toLowerCase();
        if (!/[a-z]/.test(ch)) continue;
        vowels.has(ch) ? v++ : c++;
    }
    const score = (c > 0) ? Math.floor(v/c) : 0;
    console.log(`The number of vowels - ${v} - divided by the number of consonants - ${c} - is ${score}`)
    
};

vowelConsonantScore("cooear")
vowelConsonantScore("op1aq2ue3")
vowelConsonantScore("bear")