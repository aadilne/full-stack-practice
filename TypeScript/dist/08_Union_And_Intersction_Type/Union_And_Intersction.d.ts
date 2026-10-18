declare let u10Val1: string | number;
declare let u10Val2: string | boolean;
type U10User3 = {
    name: string;
};
type U10Admin3 = {
    role: string;
};
declare let u10Obj3: U10User3 & U10Admin3;
type U10Name4 = {
    name: string;
};
type U10Age4 = {
    age: number;
};
type U10Person4 = U10Name4 & U10Age4;
declare let u10Obj4: U10Person4;
declare let u10Ans5: "yes" | "no";
declare let u10Clr6: "red" | "blue" | "green";
declare let u10Lvl7: 1 | 2 | 3;
declare let u10Flag8: true;
declare let u10Flag8b: false;
declare let u10Flag8c: true | false;
type U10Circle9 = {
    kind: "circle";
    radius: number;
};
type U10Square9 = {
    kind: "square";
    side: number;
};
type U10Shape9 = U10Circle9 | U10Square9;
declare function u10Area9(sh: U10Shape9): number;
type U10Shape10 = {
    kind: "circle";
    radius: number;
} | {
    kind: "square";
    side: number;
};
declare function u10Area10(sh: U10Shape10): number;
