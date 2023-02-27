// 1.const{name,age}=arr[i] //iterating array of objects
// 2.obj1,obj2

const skillsData = [
  { name: "John", skills: ["JavaScript", "React", "CSS", "HTML"] },
  { name: "Jane", skills: ["Python", "Django", "SQL"] },
  { name: "Bob", skills: ["JavaScript", "Node.js", "MongoDB"] },
  { name: "Alice", skills: ["React", "Redux", "Node.js", "Express"] },
  { name: "Mark", skills: ["HTML", "CSS", "JavaScript", "Vue.js"] },
  { name: "Karen", skills: ["JavaScript", "React", "Angular", "TypeScript"] }
];

const skillsCount = skillsData.reduce((acc, curr) => {
  curr.skills.forEach((skill) => {
    if (!acc[skill]) {
      acc[skill] = { skill: skill, count: 1, names: [curr.name] };
    } else {
      acc[skill].count++;
      acc[skill].names.push(curr.name);
    }
  });
  return acc;
}, {});

//For gayathri's question
// const skillsCount = skillsData.reduce((acc, curr) => {
//   const skill = curr.skills;
//   const name = curr.name;

//   if (!acc[skill]) {
//     acc[skill] = { skill: skill, count: 1, names: [name] };
//   } else {
//     acc[skill].count++;
//     acc[skill].names.push(name);
//   }

//   return acc;
// }, {});

// const sortedSkills = Object.values(skillsCount).sort((a, b) => b.count - a.count);

// console.log(sortedSkills);

const sortedSkills = Object.values(skillsCount).sort(
  (a, b) => b.count - a.count
);

console.log(sortedSkills);
