let a = 10;
{
  let a= 20;
  console.log("inner", a);
}

console.log("Outer", a);