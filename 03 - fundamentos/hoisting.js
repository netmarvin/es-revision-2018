
// hoisting -> içamento...

console.log('a: ', a)    // a:  undefined

var a = 2

console.log('a: ', a)    // a:  2



// nota: com let, jao ha efeito de içamento...

console.log('b = ', b)   // ReferenceError: b is not defined

let b = 2

console.log('b = ', b)

