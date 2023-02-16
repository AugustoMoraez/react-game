export const FormatTimer = (sec:number):string => {
    let min = Math.floor(sec / 60);
    sec = sec - (min * 60);

    let secString = `${sec < 10 ? "0"+sec : sec }`
    let minString = `${min < 10 ? "0"+min : min }`

    return `${minString}:${secString}`
}