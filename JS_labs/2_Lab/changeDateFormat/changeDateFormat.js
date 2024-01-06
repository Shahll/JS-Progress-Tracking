function changeDate(){
    let regexp = /(\d{4}).(\d{2}).(\d{2})/; 
    
    while (true){
        let newDate = "";
        let matchDate = str.match(regexp);
        if (matchDate == null)
            break;
        newDate += matchDate[3] + matchDate[0][4] + matchDate[2] + matchDate[0][4] + matchDate[1];
        str = str.replace(matchDate[0], newDate);
    }
    return str;
}

let str = `Today's date: 2023-07-17.
Some other important dates:
- 2022-12-31: New Year's Day.
- 2023-02-14: Valentine's Day.
- 2023-03-08: International Women's Day.
- 2023-05-01: Labor Day holiday.
- 2023-10-31: Halloween.
- 2023-12-25: Christmas.
`;
console.log(changeDate(str))