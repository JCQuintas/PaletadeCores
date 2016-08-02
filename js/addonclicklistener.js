classname = document.getElementsByClassName("colorcard");

alert(classname);
console.log(classname);
console.log(classname.keys);

var myFunction = function() {
    var attribute = this.getAttribute("data-hex");
    alert(attribute);
};

for (var i = 0; i < classname.length; i++) {
  alert("yup");
    if (element1.addEventListener) {  // all browsers except IE before version 9
      classname[i].addEventListener('click', myFunction, false);
    } else {
      if (element1.attachEvent) {   // IE before version 9
        classname[i].attachEvent("click", myFunction);
      }
    }
};
