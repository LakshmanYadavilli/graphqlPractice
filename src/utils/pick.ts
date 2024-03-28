type objType = {
  params?: Record<string, any>;
  query?: Record<string, any>;
  body?: Record<string, any>;
};
export const pick = <T extends objType>(
  object: T,
  keys: string[]
): Pick<T, keyof T> => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key as keyof T] = object[key as keyof T] as T[keyof T];
    }
    return obj;
  }, {} as Pick<T, keyof T>);
};
