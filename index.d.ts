declare module 'django-reverse' {
  function reverse(...args: (string | number)[]): string | string[];
  export = reverse;
}
