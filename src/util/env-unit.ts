// env-unit.ts
import * as dotenv from 'dotenv';

dotenv.config();

/**
 * 格式化环境变量
 * @param key 环境变量的键值
 * @param defaultValue 默认值
 * @param callback 格式化函数
 */
const fromatValue = <T>(
  key: string,
  defaultValue: T,
  callback: (value: string) => T,
): T => {
  const value: string | undefined = process.env[key];
  if (typeof value === 'undefined') {
    return defaultValue;
  }
  return callback(value);
};

export const env = (key: string, defaultValue = '') =>
  fromatValue(key, defaultValue, (value) => value);

export const envNumber = (key: string, defaultValue = 0) =>
  fromatValue(key, defaultValue, (value) => Number(value));

export const envBoolean = (key: string, defaultValue = false) =>
  fromatValue(key, defaultValue, (value) => value === 'true');
