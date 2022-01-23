// Завдання 1
// Напишіть функцию arrCopy(arr), яка копією масив не змінюючи оригінал arr.
// const arr1 = arrCopy([1,2,3]) – запише в змінну масив [1,2,3].
// const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну масив [1,2,3,[10,20]].
// Перший варіант розв'язку
// let arr1 = [1,2,3];
// console.log(arr1);
// let a, b, c;
// let arr2 = [a,b,c,[10,20]];
// console.log(arr2);
// function arrCopy(){
//       console.log(`heloo`);
//       arr2[0] = arr1[0];
//       arr2[1] = arr1[1];
//       arr2[2] = arr1[2];
//       console.log(arr2);
// }
// arrCopy();
// Другий варіант розв'язку
// let arr1 = [1,2,3];
// console.log(arr1);
// let arr2 = [[10,20]];
// console.log(arr2);
// function arrCopy(){
//       let unshift = arr2.unshift('a','b','c');
//       // console.log(arr2);
//       arr2[0] = arr1[0];
//       arr2[1] = arr1[1];
//       arr2[2] = arr1[2];
//       console.log(arr2);
// }
// arrCopy();

// Завдання 2
// Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:
// const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’]. 
// const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’]. 

// let arr1 = [1,2,3];
// let arr2 = [10,200,3333]
// function arrToString(){
//       for(let i=0; i<arr1.length; i++){
//             arr1[i] = `${arr1[i]}`;
//       }
//       console.log(arr1);
//       for(let i=0; i<arr2.length; i++){
//             arr2[i] = `${arr2[i]}`;
//       }
//       console.log(arr2);
// }
// arrToString();

// Завдання 3
// Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:
// const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3]. 
// const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8]. 

// let arr1 = ['Ivan','Pavlo','Ira'];
// let newArr1 = [];
// for(let i=0; i<arr1.length; i++){
//       newArr1.push(arr1[i].length)
// }
// console.log(newArr1);

// Завдання 4
// Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок і повертає новий масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):
// const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’]) – запише в змінну масив [‘html’,‘css’,‘js’]. 
// const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’]) – запише в змінну масив [‘html’,‘css’,‘js’,‘python’,‘scss’]). 

let arr = ['html','css','js','html','js','python','js','scss'];
let arr2 = [];
for(i=0; i<arr.length; i++){
      if(arr2.includes(arr[i])==true){
          break;
      }
      else{
          arr2 +=`${arr[i]}, `;
      }
}
console.log(arr2)