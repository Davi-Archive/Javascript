function checkCashRegister(price, cash, cid) {

    let mutatedCID = []
    let moneyForCustomer = 0;
    let change = cash * 1000 - price * 1000;
    let oneHundred = 0;
    let twenty = 0;
    let ten = 0;
    let five = 0;
    let one = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    let billsAnDCoinsForCustomer = [];
    let newCid = [];
    let newDenominationsofCurrency = [];
    let totalForCustomer = [];
    let backwardMutatedCID = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let obj1 = {
        status: "OPEN",
        change: totalForCustomer
    }
    let obj2 = {
        status: "CLOSED",
        change: backwardMutatedCID
    }
    let obj3 = {
        status: "INSUFFICIENT_FUNDS",
        change: []

    }
    let denominationsOfCurrency =
        [
        ["ONE HUNDRED", 100000],
        ["TWENTY", 20000],
        ["TEN", 10000],
        ["FIVE", 5000],
        ["ONE", 1000],
        ["QUARTER", 250],
        ["DIME", 100],
        ["NICKEL", 50],
        ["PENNY", 10]
        ];

    for (let i = 0; i < denominationsOfCurrency.length; i++) {
        for (let j = 0; j < cid.length; j++) {
            if (denominationsOfCurrency[i][0] === cid[j][0]) {
                newCid.push(cid[j]);
                newDenominationsofCurrency.push(denominationsOfCurrency[i])
            }
        }
    }

    for (let i = 0; i < newCid.length; i++) {
        mutatedCID.push(newCid[i][1] * 1000)
    }
    let totalInMutatedCID = mutatedCID.reduce(reducer);
    if (totalInMutatedCID > change && change <= mutatedCID[0]) {
        for (let i = 0; i < denominationsOfCurrency.length; i++) {
            while (change >= denominationsOfCurrency[i][1] && mutatedCID[i] > 0) {
                change -= denominationsOfCurrency[i][1];
                mutatedCID[i] -= denominationsOfCurrency[i][1];
                moneyForCustomer += denominationsOfCurrency[i][1];
                billsAnDCoinsForCustomer.push(denominationsOfCurrency[i])
            }
        }
        for (let i = 0; i < billsAnDCoinsForCustomer.length; i++) {
            if (billsAnDCoinsForCustomer[i][0] == "ONE HUNDRED") {
                oneHundred += 100000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "TWENTY") {
                twenty += 20000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "TEN") {
                ten += 10000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "FIVE") {
                five += 5000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "ONE") {
                one += 1000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "QUARTER") {
                quarter += 250;
            }
            if (billsAnDCoinsForCustomer[i][0] == "DIME") {
                dime += 100;
            }
            if (billsAnDCoinsForCustomer[i][0] == "NICKEL") {
                nickel += 50;
            }
            if (billsAnDCoinsForCustomer[i][0] == "PENNY") {
                penny += 10;
            }
        }

        if (oneHundred > 0) {
            totalForCustomer.push(["ONE HUNDRED", oneHundred / 1000])
        }
        if (twenty > 0) {
            totalForCustomer.push(["TWENTY", twenty / 1000])
        }
        if (ten > 0) {
            totalForCustomer.push(["TEN", ten / 1000])
        }
        if (five > 0) {
            totalForCustomer.push(["FIVE", five / 1000])
        }
        if (one > 0) {
            totalForCustomer.push(["ONE", one / 1000])
        }
        if (quarter > 0) {
            totalForCustomer.push(["QUARTER", quarter / 1000])
        }
        if (dime > 0) {
            totalForCustomer.push(["DIME", dime / 1000])
        }
        if (nickel > 0) {
            totalForCustomer.push(["NICKEL", nickel / 1000])
        }
        if (penny > 0) {
            totalForCustomer.push(["PENNY", penny / 1000])
        }
        return obj1
    } else if (totalInMutatedCID == change) {
        for (let i = 0; i < denominationsOfCurrency.length; i++) {
            while (change >= denominationsOfCurrency[i][1] && mutatedCID[i] > 0) {
                change -= denominationsOfCurrency[i][1];
                mutatedCID[i] -= denominationsOfCurrency[i][1];
                moneyForCustomer += denominationsOfCurrency[i][1];
                billsAnDCoinsForCustomer.push(denominationsOfCurrency[i])
            }
        }
        for (let i = 0; i < billsAnDCoinsForCustomer.length; i++) {
            if (billsAnDCoinsForCustomer[i][0] == "ONE HUNDRED") {
                oneHundred += 100000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "TWENTY") {
                twenty += 20000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "TEN") {
                ten += 10000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "FIVE") {
                five += 5000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "ONE") {
                one += 1000;
            }
            if (billsAnDCoinsForCustomer[i][0] == "QUARTER") {
                quarter += 250;
            }
            if (billsAnDCoinsForCustomer[i][0] == "DIME") {
                dime += 100;
            }
            if (billsAnDCoinsForCustomer[i][0] == "NICKEL") {
                nickel += 50;
            }
            if (billsAnDCoinsForCustomer[i][0] == "PENNY") {
                penny += 10;
            }
        }
        if (oneHundred => 0) {
            totalForCustomer.push(["ONE HUNDRED", oneHundred / 1000])
        }
        if (twenty => 0) {
            totalForCustomer.push(["TWENTY", twenty / 1000])
        }
        if (ten => 0) {
            totalForCustomer.push(["TEN", ten / 1000])
        }
        if (five => 0) {
            totalForCustomer.push(["FIVE", five / 1000])
        }
        if (one => 0) {
            totalForCustomer.push(["ONE", one / 1000])
        }
        if (quarter => 0) {
            totalForCustomer.push(["QUARTER", quarter / 1000])
        }
        if (dime => 0) {
            totalForCustomer.push(["DIME", dime / 1000])
        }
        if (nickel => 0) {
            totalForCustomer.push(["NICKEL", nickel / 1000])
        }
        if (penny => 0) {
            totalForCustomer.push(["PENNY", penny / 1000])
        }

        for (let i = 0; i < cid.length; i++) {
            for (let j = 0; j < totalForCustomer.length; j++) {
                if (totalForCustomer[i][0] == cid[j][0]) {
                    backwardMutatedCID.push(totalForCustomer[j])
                }
            }
        }
        return obj2
    } else {
        return obj3
    }
}
let a = checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(a);