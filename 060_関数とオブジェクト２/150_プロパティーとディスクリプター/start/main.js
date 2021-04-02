'use strict';
// const obj = {prop: 0};

const obj ={};

Object.defineProperties(obj, 'prop', {
    configurable: true,
    value: 0,
    writable: true
})

// Object.defineProperties(obj, 'prop', {
//   enumerable: true
// })

delete obj.prop;

// obj.prop = 1;
console.log(obj.prop);

const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

console.log(descriptor);