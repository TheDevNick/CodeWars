/* 
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

P: functions takes in salary(int) and bonus(boolean)
R: total salary as a string prefixed with £
    if bonus = true return salary * 10
    if bonus = false return salary
E: bonusTime(90000, true) => £900000
    bonusTime(80000, false) => £80000
P: function with sal, bon as args
    conditional to check to return sal * 10 or just sal
    return total sal as a string with £ prefixed at the beginning.
*/

function bonusTime(salary, bonus) {
    return bonus ? `£${String(salary *= 10)}` : `£${String(salary)}`
}

console.log(bonusTime(80000, false))
console.log(bonusTime(90000, true))