export const toArray: (fakeArr: any) => any[] = (fakeArr) => {
  return [].slice.call(fakeArr);
}