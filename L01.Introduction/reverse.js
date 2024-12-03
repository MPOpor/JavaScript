function reverseSteing(Value) {
    let reverseSteing = "";

    Value.split("").forEach ((char) => {
        reversedValue = char + reversedValue
    });

    return reversedValue;
}
console.log(reverseSteing("Reverse Me"));