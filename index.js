var ctx = document.getElementById('canvas').getContext('2d');

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');


var ar = []
var col = []
var col2 = []
for (var j = 1; j <= 40; j++) {
    ar.push(4/j);
}

for (var i = 1; i <= 20; i++) {
    col2[i] = ar.slice()
}
var int = []
// console.log(ar)

for (var i = 1; i <= 20; i++) {
    for (var j = 1; j <= 40; j++) {
      ctx.fillStyle = `rgb(255, 51, 51, ${ar[j]})`;
      ctx.fillRect(j * 12.5, i * 25, 25, 25);
    }
}

var a = 0

const shuf = () => {
    col = []
    for(let k = 1;k <= 20;k++){
        clearTimeout(int[k]);
        }
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for (var i = 1; i <= 20; i++) {
        shuf2()
        col[i] = (ar.slice())
        for (var j = 1; j <= 40; j++) {
          ctx.fillStyle = `rgb(255, 51, 51, ${col[i][j]})`;
          ctx.fillRect(j * 12.5, i * 25, 25, 25);
        }
    } 
}

const shuff = () => {
    

    ctx.clearRect(0,0,canvas.width,canvas.height)
    for (var i = 1; i <= 20; i++) {
        for (var j = 1; j <= 40; j++) {
          ctx.fillStyle = `rgb(255, 51, 51, ${col[i][j]})`;
          ctx.fillRect(j * 12.5, i * 25, 25, 25);
        }
    } 
    // console.log('hello')
}

let len = ar.length;

//Insertion sort
const sort = () => {
        let x = []
        for(let k = 1;k <= 20;k++){
            x[k] = 0
            int[k] = setInterval(() => {
                if(x[k]==len){
                    // for(let k = 1;k <= 20;k++){
                    clearTimeout(int[k]);
                    // }
                }
                // console.log((col[k]))
                for (let j = 1; j <= len; j++) {
                    if ((col[k])[j] < (col[k])[j + 1]) {
                        let tmp = (col[k])[j];
                        (col[k])[j] = (col[k])[j + 1];
                        (col[k])[j + 1] = tmp;
                    }
                }
                
                shuff()
                console.log(col[k],col2[k])
                x[k]++;
                
            },100) 
        }
        // a = setInterval(() => {
        //     console.log(ar)
        //     for (let j = 0; j < len; j++) {
        //         if (ar[j] > ar[j + 1]) {
        //             let tmp = ar[j];
        //             ar[j] = ar[j + 1];
        //             ar[j + 1] = tmp;
        //         }
        //     }
            
        //     shuff()
        //     console.log('hi')
        //     i++;
        //     if(i===len){
        //         clearTimeout(a);
        //     }
        // },100)  
     
}

let bubbleSort = () => {
    let x = []
    let len = ar.length;
    for(let k = 1;k <= 20;k++){
        x[k] = 0
        int[k] = setInterval(() => {
            if(x[k]==len){
                // for(let k = 1;k <= 20;k++){
                clearTimeout(int[k]);
                // }
            }

            for (let j = 1; j <= len; j++) {
                if (col[k][j] < col[k][j + 1]) {
                    let tmp = col[k][j];
                    col[k][j] = col[k][j + 1];
                    col[k][j + 1] = tmp;
                }
            }

            shuff()
            console.log(col[k],col2[k])
            x[k]++;
            
        },100) 
    }

    // for (let i = 0; i < len; i++) {
    //     for (let j = 0; j < len; j++) {
    //         if (col[i][j] > col[i][j + 1]) {
    //             let tmp = col[i][j];
    //             col[i][j] = col[i][j + 1];
    //             col[i][j + 1] = tmp;
    //         }
    //     }
    // }
    // return inputArr;
};


function s2(){
    setInterval(() => {
        for (let i = 0; i < len; i++) {  
        for (let j = 0; j < len; j++) {
            if (ar[j] > ar[j + 1]) {
                let tmp = ar[j];
                ar[j] = ar[j + 1];
                ar[j + 1] = tmp;
            }
        }

        shuff()
        console.log('hi')
    }
    },2000)
}

//Shuffle the row
const shuf2 = () => {
    var currentIndex = ar.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = ar[currentIndex];
    ar[currentIndex] = ar[randomIndex];
    ar[randomIndex] = temporaryValue;
  }
}
btn1.addEventListener('onclick', shuf);



console.log('hi')

// var array = [1, 2, 3, 4, 5]
// for(var i = 0; i < array.length; i++) {
//   delay(i)
// }
// function delay(i) {
//   setInterval(() => {
//     console.log(array[i])
//   }, 1000);
// }