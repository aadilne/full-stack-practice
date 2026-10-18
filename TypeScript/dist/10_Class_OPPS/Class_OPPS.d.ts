declare class C12Student1 {
    name: string;
}
declare let c12Obj1: C12Student1;
declare class C12Student2 {
    name: string;
    age: number;
}
declare let c12Obj2: C12Student2;
declare class C12Student3 {
    name: string;
    age: number;
    constructor(n: string, a: number);
}
declare let c12Obj3: C12Student3;
declare class C12Calc4 {
    add(a: number, b: number): number;
}
declare let c12Obj4: C12Calc4;
declare class C12Access5 {
    name: string;
    private pin;
    protected city: string;
    showPin(): number;
}
declare let c12Obj5: C12Access5;
declare class C12Public6 {
    name: string;
}
declare let c12Obj6: C12Public6;
declare class C12Private7 {
    private bal;
    getBal(): number;
}
declare let c12Obj7: C12Private7;
declare class C12Parent8 {
    protected msg: string;
}
declare class C12Child8 extends C12Parent8 {
    showMsg(): string;
}
declare let c12Obj8: C12Child8;
declare class C12Book9 {
    readonly id: number;
    constructor(i: number);
}
declare let c12Obj9: C12Book9;
declare class C12User10 {
    private _age;
    get age(): number;
    set age(v: number);
}
declare let c12Obj10: C12User10;
declare class C12Animal11 {
    eat(): string;
}
declare class C12Dog11 extends C12Animal11 {
    bark(): string;
}
declare let c12Obj11: C12Dog11;
declare class C12Animal12 {
    sound(): string;
}
declare class C12Dog12 extends C12Animal12 {
    sound(): string;
}
declare let c12Obj12: C12Dog12;
declare abstract class C12Shape13 {
    abstract area(): number;
}
declare class C12Square13 extends C12Shape13 {
    side: number;
    area(): number;
}
declare let c12Obj13: C12Square13;
interface C12Printable14 {
    print(): string;
}
declare class C12Report14 implements C12Printable14 {
    print(): string;
}
declare let c12Obj14: C12Report14;
