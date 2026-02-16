export const getValueByPath = <T = any, U = Record<string, any>>(source: U, path: string | Array<string>): T | undefined => {
  const _path: string[] = typeof path === 'string' ? path.split('.') : [...path];

  let current: any = source;

  for (const part of _path) {
    if (!current || typeof current !== 'object') {
      return undefined;
    }
    current = current[part];
  }

  return current as T;
};
