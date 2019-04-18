declare module 'django-reverse' {
  function reverse(...args: (string|number)[]): string|void;
  export = reverse;
}
