console.log("Date in javaScript");

// 1. DATE KYA HOTA HAI?


// 2. JAVASCRIPT Date OBJECT

// JavaScript me Date ek built-in object hai.


// 3. CURRENT DATE AND TIME

// Current date aur current time lene ke liye:

let dateCurrentMoment = new Date();

console.log(dateCurrentMoment);


// 4. new Date()

// new Date() current date + current time deta hai.

let dateCurrentObject = new Date();

console.log(dateCurrentObject);


// 5. DATE OBJECT CREATE KARNA

// Date object banane ke liye new Date() use karte hain.

let dateCreatedObject = new Date();

console.log(dateCreatedObject);


// CREATING DATES

// 6. new Date()

// Empty new Date() = current date and time

let dateCreateCurrent = new Date();

console.log(dateCreateCurrent);


// 7. new Date(milliseconds)

// JavaScript internally date ko milliseconds ke form me bhi represent
// karta hai.
// 0 milliseconds ka matlab:
// 1 January 1970, 00:00:00 UTC
// Is date ko Unix Epoch bhi kaha jata hai.

let dateFromMilliseconds = new Date(0);

console.log(dateFromMilliseconds);


// Example: 1000 milliseconds = 1 second

let dateOneSecondAfterEpoch = new Date(1000);

console.log(dateOneSecondAfterEpoch);


// 8. new Date(dateString)

// String se bhi Date create kar sakte hain.

let dateFromString = new Date("2026-09-07");

console.log(dateFromString);


// ISO format:
// YYYY-MM-DD

// 9. new Date(year, month, day)

// Yahan ek IMPORTANT baat:
// month 0 se start hota hai.
// January  = 0
// February = 1
// March    = 2
// April    = 3
// May      = 4
// June     = 5
// July     = 6
// August   = 7
// September= 8
// October  = 9
// November = 10
// December = 11

let dateSpecificDay = new Date(2026, 8, 7);

console.log(dateSpecificDay);

// 8 = September
// 7 = day


// ============================================================
// 10. new Date(year, month, day, hours, minutes, seconds, ms)
// ============================================================

// Hum exact time bhi de sakte hain.

let dateFullDetails = new Date(
    2026,       // year
    8,          // September (month 0-based)
    7,          // day
    14,         // hours
    30,         // minutes
    45,         // seconds
    500         // milliseconds
);

console.log(dateFullDetails);


// GETTING DATE VALUES


// 11. getFullYear()

// Year lene ke liye getFullYear()

let dateReadYear = new Date();

console.log(dateReadYear.getFullYear());


// 12. getMonth()

// Month lene ke liye getMonth()
let dateReadMonth = new Date();

console.log(dateReadMonth.getMonth());

// IMPORTANT:
// January = 0
// December = 11


// Agar human-readable month number chahiye:

console.log(dateReadMonth.getMonth() + 1);


// 13. getDate()

// Month ki date/day lene ke liye getDate()

let dateReadDate = new Date();

console.log(dateReadDate.getDate());


// 14. getDay()

// Week ka day number lene ke liye getDay()

let dateReadWeekDay = new Date();

console.log(dateReadWeekDay.getDay());

// Sunday    = 0
// Monday    = 1
// Tuesday   = 2
// Wednesday = 3
// Thursday  = 4
// Friday    = 5
// Saturday  = 6


// 15. getHours()

let dateReadHours = new Date();

console.log(dateReadHours.getHours());


// 16. getMinutes()

let dateReadMinutes = new Date();

console.log(dateReadMinutes.getMinutes());


// 17. getSeconds()

let dateReadSeconds = new Date();

console.log(dateReadSeconds.getSeconds());


// 18. getMilliseconds()

let dateReadMilliseconds = new Date();

console.log(dateReadMilliseconds.getMilliseconds());


// 19. getTime()

// getTime() date ko milliseconds me return karta hai.
// Ye milliseconds:
// 1 January 1970 se lekar given date tak ke hote hain.

let dateReadTimestamp = new Date();

console.log(dateReadTimestamp.getTime());


// getTime() ka use date difference nikalne me bahut hota hai.


