
// Input                    5              6                   7
// output                51025          61236                71449

//logic                    5*1            6*1                  7*1
//                         5*2            6*2                  7*2
 //                        5*5            6*6                  7*7

let n=7

str=""
i=1

while(i<=5){

if(i<=2 ){
str=str+ n*i }
if(i===5) {str= str+ n*n}
i++
 

}
console.log(str)  