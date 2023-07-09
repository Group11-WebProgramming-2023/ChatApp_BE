// const filterObj = <T extends object>(
//   obj: T,
//   ...allowedFields: Array<keyof T>
// ): Partial<T> => {
//   const newObj: Partial<T> = {};
//   Object.keys(obj).forEach((el) => {
//     if (allowedFields.includes(el as keyof T)) {
//       newObj[el as keyof T] = obj[el as keyof T];
//     }
//   });
//   return newObj;
// };

// export { filterObj };

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

module.exports = filterObj;
