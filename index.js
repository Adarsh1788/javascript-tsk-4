// input            2                 3                    4
//               248                 3927             41664
//               2*1                 3*1              4*1
//               2*2                 3*3              4*4
//               2*2*2               3*3*3            4*4*4

let num = 4;
str = "";
let i = 1;
let sum = 1;
while (i <= 3) {
  sum = sum * num;
str=`${str}${sum}`
  i++;
}

console.log(str)
