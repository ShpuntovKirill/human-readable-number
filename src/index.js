module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let digitsArr = number.toString().split("");                    //--create array from digits of number                    
    if (number === 0) return "zero";
    if (number < 20) return ones[number];                           
    if (number >= 20 && number < 100 && number % 10 === 0)
        return tens[digitsArr[0]];                                  //--return tens (20, 30, 40, etc.)
    if (number >= 100 && number < 1000 && number % 100 === 0)
        return ones[digitsArr[0]] + " hundred";                     //--return hundred (100, 200, 300, etc.)
    if (number >= 20 && number < 100)
        return tens[digitsArr[0]] + " " + ones[digitsArr[1]];       //--return tens + ones (21...29, 31...39, etc.)
    if (number >= 100 && number < 1000)
        return (                                                    //--return hundred + (tens + ones) (101...109, etc.)
            ones[digitsArr[0]] +                                    
            " hundred" +
            " " +
            toReadable(+(digitsArr[1] + digitsArr[2]))              //--using recursion for return (tens + ones)
        );
};
