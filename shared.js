// Driver stats - name, number, schedule, driver rating, car rating, experience, momentum
var drivers = [
    ["00", "Tommy Walkowaik", "Part Time", "D", "D", "C", "C"],
    ["07", "Jeremy McDermit", "Part Time", "E", "E", "E", "C"],
    ["4", "Tom Pickerell", "Full Time", "B", "A", "A", "C"],
    ["5", "Alyssa Papyrocky", "Full Time", "B", "B", "C", "C"],
    ["6", "Eric Hersey", "Full Time", "D", "D", "D", "C"],
    ["10", "Jim Laird", "Full Time", "B", "A", "A", "C"],
    ["13", "Gavin Thunhorst", "Full Time", "C", "C", "E", "C"],
    ["18", "Mark Stewart", "Full Time", "C", "A", "D", "C"],
    ["19", "Dennis Kurras", "Full Time", "C", "B", "B", "C"],
    ["21", "Jerry Curran", "Part Time", "D", "E", "C", "C"],
    ["23", "Jared Campbell", "Full Time", "B", "D", "B", "C"],
    ["24", "Justin Brown", "Part Time", "E", "D", "D", "C"],
    ["29", "Cody Triola", "Full Time", "B", "B", "B", "C"],
    ["43", "Ray Mineri", "Part Time", "E", "E", "E", "C"],
    ["45", "Herbert Thunhorst", "Part Time", "D", "C", "D", "C"],
    ["49", "Jack Hany Jr.", "Full Time", "B", "B", "B", "C"],
    ["52", "Joshua Creel", "Full Time", "C", "C", "C", "C"],
    ["58", "Brandon Hubbard", "Part Time", "E", "D", "B", "C"],
    ["68", "Russ Jansen", "Full Time", "D", "D", "A", "C"],
    ["70", "Kyle Soper", "Full Time", "C", "B", "C", "C"],
    ["77", "Tim Mulqueen", "Full Time", "E", "E", "D", "C"],
    ["79", "Bill Wegmann Sr.", "Part Time", "C", "C", "A", "C"],
    ["89", "Ed Cheslak", "Full Time", "B", "C", "A", "C"],
    ["97", "Evan Gabriel", "Part Time", "C", "C", "E", "C"]
];

// Convert letter rating (A-E) to numerical value
function ratingToValue(rating) {
    if (rating === "A") return 3;
    if (rating === "B") return 2.5;
    if (rating === "C") return 2;
    if (rating === "D") return 1.5;
    if (rating === "E") return 1;
    return 0;
}