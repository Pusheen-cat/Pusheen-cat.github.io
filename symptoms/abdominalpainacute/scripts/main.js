function showhide(p1,p2) {
    if(p1 !== "no"){
document.getElementById(p1).style.display = 'block';
        }
    if(p2 !== "no"){
document.getElementById(p2).style.display = 'none';
        }
}
function showhide2(p1,p2) {
    if(p1.length !== 0){
            for (var i = 0; i < p1.length; i++) {
                document.getElementById(p1[i]).style.display = 'block';
        }}
    if(p2.length !==0 ){
            for (var i = 0; i < p2.length; i++) {
                document.getElementById(p2[i]).style.display = 'none';
        }}
}

function funcchecked(p1,p2) {
  var checkBox = document.getElementById(p1);
  // Get the output text
  // If the checkbox is checked, display the output text
  if (checkBox.checked === true){
    document.getElementById(p2).style.display = 'block';
  } else {
    document.getElementById(p2).style.display = 'none';
  }
}