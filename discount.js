function discount (age, isHoliday){
    let ageDiscount = (age <= 6 || age >= 65 );
    const holidayList = ["Birthday", "Valentine's Day", "Easter", "Thanksgiving", "Christmas"]
    
    if (ageDiscount) {
             console.log(`${age} qualifies for a discount`);
             return
        }
    if (holidayList.includes(isHoliday)){
        let holiday = isHoliday
        console.log(`${holiday} qualifies you for a discount today even though you are ${age}`);
        return  
        }; 

        console.log(`${age} does not qualify you for a discount`);
    
};

discount(5)
discount(13, "holiday")
discount(43, "Birthday")
discount(43, "birthday")
discount(65)
discount(30, "easter")
