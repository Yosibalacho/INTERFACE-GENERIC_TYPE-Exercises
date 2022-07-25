//INTERFACE//
//50//
// interface IUser {
//     firstName: string;
//     lastName: string;
//     birthDate: string;
// }

// class Man {
//     hight: number;
//     state: string;
//     user: IUser;
//     constructor(hight: number, state: string, user: IUser) {
//         this.hight = hight,
//             this.state = state,
//             this.user = user
//     }
// }
// let some_man:IUser={firstName:"yosi",lastName:"balacho",birthDate:"01/02/1997"};
// const man1:Man=new Man(1.80,"mexico",some_man)
// console.log(man1)
// //51//
// interface ICar {
//   model: string;
//   num_of_doors: number;
//   num_of_wheels: number;
// }
// class Car_shop {
//   city: string;
//   state: string;
//   store_name: string;
//   car_inventory: ICar[];
//   constructor(
//     city: string,
//     state: string,
//     store_name: string,
//     car_inventory: ICar[]
//   ) {
//     (this.city = city),
//       (this.state = state),
//       (this.store_name = store_name),
//       (this.car_inventory = car_inventory);
//   }
// }
// // let honda:ICar={model:"HONDA",num_of_doors:4,num_of_wheels:4};
// // let mazda:ICar={model:"MAZDA",num_of_doors:4,num_of_wheels:4};
// // let polo:ICar={model:"POLO",num_of_doors:4,num_of_wheels:4};
// // let hyunday:ICar={model:"HYUNDAY",num_of_doors:4,num_of_wheels:4};
// const carsArray: ICar[] = [
//   { model: "HONDA", num_of_doors: 4, num_of_wheels: 4 },
//   { model: "MAZDA", num_of_doors: 4, num_of_wheels: 4 },
// ];

// const balacho_cars = new Car_shop(
//   "Tel-Aviv",
//   "Israel",
//   "Balacho_Cars",
//   carsArray
// );
// // console.log(balacho_cars);
// class Garage {
//   garage_name: string;
//   owner_name: string;
//   isTzadik: boolean;
//   list_of_cars: ICar[];
//   constructor(
//     garage_name: string,
//     owner_name: string,
//     isTzadik: boolean,
//     list_of_cars: ICar[]
//   ) {
//     (this.garage_name = garage_name),
//       (this.owner_name = owner_name),
//       (this.isTzadik = isTzadik),
//       (this.list_of_cars = list_of_cars);
//   }
// }
// let listOfCars:ICar[]=[{ model: "HONDA", num_of_doors: 4, num_of_wheels: 4 },
// { model: "MAZDA", num_of_doors: 4, num_of_wheels: 4 },]
// let MyGarage = new Garage("B.Y", "Yos Bala", true, carsArray);
// console.log(MyGarage);

//Generic Types//
//52//
// function gen<t>(generic: t, num: number) {

//     for (let i = 0; i < num; i++) {
//         console.log(generic)
//     }

