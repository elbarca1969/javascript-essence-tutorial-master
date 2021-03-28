function a(name){
    return 'hello ' + name;
}

const b = (name, name1) => 'hello ' + name + ' ' + name1;

console.log(b('Tom', 'Bob'))

const c = name => 'hello ' + name;

console.log(c('Tim'))