// UTC METHODS

// UTC ka full form:  Coordinated Universal Time

// get...() methods local time ke according value dete hain.
// getUTC...() methods UTC time ke according value dete hain.


// 20. getUTCFullYear()

let dateUtcYear = new Date();

console.log(dateUtcYear.getUTCFullYear());


// 21. getUTCMonth()

let dateUtcMonth = new Date();

console.log(dateUtcMonth.getUTCMonth());


// 22. getUTCDate()

let dateUtcDate = new Date();

console.log(dateUtcDate.getUTCDate());


// 23. getUTCDay()

let dateUtcDay = new Date();

console.log(dateUtcDay.getUTCDay());


// 24. getUTCHours()

let dateUtcHours = new Date();

console.log(dateUtcHours.getUTCHours());


// 25. getUTCMinutes()

let dateUtcMinutes = new Date();

console.log(dateUtcMinutes.getUTCMinutes());


// 26. getUTCSeconds()

let dateUtcSeconds = new Date();

console.log(dateUtcSeconds.getUTCSeconds());


// 27. getUTCMilliseconds()

let dateUtcMilliseconds = new Date();

console.log(dateUtcMilliseconds.getUTCMilliseconds());



// SETTING DATE VALUES

// set methods existing Date object ki value change karte hain.


// 28. setFullYear()

let dateChangeYear = new Date();

dateChangeYear.setFullYear(2030);

console.log(dateChangeYear);


// 29. setMonth()

let dateChangeMonth = new Date();

dateChangeMonth.setMonth(0);

// 0 = January

console.log(dateChangeMonth);


// 30. setDate()

let dateChangeDate = new Date();

dateChangeDate.setDate(15);

console.log(dateChangeDate);


// 31. setHours()

let dateChangeHours = new Date();

dateChangeHours.setHours(10);

console.log(dateChangeHours);


// 32. setMinutes()

let dateChangeMinutes = new Date();

dateChangeMinutes.setMinutes(25);

console.log(dateChangeMinutes);


// 33. setSeconds()

let dateChangeSeconds = new Date();

dateChangeSeconds.setSeconds(30);

console.log(dateChangeSeconds);


// 34. setMilliseconds()

let dateChangeMilliseconds = new Date();

dateChangeMilliseconds.setMilliseconds(500);

console.log(dateChangeMilliseconds);


// 35. setTime()

// setTime() milliseconds timestamp ke through complete date/time change karta hai.

let dateChangeTimestamp = new Date();

dateChangeTimestamp.setTime(0);

console.log(dateChangeTimestamp);

// 0 milliseconds = Epoch date


// ============================================================
// UTC SET METHODS


// 36. setUTCFullYear()

let dateSetUtcYear = new Date();

dateSetUtcYear.setUTCFullYear(2035);

console.log(dateSetUtcYear);


// 37. setUTCMonth()

let dateSetUtcMonth = new Date();

dateSetUtcMonth.setUTCMonth(5);

// 5 = June

console.log(dateSetUtcMonth);


// 38. setUTCDate()

let dateSetUtcDate = new Date();

dateSetUtcDate.setUTCDate(20);

console.log(dateSetUtcDate);


// 39. setUTCHours()

let dateSetUtcHours = new Date();

dateSetUtcHours.setUTCHours(12);

console.log(dateSetUtcHours);


// 40. setUTCMinutes()

let dateSetUtcMinutes = new Date();

dateSetUtcMinutes.setUTCMinutes(40);

console.log(dateSetUtcMinutes);


// 41. setUTCSeconds()

let dateSetUtcSeconds = new Date();

dateSetUtcSeconds.setUTCSeconds(45);

console.log(dateSetUtcSeconds);


// 42. setUTCMilliseconds()

let dateSetUtcMilliseconds = new Date();

dateSetUtcMilliseconds.setUTCMilliseconds(750);

console.log(dateSetUtcMilliseconds);



// _______________
// DATE FORMATTING

// Formatting ka matlab Date ko different string formats me convert karna.


// 43. toString()

// Complete date + time ko string me convert karta hai.

let dateFormatString = new Date();

console.log(dateFormatString.toString());



