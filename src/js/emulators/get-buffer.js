import { TEST_DATA } from '../data/data';

/**
 * Эмулирует создание объекта типа `ArrayBuffer` из строки и возвращает его.
 * @returns {ArrayBuffer} объект типа `ArrayBuffer`.
 */
export default function getBuffer() {
  return ((input) => {
    const buffer = new ArrayBuffer(TEST_DATA.length * 2);
    const bufferView = new Uint16Array(buffer);
    
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    
    return buffer;
  })(TEST_DATA);
}
