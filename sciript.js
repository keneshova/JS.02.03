const exampleList = ["Apples", "Pears", "Oranges"];
const ul = document.createElement("ul");
document.body.append(ul);
for(i = 0; i < exampleList.length; i++){
  const li = document.createElement("li");
  li.textContent = exampleList[i];
  ul.append(li);

}

const exampleList2 = [
  {name: "Bakyt",age: 18 },
  {name: "Dosbol", age: 32 }
]
const ul1 = document.createElement("ul");
document.body.append(ul1);
for (i = 0; i < exampleList2.length; i++) {
  const list1 = document.createElement("li");
  ul1.append(list1);
  list1.textContent = exampleList2[i].name + " - " + exampleList2[i].age;
}