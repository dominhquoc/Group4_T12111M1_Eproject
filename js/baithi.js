function showInfo(){
    var dateofbirth = document.getElementById('birth').value;
    var birth = new Date(dateofbirth);
    var today = new Date();
    var age = Math.floor((today - birth)/(24*60*60*1000*365));
    if ( age < 18 ) {
        alert("Member age must be 18-year old or above");
        return false;
    }
    var name = document.getElementById('name1').value;
    var nametwo = document.getElementById('name2').value;
    var birth1 = document.getElementById('birth').value;
    var email = document.getElementById('email1').value;
    var arr = document.getElementsByClassName('ok');
    var arr1 = document.getElementsByClassName('hobbies');
    var ok ='';
     var hobbies = '';
    var comment = document.getElementById('comment').value;
    for (var i=0;i < arr.length; i++){
        if(arr[i].checked){
            ok += arr[i].value;
        }
    }
     for (var i=0;i < arr1.length; i++){
         if(arr1[i].checked){
            hobbies = hobbies + arr1[i].value + ',' + ' ';
        }
     }
    alert("Your Account Details\n" + "-----------------\n" + "First name: " + name + "\nLast name: "
    + nametwo + "\n" + "Birthday: " + birth1 + "\nEmail: " + email + "\nIs employed: " + ok + "\ncomment: " + comment +"\nLearn " + hobbies);

    // alert("Your Account Details\n" + "-----------------\n" + "First name: " + name + "Last name: "
    //  + nametwo + "\n" + "Birthday: " + birth1 +
    //   "\n" + "Address: " + address + "\n" + "Email: " + email + "\n" + "Comment: " + comment);
}