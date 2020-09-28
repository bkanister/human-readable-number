module.exports = function toReadable (number) {
    const num0_9 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const num10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const num20_90 = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number === 0) {
        return 'zero'
    } else if (number <= 9) {
        return num0_9[number]
    } else if (number <=19) {
        return num10_19[number-10].trim()
    } else if (number <= 99) {
        const arr = number.toString().split('').map(Number)
        return (num20_90[arr[0]] +' '+ num0_9[arr[1]]).trim()
    } else if (number >= 100) {
        const arr = number.toString().split('').map(Number)
        let res = num0_9[arr[0]] + ' hundred ';
        if (arr[1] === 0) {
            res += num0_9[arr[2]]
        } else if (arr[1] === 1){
            res += num10_19[arr[2]]
        } else {
            res += num20_90[arr[1]] + ' ' + num0_9[arr[2]]
        }
        return res.trim()
    }
}
