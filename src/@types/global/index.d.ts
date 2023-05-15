declare global {
  type ExtendsValueOrNever<
    T extends Record<string, any>,
    V extends keyof T,
    K = keyof T,
  > = K extends V ? T[K] : never;

  type GenericEntityMapper<T extends Record<string, any>> = {
    [P in keyof T]: ExtendsValueOrNever<T, P>;
  };
  type Message<
    Topic extends n,
    Version extends number,
    T extends Record<string, any>,
  > = {
    topic: Topic;
    version: Version;
    data: T;
  };

  type OptionalProps<Interface, Props extends keyof Interface> = Omit<
    Interface,
    Props
  > & {
    [Key in Props]?: Interface[Key];
  };
}
export {};
