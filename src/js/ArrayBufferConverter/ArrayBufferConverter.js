/**
 * Класс для конвертации буфера в строку
 */
export default class ArrayBufferConverter {
  #buffer;

  constructor() {
    this.#buffer = null;
  }

  /**
   * Сохраняет переданный ArrayBuffer в свойстве экземпляра.
   * @param {ArrayBuffer} buffer буфер, который нужно сохранить.
   * @throws {Error} Если переданный аргумент не ArrayBuffer.
   */
  load(buffer) {
    if (!(buffer instanceof ArrayBuffer)) {
      throw new Error('Аргумент должен быть типа ArrayBuffer');
    }

    this.#buffer = buffer;
  }

  /**
   * Конвертирует буфер в строку.
   * 
   * Преобразует данные из ArrayBuffer в строку, используя Uint16Array для доступа 
   * к бинарным данным и преобразуя каждый код символа обратно в строку.
   * 
   * @returns {string} конвертированная строка из буфера, либо пустая строка.
   */
  toString() {
    return this.#buffer 
      ? String.fromCharCode(...new Uint16Array(this.#buffer))
      : '';
  }

  /**
   * Возвращает сохранённый буфер.
   * @returns {ArrayBuffer} Сохранённый буфер.
   */
  get buffer() {
    return this.#buffer;
  }
}
