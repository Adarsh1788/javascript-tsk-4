// Input                    10                   11                              12
// output                  1001000               1211331                      1441728

// logic                    10*10               11*11                        12*12
//                         10*10*10            11*11*11                      12*12*12


let num = 11;

let i = 1;

squ = "";
cube = "";

while (i <= 1) {
  squ = num * num;
  cube = num * num * num;

  i++;
}
console.log(`${squ}${cube}`);
