// input:

// 1 2 3
// 4 5 3
// 2 5 3

// output:
// 1) Print the diagonal elements side by side:
// Diagonal elements are: 1 5 3 3 5 2





row = +prompt("enter no.of rows");
col = +prompt("enter no.of cols");
main = [];
res = "";
for (i = 1; i <= row; i++) {
  x = [];
  for (j = 1; j <= col; j++) {
    console.log(i, j);
    ele = +prompt();
    x.push(ele);
  }
  main.push(x);
}
for (i = 0; i < main.length; i++) {
  //temp=[]
  for (j = 0; j < main[i].length; j++) {
    if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
      res += main[i][j] + " ";
    } else {
      res += "  ";
    }
  }
}
console.log(res);

// ----->  Print the diagonal elements side by side:<----


// 2) Print the Outer layer elements side by side

// Outer layer elements: 1 2 3 4 3 2 5 3

row = +prompt("enter a number");
col = +prompt("enter a number");
main = [];
res = "";
for (i = 1; i <= row; i++) {
  x = [];
  for (j = 1; j <= col; j++) {
    console.log(i, j);
    ele = +prompt();
    x.push(ele);
  }
  main.push(x);
}
for (i = 0; i < main.length; i++) {
  //temp=[]
  for (j = 0; j < main[i].length; j++) {
    if (i == j || i + j == row - 1) {
      res += main[i][j] + " ";
    } else {
      res += "  ";
    }
  }
}
console.log(res);