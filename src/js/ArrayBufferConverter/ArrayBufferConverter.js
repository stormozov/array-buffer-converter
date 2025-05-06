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
   */
  load(buffer) {
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
    if ( !this.#buffer ) return '';
    return Array
      .from(new Uint16Array(this.#buffer))
      .map((code) => String.fromCharCode(code))
      .join('');
  }

  /**
   * Возвращает сохранённый буфер.
   * @returns {ArrayBuffer} Сохранённый буфер.
   */
  get buffer() {
    return this.#buffer;
  }
}