// 44. toDateString()

// Sirf date wala part deta hai.
// Time nahi deta.

let dateFormatDateOnly = new Date();

let datestr = dateFormatDateOnly.toDateString();
console.log(datestr);
console.log(typeof datestr);


// 45. toTimeString()

// Sirf time wala part deta hai.

let dateFormatTimeOnly = new Date();

console.log(dateFormatTimeOnly.toTimeString());


// 46. toISOString()

// ISO format me date return karta hai.

// Example type:
// 2026-09-07T08:30:00.000Z

// Yahan Z UTC ko indicate karta hai.

let dateFormatIso = new Date();

console.log(dateFormatIso.toISOString());


//_____________
// 47. toJSON()

// Date ko JSON string format me convert karta hai.
// Usually ISO format jaisa result milta hai.

let dateFormatJson = new Date();

console.log(dateFormatJson.toJSON());


// 48. toUTCString()

// Date ko UTC string format me return karta hai.

let dateFormatUtc = new Date();

console.log(dateFormatUtc.toUTCString());


// 49. toLocaleString()

// User ke locale ke according date + time ko readable format me deta hai.

let dateFormatLocale = new Date();

console.log(dateFormatLocale.toLocaleString());


// 50. toLocaleDateString()

// Locale ke according sirf date.

let dateFormatLocaleDate = new Date();

console.log(dateFormatLocaleDate.toLocaleDateString());


// 51. toLocaleTimeString()

// Locale ke according sirf time.

let dateFormatLocaleTime = new Date();

console.log(dateFormatLocaleTime.toLocaleTimeString());


// DATE STATIC METHODS

// 52. Date.now()

// Date.now() current time ka timestamp milliseconds me deta hai.
// Isme new Date object nahi banta.
// Direct milliseconds milte hain.

let dateStaticNow = Date.now();

console.log(dateStaticNow);


// Agar Date object banana ho:

let dateStaticNowObject = new Date(Date.now());

console.log(dateStaticNowObject);


// 53. Date.parse()

// Date.parse() date string ko milliseconds timestamp me convert karta hai.

let dateStaticParse = Date.parse("2026-09-07");

console.log(dateStaticParse);


// Is timestamp ko Date me convert kar sakte hain:

let dateStaticParsedObject = new Date(dateStaticParse);

console.log(dateStaticParsedObject);


// 54. Date.UTC()

// Date.UTC() diye gaye year/month/day/time ko
// UTC milliseconds timestamp me convert karta hai.
//
// Yahan bhi month 0-based hota hai.
//
// January = 0
// February = 1
// ...
// December = 11

let dateStaticUtc = Date.UTC(
    2026,  // year
    8,     // September
    7,     // date
    12,    // hours
    30     // minutes
);

console.log(dateStaticUtc);


// UTC timestamp ko Date object me dekh sakte hain:

let dateStaticUtcObject = new Date(dateStaticUtc);

console.log(dateStaticUtcObject);


// PRACTICAL EXAMPLE

// Ab ek real example:
// Current date se year, month, date aur time nikalna.

let datePracticalNow = new Date();

let datePracticalYear = datePracticalNow.getFullYear();

// Month 0-based hai,
// isliye human month number ke liye +1 kiya.
let datePracticalMonth = datePracticalNow.getMonth() + 1;

let datePracticalDay = datePracticalNow.getDate();

let datePracticalHour = datePracticalNow.getHours();

let datePracticalMinute = datePracticalNow.getMinutes();

console.log("Year:", datePracticalYear);
console.log("Month:", datePracticalMonth);
console.log("Date:", datePracticalDay);
console.log("Hour:", datePracticalHour);
console.log("Minute:", datePracticalMinute);


// DATE DIFFERENCE KA BASIC IDEA

// Do dates ka difference nikalne ke liye
// getTime() use kar sakte hain.

let dateDifferenceStart = new Date("2026-09-01");
let dateDifferenceEnd = new Date("2026-09-07");

let dateDifferenceMilliseconds =
    dateDifferenceEnd.getTime() -
    dateDifferenceStart.getTime();

