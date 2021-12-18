// jsを記述する際はここに記載していく

const table = $("#table").get(0);
const title = $("#title").get(0);
const priority = $("#priority").get(0);
const type = $("#type").get(0);
const duedate = $("#duedate").get(0);
const register = $("#register").get(0);


$("#register").on("click",function(){
    const output = {};
    output.title = title.value;
    output.priority = priority.value;
    output.type = type.value;
    output.duedate = duedate.value;
    
    const output2 = JSON.stringify(output)
    localStorage.setItem(localStorage.length.toString(),"memo", output2);

    let output3 = localStorage.getItem("memo");
    $("#text_area").html(output3);

    title.value = "";
    priority.value = "";
    type.value = "";
    duedate.value = "";

    });
   

$("#delete").on("click",function(){
    localStorage.removeItem("memo");
    $("#text_area").html("");
    });
   
    // var value = $("#input").val();
    // localStorage.setItem("memo", value);
    // alert("Saveしました");
