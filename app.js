//INTERFACE//
//50//
// interface IUser {
//     firstName: string;
//     lastName: string;
//     birthDate: string;
// }
// class Building {
//   num_of_appartement: number;
//   num_of_floors: number;
//   is_has_yard: boolean;
//   num_of_houses: IHouse<number>[];
//   constructor(
//     num_of_appartement: number,
//     num_of_floors: number,
//     is_has_yard: boolean,
//     num_of_houses: IHouse<number>[]
//   ) {
//     (this.num_of_appartement = num_of_appartement),
//       (this.num_of_floors = num_of_floors),
//       (this.is_has_yard = is_has_yard),
//       (this.num_of_houses = num_of_houses);
//   }
// }
// let buildings: Building = new Building(10, 6, true, [
//   {
//     address: "beer-yaakov",
//     doorsNum: 10,
//     ownerName: "jos",
//     zipcode: 43243243,
//     is_parking_available: true,
//   },
// ]);
// console.log(buildings);
// class Real_estate_company {
//   company_name: string;
//   branch_num: number;
//   tell: number;
//   assets: IHouse<string>[];
//   constructor(
//     company_name: string,
//     branch_num: number,
//     tell: number,
//     assets: IHouse<string>[]
//   ) {
//     (this.company_name = company_name),
//       (this.branch_num = branch_num),
//       (this.tell = tell),
//       (this.assets = assets);
//   }
// }
// let real_estate: Real_estate_company = new Real_estate_company(
//   "Remax",
//   17,
//   8565544,
//   [
//     {
//       address: "shlomo hamelech 11 ,lod",
//       doorsNum: 8,
//       ownerName: "yona",
//       zipcode: 34353535,
//       is_parking_available: true,
//     },
//   ]
// );
// console.log(real_estate);
var Kibutz = /** @class */ (function () {
    function Kibutz(kibutz_name, is_have_farm, gate_tell, homes) {
        (this.kibutz_name = kibutz_name),
            (this.is_have_farm = is_have_farm),
            (this.gate_tell = gate_tell),
            (this.homes = homes);
    }
    return Kibutz;
}());
var rosh_kibutz = new Kibutz("rosh", true, 89988, [
    {
        address: "gal gadol 14",
        doorsNum: 10,
        ownerName: "Menachem",
        zipcode: 4224,
        is_parking_available: true
    },
]);
console.log(rosh_kibutz);
