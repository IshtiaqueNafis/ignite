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
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//endregion

//popular games
const key = "c743aa94476045b490d74e236d1b6386"
const key_url = `key=${key}`;
const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//gamedetails
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}.json?&key=${key}`;
export const GameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&key=${key}`


export const popularGamesUrl = () => `${base_url}${popular_games}`
export const UpcomingGamesUrl = () => `${base_url}${upcoming_games}`
export const NewGamesUrl = () => `${base_url}${new_games}`

