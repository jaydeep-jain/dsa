let dataArr = ["Mar 26 2023 1:56 AM", "april 26 2023 2:56 AM", "May 26 2023 3:56 AM"]

let dateStr = ""
let timeStr = ""

for (let i = 0; i < dataArr.length; i++) {
    
  let dateTime = dataArr[i].split(' ')
  
  let date = dateTime.slice(0, 3).join(' ')
  
  let time = dateTime.slice(3).join(' ')
  
  dateStr += date+", "
  
  timeStr += time+", "
}

console.log(dateStr)
console.log(timeStr)
