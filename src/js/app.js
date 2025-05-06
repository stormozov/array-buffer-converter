import ArrayBufferConverter from './ArrayBufferConverter/ArrayBufferConverter';

const converter = new ArrayBufferConverter();

const data = 'test';
const buffer = new ArrayBuffer(data.length * 2);
const view = new Uint16Array(buffer);

[...data].forEach((char, i) => view[i] = char.charCodeAt(0));

converter.load(buffer);

console.log(converter.toString());
