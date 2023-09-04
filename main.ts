// 1
let a: number = 1;
let b: string = "as";
let c: boolean = false;
// 2
function calculateArea(r: number) {
   let A: number;
  return (A = (3.14 * r) ^ 2);
}
console.log(calculateArea(5));
//
function calculateDensity(m: number, v: number) {
  let p: number = m / v;
  return p;
}
console.log(calculateDensity(5, 5));
// 3
interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
}
let product: IProduct = {
  id: 1,
  title: "Phone",
  description: "X",
  price: 65000,
  colors: ["black"],
};
console.log(product);
// чет не разобралась где должен быть результат написала вслепую,сделала как поняла)
