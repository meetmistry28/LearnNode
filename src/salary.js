
module.exports = (sal,bounusVal) => {
    if (sal < 0) {
        bounusVal(new Error("Please Enter Salary Must Be Grater Then 0"),null)
    } else if (sal <= 10000) {
        bounusVal(null,sal*0.10)
    } else if (sal <= 20000) {
        bounusVal(null,sal*0.15)
    } else if (sal > 20000) {
        bounusVal(null,sal*0.20)
    } 
}