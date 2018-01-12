export default function getClassName(classesObj) {
  return Object
    .keys(classesObj)
    .filter(key => classesObj[key])
    .join(' ');
}
