//-----------------------------------------arraymethods----------------------------------------------------

//----------------------pop()-------------------to delete last element from an arrya and returns remaining-----
var language=["java","python","js","ruby"];
language.pop();
console.log(language);

//---------------------shift()------to delete first element from an arrya and returns remaining values-------

var language=["java","python","js","ruby"];
language.shift();
console.log(language);

//------------------push()-------to add new element (last)to an arrya and returns new length of the array---

var language=["java","python","js","ruby"];
language.push("angular");
console.log(language);

//---------------unshift()----------to add new element (start)to an arrya and returns new length of the array

var language=["java","python","js","ruby"];
language.unshift("angular");
console.log(language);

//---------------------splice()------------can add and delete the element using the single method-----

/**Elements to insert into the array in place of the deleted elements.
Removes elements from an array and, if necessary, inserts new elements in their place, 
returning the deleted elements.*/
var language=["java","python","js","ruby"];
language.splice(0,2);
console.log(language);
//adding a new element in place of deleted element

var language=["java","python","js","ruby"];
language.splice(1,1,"c++");
console.log(language);

//adding an element without deleting any element

var language=["java","python","js","ruby"];
language.splice(1,0,"c++");//
console.log(language);

//if 2nd paramere is not assigned then remaing things will be deleted

var language=["java","python","js","ruby"];
language.splice(1);
console.log(language);

//------------------foreach()----only for array iterating an array elements---------------------------------

var language=["java","python","js","ruby"];
// for (let i = 0;i< language.length; i++){
//   console.log(language[i]);
// }traditional way

var language=["java","python","js","ruby"];
language.forEach(function(value,index,array) {
   console.log(`${index}:${value}`) 
});


var employees=[
    {
    emp_id:"C001",
    emp_name:"shwetha",
    emp_photo:"https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774_960_720.jpg",
    emp_age:22,
    emp_gender:"🕵️‍♀️female",
     emp_company:"unisys",
     emp_salary:20000,
     emp_designation:"fullstack developer",
     emp_doj:new Date('12/12/2019'),
     emp_location:"bangalore",
     emp_education:"BE"
    },
    {
        emp_id:"C002",
        emp_name:"Vishnu",
        emp_photo:"https://cdn.pixabay.com/photo/2014/09/07/16/53/hands-437968_960_720.jpg",
        emp_age:22,
        emp_gender:"🕵male",
         emp_company:"infosy",
         emp_salary:22000,
         emp_designation:"Software deceloper",
         emp_doj:new Date('12/30/2019'),
         emp_location:"mangalore",
         emp_education:"BE"
    },
    {
        emp_id:"C003",
        emp_name:"Rakshitha",
        emp_photo:"https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg",
        emp_age:21,
        emp_gender:"female",
         emp_company:"unisys",
         emp_salary:18000,
         emp_designation:"Graphic designer",
         emp_doj:new Date('06/01/2019'),
         emp_location:"Bangalore",
         emp_education:"BSc"
    },
    {
        emp_id:"C004",
        emp_name:"Sneha",
        emp_photo:"https://cdn.pixabay.com/photo/2015/09/09/16/40/ocean-931776_960_720.jpg",
        emp_age:18,
        emp_gender:"female",
         emp_company:"equilizer",
         emp_salary:12000,
         emp_designation:"medical sector",
         emp_doj:new Date('07/08/2023'),
         emp_location:"mysore",
         emp_education:"MBBs"
    },
   
    {
        emp_id:"C005",
        emp_name:"Deeksha",
        emp_photo:"https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918_960_720.jpg",
        emp_age:22,
        emp_gender:"🕵️‍♀️female",
         emp_salary:22000,
         emp_designation:"fullstack developer",
         emp_doj:new Date('12/12/2019'),
         emp_location:"bangalore",
         emp_education:"BE"
    }
];
var emp=[];
employees.forEach(empData=> {
    //all the data are pushing into an empty (emp) array
emp.push(
`<div class="card" >
  <img src="${empData.emp_photo}" class="card-img-top" alt="..." style="height: 25%">
  <div class="card-body">
    <h5 class="card-title">${empData.emp_name}</h5>
    <span class="badge badge-success float-right">${empData.emp_id}</span><br>
    <span class="badge badge-success float-right">${empData.emp_designation}</span><br>
<li class="list-group-item">salary:${empData.emp_salary}</li><br>
<li  class="list-group-item">location:${empData.emp_location}</li><br>
<li  class="list-group-item">education:${empData.emp_education}</li><br>
<li  class="list-group-item">age:${empData.emp_age}</li><br>
<li  class="list-group-item">company:${empData.emp_company}</li><br>
<li  class="list-group-item">gender:${empData.emp_gender}</li><br>
<li  class="list-group-item">date of joining:${empData.emp_doj.toString()}</li>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`);
});

document.getElementById('template').innerHTML=emp;//connecting html and js


//---------------------------reverse()------only array is having reverse method------------
//reverse the array pattern

var names=["shwetha","sneha","geetha","shiva"];
var test=names.reverse();
console.log(test);

var num=[1,2,8,7];
var test1=num.reverse();
console.log(test1);

// var str="hello everyone";
// var test2=str.reverse();
// console.log(test2);

//********-------------------sort()-----------------------to sort in ascending or desc order

var names=["shwetha","sneha","geetha","shiva"];
var test=names.sort();
console.log(test);
//in case of number sorting asc

var num=[1,2,8,7];
var numsort=num.sort(function (a,b) {
   return a-b; 
});
console.log(numsort);

//sorting in desc
var numb=[1,2,8,7];
var numsortd=numb.sort(function (b,a) {
   return a-b; 
});
console.log(numsortd);

//string reverse
var str="hello";
var stosr=[...str].reverse().join("");
console.log(stosr);

function username(str) {
    return [...str].reverse().join("");
}
console.log(username("jspider"));