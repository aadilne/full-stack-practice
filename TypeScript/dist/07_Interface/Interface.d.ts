interface IUs1 {
    name: string;
    age: number;
}
declare let iOb1: IUs1;
interface IPr2 {
    title: string;
    price: number;
}
declare let iOb2: IPr2;
interface IUs3 {
    name: string;
    email?: string;
}
declare let iOb3: IUs3;
interface IUs4 {
    readonly id: number;
    name: string;
}
declare let iOb4: IUs4;
interface ICal5 {
    add(a: number, b: number): number;
}
declare let iOb5: ICal5;
interface IFn6 {
    (a: number, b: number): number;
}
declare let iMul6: IFn6;
interface IAn7 {
    name: string;
}
interface IUs7 extends IAn7 {
    age: number;
}
declare let iOb7: IUs7;
interface INm8 {
    name: string;
}
interface IAg8 {
    age: number;
}
interface IUs8 extends INm8, IAg8 {
    city: string;
}
declare let iOb8: IUs8;
interface IPr9 {
    name: string;
    price: number;
}
declare let iAr9: IPr9[];
interface IAd10 {
    city: string;
    pin: number;
}
interface IUs10 {
    name: string;
    address: IAd10;
}
declare let iOb10: IUs10;
interface IUs11 {
    name: string;
}
type IId11 = {
    id: number;
};
declare let iOb11: IUs11 & IId11;
interface IUs12 {
    name: string;
}
interface IUs12 {
    age: number;
}
declare let iOb12: IUs12;
