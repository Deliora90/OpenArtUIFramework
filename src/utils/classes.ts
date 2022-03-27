export type Сondition = { [key: string]: boolean | undefined };

export type Arguments = string | undefined | Сondition;

const getFilteredСondition = (args: Arguments[]) =>
  args.filter((arg) => {
    const isObject = typeof arg === 'object';
    const isString = typeof arg === 'string';
    if (isObject) {
      for (const key in arg) {
        if (arg[key]) {
          return arg;
        }
      }
    }
    if (isString) {
      return arg;
    }
  });

export const classes = (...args: Arguments[]): string => {
  const filteredArgs = getFilteredСondition(args);
  return filteredArgs
    .map((arg) => {
      const isObject = typeof arg === 'object';
      if (isObject) {
        for (const key in arg) {
          return key;
        }
      }
      return arg as string;
    })
    .join(' ');
};
