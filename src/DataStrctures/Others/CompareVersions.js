function compareVersions(version1, version2) {
  let v1 = version1.split(".");
  let v2 = version2.split(".");
  const len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    const n1 = i < v1.length ? parseInt(v1[i]) : 0;
    const n2 = i < v2.length ? parseInt(v2[i]) : 0;
    if (n1 > n2) return true;
    if (n1 < n2) return false;
  }
  return "equal";
}
console.log(compareVersions("7.5.6.4", "7.5.3"));
console.log("<<<<>>>>==<<<<<".match(/([<,=,>])\1+/g));
