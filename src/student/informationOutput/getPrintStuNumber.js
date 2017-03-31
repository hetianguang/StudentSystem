/**
 * Created by tghe on 3/30/17.
 */

const getPrintStuNumber = strString => {
    let str = strString.split(',')

    for(let s of str) {
        if(isNaN(Number(s))){
            return null
        }
    }
    return str
}

module.exports = getPrintStuNumber
