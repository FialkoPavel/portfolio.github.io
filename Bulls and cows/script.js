const base = [1,2,3,4,5,6,7,8,9,0];
let code = [];
let userCode =[];

function startGame() {
    document.getElementById("game").style.visibility = "visible";
    document.getElementById("startButton").style.display = "none";
}
function getRandomCode(array) {
    code = array
        .sort((a,b)=>{return 0.8 - Math.random();})
        .slice(0,4)
};

function checkUserCode(){
    let bulls = 0;
    let cows = 0;
    let duplicates = [];
    const p = document.createElement("p");
    const div = document.getElementById("1");
    userCode = document.getElementById('usercode').value.split('');
    console.log(userCode);
    findDuplicates(userCode);
    if (duplicates.length>0 || userCode.length>4) {
        return oops();
    } else {
        compareArrays(code, userCode);}

    function oops() {

        p.appendChild(document.createTextNode("The number must be 4 digits! Digits must not be repeated!"));

        div.appendChild(p);

    }

    function findDuplicates(arr) {

        for(let i = 0;i < arr.length; i++) {
            if((arr.lastIndexOf(arr[i]) != i) &&
                (duplicates.indexOf(arr[i]) == -1)) {
                duplicates.push( arr[i]);
            }
        }
        console.log(duplicates);
        return duplicates;
    }


    function compareArrays(x,y) {
        x.forEach(digit => {
            if (y.indexOf(digit)!==-1) {
                if (y.indexOf(digit) === x.indexOf(digit)) {
                    bulls++;
                } else cows++;
            }
            return bulls, cows;
        })
        console.log('bulls: '+bulls);
        console.log('cows: '+cows);

    }
    if (bulls !== 4) {
        p.appendChild(document.createTextNode("Your number: "+document.getElementById('usercode').value+" Bulls: "+bulls+", Cows: "+cows));

        div.appendChild(p);} else {p.appendChild(document.createTextNode("Yes, you guess! Right number: " + document.getElementById('usercode').value));

        div.appendChild(p);}

}

function restartGame() {
    location.reload();

}



getRandomCode(base);
code = code.toString().split(',');
console.log(code);