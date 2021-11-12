function h(type: string, props: any, ...children: any) {
  return { type, props, children: children.flat() };
}
function createElement(): void {
  console.log("hello world")
}
export {
  h,
  createElement
}