// const url base url
const base_url = 'https://api.rawg.io/api/' // this is the base api
// https://api.rawg.io/api/games?key=d0b32adbcd3144069ad2fa24acb1b28e
//region
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;// plus 1 is being cause month count starts at 0
    return month < 10 ? `0${month}` : month;
}

const getCurrentDay = () => {
    const day = new Date().getDate();// plus 1 is being cause month count starts at 0
    return day < 10 ? `0${day}` : day;
}
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth - 1}-${currentDay - 1}`
const nextYear = `${currentYear + 1}-${currentMonth + 1}-${currentDay + 1}`
console.log(currentDate)
//endregion

//popular games

const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

 const popularGamesUrl = ()=> `${base_url}${popular_games}`

console.log(popularGamesUrl())