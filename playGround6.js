// let arr = [1,3,4,5,1,0,1,8,2,8,2]

// let obj = {...arr}
// console.log(obj)

// let obj1 = {}
// for(let key of arr){
//     obj1[key] = (obj1[key]||0)+1

// }
// console.log(obj1)
// let map = new Map()
// for(let key of arr){ 
// if(map.has(key)){
//     map.set(key,map.get(key)+1)
// }
// else{
//     map.set(key,1)
// }
// }
// console.log(map)


const TOTAL_SEATS = 80;
const SEATS_PER_ROW = 7;
let seatsBooked = 0;

// Define function to book seats
function bookSeats(numSeats) {
  // Check if there are enough seats available
  if (seatsBooked + numSeats > TOTAL_SEATS) {
    console.log("Sorry, there are not enough seats available.");
    return [];
  }

  // Book the seats
  seatsBooked += numSeats;

  // Calculate the seat numbers and return them
  let seatNumbers = [];
  let row = 1;
  while (numSeats > 0) {
    let start = (seatsBooked - numSeats) % SEATS_PER_ROW;
    if (start === 0) {
      start = SEATS_PER_ROW;
    }
    let end = start + Math.min(numSeats, SEATS_PER_ROW - start);
    for (let seat = start + 1; seat <= end; seat++) {
      seatNumbers.push({ seat: seat, row: row });
    }
    numSeats -= end - start;
    row++;
  }

  // Print the booked seat numbers
  console.log(`Successfully booked ${seatNumbers.length} seat(s):`);
  for (let i = 0; i < seatNumbers.length; i++) {
    console.log(`Seat ${i+1}: Row ${seatNumbers[i].row}, Seat ${seatNumbers[i].seat}`);
  }

  return seatNumbers;
}

console.log(bookSeats(10))