// }
//  gen<string>("yes", 3)
//53//
// function gen2<T, S>(myGen: T, myGen2: S, myBool: boolean): T {
//     let newGen: T = myGen2;
//     return myBool ? myGen : newGen
// }
// console.log(gen2<string, string>("yo", "gi", false))
// interface + generic types//
//54//
// interface IGame<T> {
//   category: string;
//   num_of_stages: number;
//   num_of_tries: number;
//   version: T;
//   company_name?: string;
// }
// // class Super_mario {
// //   character: string;
// //   max_game_time: number;
// //   game: IGame<string>[];
// //   constructor(
// //     character: string,
// //     max_game_time: number,
// //     game: IGame<string>[]
// //   ) {
// // this.character=character,
// // this.max_game_time=max_game_time,
// // this.game=game
// //   }
// // }
// // let superMario:Super_mario=new Super_mario("Jos",20,[{  category:"Adventure",
// // num_of_stages:5,
// // num_of_tries:3,
// // version:"2.05.05",
// // company_name:"mario jump"},{  category:"arcade",
// // num_of_stages:10,
// // num_of_tries:6,
// // version:"7.05.05",
// // company_name:"mario games"}])
// // console.log(superMario);
// class Fifa {
//   first_team: string;
//   second_team: string;
//   who_won: string;
//   game: IGame<string>[];
//   constructor(
//     first_team: string,
//     second_team: string,
//     who_won: string,
//     game: IGame<string>[]
//   ) {
//     (this.first_team = first_team),
//       (this.second_team = second_team),
//       (this.who_won = who_won),
//       (this.game = game);
//   }
// }
// let fifa2022: Fifa = new Fifa("Barcelona", "Real madrid", "Barcelona", [
//   {
//     category: "la liga",
//     num_of_stages: 38,
//     num_of_tries: 10,
//     version: "2022.07.99",
//     company_name: "spain industry",
//   },
//   {
//     category: "premier leauge",
//     num_of_stages: 28,
//     num_of_tries: 10,
//     version: "2022.66.3",
//     company_name: "england",
//   },
// ]);
// console.log(fifa2022);
//55//
// interface IHuman<T> {
//   fullName: string;
//   birthdate: string;
//   id: T;
//   gender?: string;
// }
// class School {
//   grade: number;
//   school_name: string;
//   teacher_name: string;
//   students: IHuman<string>[];
//   constructor(
//     grade: number,
//     school_name: string,
//     teacher_name: string,
//     students: IHuman<string>[]
//   ) {
//     (this.grade = grade),
//       (this.school_name = school_name),
//       (this.teacher_name = teacher_name),
//       (this.students = students);
//   }
// }
// let oranitSchool: School = new School(10, "Oranit", "Galit", [
//   {
//     fullName: "yos balacho",
//     birthdate: "01/02/1999",
//     id: "3283223",
//     gender: "male",
//   },
//   {
//     fullName: "lia cohen",
//     birthdate: "15/05/1999",
//     id: "3232525",
//     gender: "female",
//   },
// ]);
// console.log(oranitSchool);
// class Emploee {
//   email: string;
//   tell: number;
//   wage: number;
//   details: IHuman<string>[];
//   constructor(
//     email: string,
//     tell: number,
//     wage: number,
//     details: IHuman<string>[]
//   ) {
//     (this.email = email),
//       (this.tell = tell),
//       (this.wage = wage),
//       (this.details = details);
//   }
// }
// let worker: Emploee = new Emploee("yayo@gmail.com",87872332,15000,[
//   {
//     fullName:"yayo avraham",
//     birthdate:"02.08.1990",
//     id:"237822378",
//     gender:"male",
//   },
// ]);
// console.log(worker);
// class Players {
//   nickName: string;
//   points: number;
//   team: IHuman<string>[];
//   constructor(nickName: string, points: number, team: IHuman<string>[]) {
//     (this.nickName = nickName), (this.points = points), (this.team = team);
//   }
// }
// let players: Players = new Players("speedy", 700, [
//   { fullName: "jhon bica", birthdate: "01/04/1998", id: "27244" },
// ]);
// console.log(players);
//56//
// interface IHouse<T> {
//   address: string;
//   doorsNum: number;
//   ownerName: string;
//   zipcode: number;
//   is_parking_available?: boolean;
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
// class Kibutz {
//   kibutz_name: string;
//   is_have_farm: boolean;
//   gate_tell: number;
//   homes: IHouse<string>[];
//   constructor(
//     kibutz_name: string,
//     is_have_farm: boolean,
//     gate_tell: number,
//     homes: IHouse<string>[]
//   ) {
//     (this.kibutz_name = kibutz_name),
//       (this.is_have_farm = is_have_farm),
//       (this.gate_tell = gate_tell),
//       (this.homes = homes);
//   }
// }
// let rosh_kibutz: Kibutz = new Kibutz("rosh", true, 89988, [
//   {
//     address: "gal gadol 14",
//     doorsNum: 10,
//     ownerName: "Menachem",
//     zipcode: 4224,
//     is_parking_available: true,
//   },
// ]);
// console.log(rosh_kibutz);
