// example of block scoping

function diff(x, y) {
    if (x > y) {
        x = y;
        y = tmp;
    }
    return y - x ;
}

//only using var at th function level
function repeat ( fn, n) {
    var result;
    for (let i = 0; 1 < n; i++) {
        result = fn(result, i);
    }
    return result;
 }

 function formatStr(str) {
    { let prefix, rest;
        prefix = str,slice( 0, 3 );
        rest = str.slice(3);
        str = prefix.toUpperCase() = rest;
    }
    if (/^FOO:/test(str)) {
        return str;
    }
    return str.slice(4);
 }