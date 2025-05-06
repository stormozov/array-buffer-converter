import ArrayBufferConverter from '../ArrayBufferConverter.js';
import getBuffer from '../../emulators/get-buffer.js';
import { TEST_DATA } from '../../data/data.js';

describe('Класс ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  describe('Конструктор', () => {
    it('Создает экземпляр класса ArrayBufferConverter', () => {
      expect(converter).toBeInstanceOf(ArrayBufferConverter);
    });
  });

  describe('Методы экземпляра', () => {
    describe('load()', () => {
      it('Возвращает значение из буфера по умолчанию', () => {
        expect(converter.buffer).toBe(null);
      });

      it('Загружает переданный буфер в свойство экземпляра', () => {
        const buffer = new ArrayBuffer(4);
        converter.load(buffer);

        expect(converter.buffer).toBe(buffer);
      });

      it('Выбрасывает ошибку, если был передан не ArrayBuffer', () => {
        const invalidArgs = [123, 104.4, -14, 'test', {}, [], null, undefined, new Uint16Array(2)];
        invalidArgs.forEach((arg) => {
          expect(() => converter.load(arg))
            .toThrow('Аргумент должен быть типа ArrayBuffer');
        });
      });
    });

    describe('toString()', () => {
      it('Возвращает пустую строку без буфера', () => {
        expect(converter.toString()).toBe('');
      });

      it('Преобразует данные из буфера в строку', () => {
        const data = 'test';
        const buffer = new ArrayBuffer(data.length * 2);
        const view = new Uint16Array(buffer);

        [...data].forEach((char, i) => view[i] = char.charCodeAt(0));

        converter.load(buffer);

        expect(converter.toString()).toBe(data);
      });

      it('Преобразует данные функции-эмулятора getBuffer() в строку JSON', () => {
        converter.load(getBuffer());
        expect(converter.toString()).toBe(TEST_DATA);
      });
    });
  });
});
