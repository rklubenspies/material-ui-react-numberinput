// @flow

// $FlowFixMe
import type { ValueType } from '../types/Types';

export default class NumberUtils {
  static getParsedValue(value: string, valueType: ValueType): number {
    return valueType === 'integer' ? parseInt(value, 10) : parseFloat(value);
  }

  static getValueWithPrecisionAsString(
    value: number,
    valueType: ValueType,
    precision: number,
    valueStr?: string
  ): string {
    if (valueType === 'integer') {
      return value.toString();
    }

    const factor = 10 ** precision;
    const decimalValueStr = (Math.round(value * factor) / factor).toString();
    return valueStr && valueStr[valueStr.length - 1] === '.' ? `${decimalValueStr}.` : decimalValueStr;
  }
}
