function Unword(input1,input2) {
  if (input1.includes(input2)) {
    input1=input1.replace(input2,"");
    return input1;
  } else {
    return input1;
  }
}
console.log(Unword("hello" ,"ll"))
module.exports = Unword;
