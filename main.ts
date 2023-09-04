// 1
let a: number = 1;
let b: string = "as";
let c: boolean = false;
// 2
function calculateArea(r: number) {
  return (a = (3.14 * r) ^ 2);
}
//
function calculateDensity(m: number, v: number) {
  let p: number = m / v;
}
// 3
interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string;
}
let product: IProduct = {
  id: 1,
  title: "Phone",
  description: "X",
  price: 65000,
  colors: "black",
};
