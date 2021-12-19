/**
* Many approaches to calculate the age
* all the approaches assume that the input will be date in past
*/

function main(){
  const userInput = new Date("12-31-1999");
  if(userInput.getTime() > new Date().getTime()){
    return handleUserChoseDateInFuture()
  }

  console.log(calcAge(userInput))
  console.log(calcAge2(userInput))
  console.log(calcAge3(userInput))
}

main()

function calcAge(birthDate){  
  let birthDay = birthDate.getDate()
  let birthMonth = birthDate.getMonth() + 1
  let birthYear = birthDate.getFullYear()
  let currentDate = new Date()
  let currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth() + 1
  let currentYear = currentDate.getFullYear()
  
  if(currentDay < birthDay){
    currentDay = currentDay + 30
    currentMonth = currentMonth - 1
  }
  const days = currentDay - birthDay
  if(currentMonth < birthMonth){
    currentMonth = currentMonth + 12
    currentYear = currentYear - 1
  }
  const months = currentMonth - birthMonth
  const years = currentYear - birthYear
  
  return formatAge([days, months, years])
}

function calcAge2(birthDate){
  const currentDaysPassed = howManyDaysInDate(new Date())
  const birthDaysPassed = howManyDaysInDate(birthDate)
  const howManyDaysInLive = currentDaysPassed - birthDaysPassed
  
  const years = Math.floor(howManyDaysInLive / 365)
  const months = Math.floor((howManyDaysInLive - years * 365) / 30)
  const days = howManyDaysInLive - (years * 365 + months * 30)
  return formatAge([days, months, years])
}

function calcAge3(birthDate){
  return formatAge(reverseArray(convertMileSecondsToYearsMonthsDays(howManyMillsecondsPassed(birthDate))))
}

// ****************************** utils ****************************** 

function howManyDaysInDate(dateInPast){
  const days = dateInPast.getDate()
  const months = dateInPast.getMonth() + 1
  const years =  dateInPast.getFullYear()

  return days + months * 30 + years * 365
}

function howManyMillsecondsPassed(birthDate){
  return new Date().getTime() - birthDate.getTime()
}

function convertMileSecondsToYearsMonthsDays(milesecond){
  const ACTUAL_DAYS_BER_YEAR = 365.2414444
  const HOURS_BER_DAY = 24
  const DAYS_BER_MONTH = 30.43666
  const MILISECONDS_BER_SECOND = 1000
  const MINUTS_BER_HOUR = 60
  const SECONDS_BER_MINUT = 60
  const mileSecondsBerYear = ACTUAL_DAYS_BER_YEAR  * HOURS_BER_DAY *  MINUTS_BER_HOUR * SECONDS_BER_MINUT * MILISECONDS_BER_SECOND
  const mileSecondsBerMonth = DAYS_BER_MONTH * HOURS_BER_DAY *  MINUTS_BER_HOUR * SECONDS_BER_MINUT * MILISECONDS_BER_SECOND
  const mileSecondsBerDay = HOURS_BER_DAY *  MINUTS_BER_HOUR * SECONDS_BER_MINUT * MILISECONDS_BER_SECOND

  const years = Math.floor(milesecond / mileSecondsBerYear)
  const months = Math.floor((milesecond - years * mileSecondsBerYear) / mileSecondsBerMonth)
  const days = Math.floor((milesecond - 
                           ((years * mileSecondsBerYear)
                           + 
                           (months * mileSecondsBerMonth))
                          )/ mileSecondsBerDay)
  return [years, months, days]
}

function handleUserChoseDateInFuture(){
  return "Woooh Man You Can't be born in the Future"
}

function formatAge([days, months, years]){
  return `Your Age Is ${days} day ${months} month ${years} year`;
}

function reverseArray(arr){
  return arr.reduce((ac, el)=>{
    return [el, ...ac]
  }, [])
}