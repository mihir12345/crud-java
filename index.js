// your code goes here ...
const form = document.getElementById("form");
const add = document.getElementsByClassName("add");
const age = document.getElementById("age").value;
const rel = document.getElementById("rel").value;
const smoker = document.getElementById("smoker").value;
const obj = [];

//////adding a para ele

// add[0]
// age.addEventListener("click", function (e) {
//     e.preventDefault();
//     addData();
//   });

add[0].addEventListener("click", function (e) {
  e.preventDefault();
  addData();
});

function addData() {
  let age = document.getElementById("age").value;
  let rel = document.getElementById("rel").value;
  let smoker = document.getElementById("smoker").value;
  console.log(age, rel, smoker);

  let data = { age: age, rel: rel, smoker: smoker };
  obj.push(data);
  //   console.log(obj);

  addP(data);
  del();
  edit();


  var returnValue;

  returnValue = true;
  if (age.trim() == "" && age > 0) {
    document.getElementById("reqTxtAge").innerHTML = "*Age is required.";
    returnValue = false;
  }
  if (rel.trim() == "") {
    document.getElementById("reqTxtRelation").innerHTML =
      "* Address is required.";
    returnValue = false;
  }


  age = document.getElementById("age").value=null;
  rel = document.getElementById("rel").value=null;
  smoker = document.getElementById("smoker").value=null;

//   rel = "";
//   smoker = "";  
  

  return returnValue;

}
//   const obj = {
//     age: document.getElementById("age").value,
//     rel: document.getElementById("rel").value,
//     smoker: document.getElementById("smoker").value,
//   };
//   data.push(obj);

// console.log(obj);

function addP(data) {
  var para = document.createElement("P");
  console.log(obj);

  //   for(let i=0;i<=obj.length;i++){
  //    ele=obj[i]}
  para.innerText = [data.age, data.rel, data.smoker];
  document.body.appendChild(para);
}

function del() {
  var del = document.createElement("BUTTON");
  del.innerHTML = "Delete";
  document.body.appendChild(del);
  del.addEventListener("click", delEle);
}

function delEle(obj) {
  newObj = obj.splice(1, 1);
  obj = newObj;
  console.log(obj);
}

////adding edit button
function edit() {
  var edit = document.createElement("BUTTON");
  edit.innerHTML = "Edit";
  document.body.appendChild(edit);
}
