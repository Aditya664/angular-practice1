var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek["MON"] = "Mon";
    DaysOfTheWeek["TUE"] = "Tue";
    DaysOfTheWeek["WED"] = "Wed";
    DaysOfTheWeek["THU"] = "Thu";
    DaysOfTheWeek["FRI"] = "Fir";
    DaysOfTheWeek["SAT"] = "Sat";
    DaysOfTheWeek["SUN"] = "Sun";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day = DaysOfTheWeek.MON;
if (day === DaysOfTheWeek.MON) {
    console.warn("Hey!, Its Monday..");
}
