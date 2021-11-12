/**
 * class extends 에서는 다중 상속이 되지 않으므로 mixin을 통해 다중 상속을 지원한다.
 * @param targetClass
 * @param baseClasses
 */
export function applyMixins(targetClass: any, baseClasses: any[]): void {
  baseClasses.forEach((baseClass) => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach((name) => {
      Object.defineProperty(
        targetClass.proptotype,
        name,
        Object.getOwnPropertyDescriptor(baseClass.prototype, name) || Object.create(null)
      );
    });
  });
}
