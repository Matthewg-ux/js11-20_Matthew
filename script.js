function firstLast6(arr){
    var nums = '';
    if(arr[0]==6 || arr[arr.length-1]==6){
        nums = true;
    }else{
        nums = false;
    }
    return nums;
}

function has23(arr){
    for(var i = 0; i<2; i++){
        if(arr[i] == 2|| arr[i] == 3){
            return true;
        }
    }
    return false;
}

function fix23(arr){
    for(var i = 0; i<arr.length-1; i++) {
        if (arr[i] == 2 && arr[i + 1] == 3){
            arr[i+1] = 0;
        }
    }
    return arr;
}

function countYZ(str){
    var strL = str.toLowerCase();
    count = 0;
    for(var i = 0; i < strL.length-1; i++) {
        if (strL.substring(i, i + 1) == "z" && strL.substring(i + 1, i + 2) == " ") {
            count += 1;
        }
    }
    for(var i = 0; i < strL.length-1; i++) {
        if (strL.substring(i, i + 1) == "y" && strL.substring(i + 1, i + 2) == " ") {
            count += 1;
        }
    }
        if(strL.substring(strL.length -1, strL.length) == "y" || strL.substring(strL.length -1, strL.length) == "z") {
            count += 1;
        }

    return count;
}

function endOther(str1, str2){
        var strL1 = str1.toLowerCase();
        var strL2 = str2.toLowerCase();
        var answer = '';

        if(strL1.length == strL2.length){
            if(strL1 == strL2){
                return true;
            }
        }
        if(strL1.length > strL2.length){
            if(strL1.substring(strL1.length-strL2.length, strL1.length) == strL2){
                return true;
            }
        }
        if(strL1.length < strL2.length){
            if(strL1.substring(strL2.length-strL1.length, strL2.length) == strL1){
                return true;
            }
        }
        if(strL1.length < strL2.length){
            if(strL1.substring(0, strL1.length) == strL1){
                return true;
            }
        }

        return false;
    }

function starOut(str){
var newStr = '';

    for(var i = 0; i < str.length; i++) {
        if (str[i] != "*" && str[i + 1] != "*" && str[i - 1] != "*") {
            newStr += str[i];
        }
    }
    return newStr;
}

function getSandwich(str){
   var newstr = "";
   var bread1 = str.indexOf("bread");
   var bread2 = str.lastIndexOf("bread");
   if(bread1 != bread2){
       newstr += str.substring(bread1 + 5, bread2);
   }
   return newstr;
}

function canBalance(arr){

    var innerSum = 0;
    var outerSum = 0;


    for(var i = 0; i < arr.length; i++) {

        outerSum += arr[i];

        for (var j = i + 1; j < arr.length; j++) {
            innerSum += arr[j];
        }
        if(outerSum == innerSum){
            return true;
        }
        innerSum = 0;

    }
    return false;

}

function countClumps(arr){
    var clumps = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i-1] == arr[i] && arr[i+1] != arr[i]){
            clumps += 1;
        }
    }
    return clumps;
}

function evenlySpaced(int1, int2, int3){
    if(Math.abs(int2 - int1) == Math.abs(int3 - int2)){
        return true;
    }
    if(int1 - int3 == int2-int1) {
        return true;
    }
    if(int3-int2 == int1-int3){
        return true;
    }else{
        return false;
    }

}

document.getElementById("output").innerHTML += firstLast6(arr);
document.getElementById("output").innerHTML += has23(arr);
document.getElementById("output").innerHTML += fix23(arr);
document.getElementById("output").innerHTML += countYZ(str);
document.getElementById("output").innerHTML += endOther(str1, str2);
document.getElementById("output").innerHTML += starOut(str);
document.getElementById("output").innerHTML += getSandwich(str);
document.getElementById("output").innerHTML += canBalance(arr);
document.getElementById("output").innerHTML += countClumps(arr);
document.getElementById("output").innerHTML += evenlySpaced(5, 3, 4);