console.log("Difference in milliseconds:", dateDifferenceMilliseconds);


// Milliseconds ko days me convert karne ka basic formula:

// 1000 milliseconds = 1 second
// 60 seconds = 1 minute
// 60 minutes = 1 hour
// 24 hours = 1 day

let dateDifferenceDays =
    dateDifferenceMilliseconds /
    (1000 * 60 * 60 * 24);

console.log("Difference in days:", dateDifferenceDays);


// ============================================================
// BUTTON PAR DATE DETAILS DIKHANA

let dateActionButton = document.querySelector("#dateRunButton");

let dateDetailsContainer = document.querySelector("#dateDetailsArea");

let dateLiveText = document.querySelector("#dateLiveDisplay");


dateActionButton.addEventListener("click", function () {

    // Har click par current date/time lenge.
    let dateButtonCurrent = new Date();

    // Month ka actual human number chahiye,
    // isliye getMonth() + 1
    let dateButtonMonth = dateButtonCurrent.getMonth() + 1;

    // Day name nikalne ke liye array.
    let dateButtonDayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    // getDay() 0 se 6 deta hai.
    let dateButtonDayName = dateButtonDayNames[dateButtonCurrent.getDay()];

    // Details screen par show karenge.
    dateDetailsContainer.innerHTML = `
        <div class="dateInfoCard">

            <p>
                <strong>Full Date:</strong>
                ${dateButtonCurrent.toString()}
            </p>

            <p>
                <strong>Year:</strong>
                ${dateButtonCurrent.getFullYear()}
            </p>

            <p>
                <strong>Month:</strong>
                ${dateButtonMonth}
            </p>

            <p>
                <strong>Date:</strong>
                ${dateButtonCurrent.getDate()}
            </p>

            <p>
                <strong>Day:</strong>
                ${dateButtonDayName}
            </p>

            <p>
                <strong>Hours:</strong>
                ${dateButtonCurrent.getHours()}
            </p>

            <p>
                <strong>Minutes:</strong>
                ${dateButtonCurrent.getMinutes()}
            </p>

            <p>
                <strong>Seconds:</strong>
                ${dateButtonCurrent.getSeconds()}
            </p>

            <p>
                <strong>Milliseconds:</strong>
                ${dateButtonCurrent.getMilliseconds()}
            </p>

            <p>
                <strong>Timestamp:</strong>
                ${dateButtonCurrent.getTime()}
            </p>

            <p>
                <strong>ISO:</strong>
                ${dateButtonCurrent.toISOString()}
            </p>

            <p>
                <strong>UTC:</strong>
                ${dateButtonCurrent.toUTCString()}
            </p>

            <p>
                <strong>Locale:</strong>
                ${dateButtonCurrent.toLocaleString()}
            </p>

        </div>
    `;
});


// LIVE CURRENT DATE/TIME

// setInterval() se har 1 second me date/time update kar sakte hain.

setInterval(function () {

    let dateLiveCurrent = new Date();

    dateLiveText.textContent = dateLiveCurrent.toLocaleString();

}, 1000);



// new Date()
// -> Current date/time

// new Date(milliseconds)
// -> Timestamp se Date

// new Date(dateString)
// -> String se Date

// new Date(year, month, day)
// -> Specific date

// getFullYear()
// -> Year

// getMonth()
// -> Month (0-11)

// getDate()
// -> Month ki date (1-31)

// getDay()
// -> Week day (0-6)

// getHours()
// -> Hours

// getMinutes()
// -> Minutes

// getSeconds()
// -> Seconds

// getMilliseconds()
// -> Milliseconds

// getTime()
// -> Milliseconds timestamp

// getUTC...
// -> UTC value

// set...
// -> Local date/time change

// setUTC...
// -> UTC date/time change

// toString()
// -> Complete string

// toDateString()
// -> Only date

// toTimeString()
// -> Only time

// toISOString()
// -> ISO format

// toUTCString()
// -> UTC string

// toLocaleString()
// -> Local date + time

// Date.now()
// -> Current timestamp

// Date.parse()
// -> Date string -> timestamp

// Date.UTC()
// -> UTC date -> timestamp