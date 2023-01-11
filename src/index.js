module.exports = function reverse (n) {
    var result = '';
    var array_n = Math.abs(n).toString().split('');
    for (let i = array_n.length - 1; i >= 0; i--){
        result += array_n[i];
    }
    return Number(result)
}
