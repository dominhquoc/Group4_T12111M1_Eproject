function thongbao(){
    var name = document.getElementById("name1").value;
    var email = document.getElementById("email1").value;
    var sel = document.getElementById("sel1").value;
    var arr = document.getElementsByClassName("ok");
    var ok = "";
    var comment = document.getElementById("comment1").value;
    var arr1 = document.getElementsByClassName("check");
    var check = "";
    for (var i=0;i < arr.length; i++){
        if(arr[i].checked){
            ok += arr[i].value;
        }
    }
    for (var i = 0; i < arr1.length; i++){
        if(arr1[i].checked){
            check = check + arr1[i].value + "," + " ";
        }
    }
    alert("Thanks you    \n" + "\nName              " + name + "\nEmail               " + email + 
    "\nSel                 " + sel +
     "\nOk                  " + ok + "\nComment         " 
     + comment + "\nCheck              " + check);
}