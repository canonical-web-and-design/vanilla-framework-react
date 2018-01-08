export default function getClassName(classesObj) {
  const classNames = Object.keys(classesObj).filter(key => classesObj[key]);
  const classString = classNames.join(' ');

  return classString;
}
