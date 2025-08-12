// input            2                 3                    4
//               248                 3927             41664
//               2*1                 3*1              4*1
//               2*2                 3*3              4*4
//               2*2*2               3*3*3            4*4*4

num = 2;

str = "";
a = "";
b = "";
i = 2;

while (num <= 4) {
  str = num +i;
  a = num * num;
  b = num * num * num * i;
  i++;
}
console.log(`${i + a * b}`)
