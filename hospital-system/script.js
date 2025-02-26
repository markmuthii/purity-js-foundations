// Hospital

// const h1 = {
//   name: "H1",
//   location: "Helsinki",
//   available_beds: 4,
//   ratings: 5.2,
//   contact: "657534XXX7",
//   doctor: "D1",
//   price: 100,
// };

// const h2 = {
//   name: "H2",
//   location: "Helsinki",
//   available_beds: 5,
//   ratings: 4.1,
//   contact: "298766XXX2",
//   doctor: "D4",
//   price: 200,
// };

// const h4 = {
//   name: "H2",
//   location: "Helsinki",
//   available_beds: 5,
//   ratings: 4.1,
//   contact: "298766XXX2",
//   doctor: "D4",
//   price: 200,
//   };

class Hospital {
  constructor(name, location, beds) {
    this.hospitalName = name;
    this.hospitalLocation = location;
    this.availableBeds = beds;
    this.governingBody = "SOTE";
  }

  updateHospitalBeds(numberOfPatients, action) {
    if (action === "discharge") {
      this.availableBeds = this.availableBeds + numberOfPatients;
    } else {
      if (numberOfPatients <= this.availableBeds) {
        this.availableBeds = this.availableBeds - numberOfPatients;
      } else {
        console.log("Patients are more than the available beds");
      }
    }
  }
}

// updateHospitalBeds(); // Not possible

const h1 = new Hospital("Hospital One", "Helsinki", 1500);

console.log(h1.hospitalName);
console.log(h1.availableBeds);
console.log(h1.hospitalLocation);
console.log(h1.governingBody);

h1.updateHospitalBeds(70, "admit");

console.log(h1.availableBeds);

h1.updateHospitalBeds(10, "discharge");

console.log(h1.availableBeds);

const h2 = new Hospital("Hospital Two", "Tampere", 700);

console.log(h2.hospitalName); // Hospital Two
console.log(h2.availableBeds); // 700
console.log(h2.hospitalLocation);
console.log(h2.governingBody);

h2.updateHospitalBeds(20, "admit");

console.log(h2.availableBeds); // 680

h2.updateHospitalBeds(5, "discharge");

console.log(h2.availableBeds); // 685

// Patient
/** 
const p1 = {
  name: "p1",
  id: 2,
  contact: "234534XXX7",
  cost: 1000,
};

const p2 = {
  name: "p2",
  id: 3,
  contact: "234576XXX2",
  cost: 1200,
};

const p3 = {
  name: "p2",
  id: 3,
  contact: "234576XXX2",
  cost: 1200,
};
*/
