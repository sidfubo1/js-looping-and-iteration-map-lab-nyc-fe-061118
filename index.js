// Code your solution in this file.

//function lowerCaseDrivers(driver) {
//  let copyDriver = [...driver];
//  for (i = 0; i < driver.length; i++) {
//    copyDriver[i] = driver[i].toLowerCase();
//  }
//  return copyDriver;
//}

//lowerCaseDrivers(driver);


//FIRST PROBLEM

function converToLowerCase(x) {
  x = x.toLowerCase();
  return x;
}

function lowerCaseDrivers(drivers){
  return drivers.map(converToLowerCase);
}

//SECOND PROBLEM
function createNameObject(name) {
  let nameArray = name.split(" ");
  let firstName = nameArray[0];
  let lastName = nameArray[1];
  let nameObject = {firstName: firstName, lastName: lastName};
  return nameObject;
}

function nameToAttributes(driver) {
   return driver.map(createNameObject);
}

//THIRD PROBLEM
function createNameHometownPhrase(newObject) {
  let nameOnly = newObject['name'];
  let hometownOnly = newObject['hometown'];
  return nameOnly + ' is from ' + hometownOnly;
}

function attributesToPhrase(driver) {
  return driver.map(createNameHometownPhrase);
}



