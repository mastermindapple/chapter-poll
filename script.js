var preference = undefined;
function data(){
    preference = "Data Handling";
    console.log(preference);
}
function root(){
    preference = "Square Root";
    console.log(preference);
}
function quad(){
    preference = "Understanding Quadrilaterals";
    console.log(preference);

}

var button = document.getElementById("submit");



button.addEventListener("click",(e) =>{
    e.preventDefault();
    var name = document.getElementById("name").value;
    var database = firebase.database();
    if(!name){
        alert("Please enter your name to proceed");
    }
    
    else if(!preference){
        alert("Please select a chapter");
    }
    else{
     database.ref("/Users/"+name).set({
            Chapter: preference
        });
        document.getElementById("header").innerHTML = ("Choice Submitted!");
        document.getElementById("input").innerHTML = ("");
        document.getElementById("options").innerHTML = ("Results will be out in the next Class");
        document.getElementById("btn").innerHTML = ("");
    }
});


 
