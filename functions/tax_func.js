window.addEventListener('load', getSocSecTax)
window.addEventListener('load', getMedicareTax)
window.addEventListener('load', getFederalTax)
let person = "3";
function getSocSecTax() {
    if (person == "1") {
        let gosPay = 750;
        let withHoldCode = 0;
        let socSecTax = (gosPay * 0.062);
        return socSecTax
    }
    else if (person == "2") {
        let gosPay = 1550;
        let withHoldCode = 2;
        let socSecTax = (gosPay * 0.062);
        return socSecTax
    }
    else (person == "3"); {
        let gosPay = 1100;
        let withHoldCode = 6;
        let socSecTax = (gosPay * 0.062);
        return socSecTax
    }
}

function getMedicareTax() {
    if (person == "1") {
        let gosPay = 750;
        let withHoldCode = 0;
        let medTax = (gosPay * 0.0145);
        return medTax
    }
    else if (person == "2") {
        let gosPay = 1550;
        let withHoldCode = 2;
        let medTax = (gosPay * 0.0145);
        return medTax
    }
    else (person == "3"); {
        let gosPay = 1100;
        let withHoldCode = 6;
        let medTax = (gosPay * 0.0145);
        return medTax
    }
}

function getFederalTax() {
    if (person == "1") {
        let gosPay = 750;
        let withHoldCode = 0;
        if (withHoldCode == 0) {
            let fedTax = gosPay * 0.23;
            return fedTax
        }
        else if (withHoldCode == 1) {
            let fedTax = gosPay * 0.21;
            return fedTax
        }
        else if (withHoldCode == 2) {
            let fedTax = gosPay * 0.195;
            return fedTax
        }
        else if (withHoldCode == 3) {
            let fedTax = gosPay * 0.185;
            return fedTax
        }
        else if (withHoldCode >= 4) {
            let fedTax = gosPay * (.18 - ((withHoldCode - 4) * 0.005));
            return fedTax
        }
        else {
            console.log("Best of luck Mate")
        }
    }
    else if (person == "2") {
        let gosPay = 1550;
        let withHoldCode = 2;
        if (withHoldCode == 0) {
            let fedTax = gosPay * 0.23;
            return fedTax
        }
        else if (withHoldCode == 1) {
            let fedTax = gosPay * 0.21;
            return fedTax
        }
        else if (withHoldCode == 2) {
            let fedTax = gosPay * 0.195;
            return fedTax
        }
        else if (withHoldCode == 3) {
            let fedTax = gosPay * 0.185;
            return fedTax
        }
        else if (withHoldCode >= 4) {
            let fedTax = gosPay * (.18 - ((withHoldCode - 4) * 0.005));
            return fedTax
        }
        else {
            console.log("Best of luck Mate")
        }
    }
    else (person == "3"); {
        let gosPay = 1100;
        let withHoldCode = 6;
        if (withHoldCode == 0) {
            let fedTax = gosPay * 0.23;
            return fedTax
        }
        else if (withHoldCode == 1) {
            let fedTax = gosPay * 0.21;
            return fedTax
        }
        else if (withHoldCode == 2) {
            let fedTax = gosPay * 0.195;
            return fedTax
        }
        else if (withHoldCode == 3) {
            let fedTax = gosPay * 0.185;
            return fedTax
        }
        else if (withHoldCode >= 4) {
            let fedTax = gosPay * (.18 - ((withHoldCode - 4) * 0.005));
            return fedTax
        }
        else {
            console.log("Best of luck Mate")
        }
    }
}
let socSecTax = getSocSecTax("3");
let medTax = getMedicareTax("3");
let fedTax = getFederalTax("3");
console.log(socSecTax, medTax, fedTax);


