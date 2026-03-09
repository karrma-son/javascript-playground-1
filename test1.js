function formatCurrency (priceCents) {
 return (Math.round(priceCents) / 100).toFixed(2);
}

//basic test case
if (formatCurrency(2090) === '20.90') {
    console.log("passed");
    console.log(formatCurrency(2090));

} else {
 console.log("failed")

} 

//edge cases
// test suite
console.log("test suite: formatCurrency")
if(formatCurrency(0) === '0.00'){
    console.log("passed zero value");
}else{
    console.log("failed");
}


if(formatCurrency(2000.5) === '20.01'){
    console.log("passed round up");
}else{
    console.log("failed round up");
}

if(formatCurrency(2000.4) === '20.00'){
    console.log("passed round down");
}else{
    console.log("failed");
}

if(formatCurrency(-2000.0) === '-20.00'){
    console.log("passed negative number");
}else{
    console.log("failed");
}

if(formatCurrency(1056.555) === '10.57'){
    console.log("passed mid-point");
}else{
    console.log("failed");
}

// Bankers rounding (or round-to-even)