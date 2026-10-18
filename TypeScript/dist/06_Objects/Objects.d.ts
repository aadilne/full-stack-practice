declare let ob1: {
    name: string;
    age: number;
};
declare let ob2: {
    name: string;
    age: number;
};
declare let ob3: {
    name: string;
    email?: string;
};
declare let ob3b: {
    name: string;
    email?: string;
};
declare let ob4: {
    readonly id: number;
    name: string;
};
declare let ob5: {
    name: string;
    address: {
        city: string;
        pin: number;
    };
};
type Ex6 = {
    name: string;
    age: number;
};
declare let ob6: Ex6;
declare let ob6c: {
    name: string;
    age: number;
    city: string;
};
declare let ob6d: Ex6;
type Us7 = {
    name: string;
    age: number;
};
declare let ob7: Us7;
declare let ob8: {
    name: string;
    score: number;
};
declare let ob9: {
    [key: string]: number;
};
type Pr10 = {
    name: string;
    age: number;
};
type Ky10 = keyof Pr10;
declare let ob10: Ky10;
declare function get10(obj10: Pr10, key10: keyof Pr10): string | number;
declare let ob11: {
    name: string;
    age: number;
};
declare let nm11: string, ag11: number;
declare let ob12: {
    name: string;
    age: number;
};
declare let ob12b: {
    name: string;
    age: number;
};
