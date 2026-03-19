let edit_id = null;

// initialize storage
if(localStorage.getItem("students")==null){
    localStorage.setItem("students",JSON.stringify([]));
}

// READ (like fetch.php)
function loadData(){

    $.ajax({
        url:"dummy.json", // fake ajax request
        type:"GET",
        success:function(){

            let students = JSON.parse(localStorage.getItem("students"));
            let html="";

            students.forEach(function(s){
                html+=`
                <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.email}</td>
                <td><button onclick="editData(${s.id})">Edit</button></td>
                <td><button onclick="deleteData(${s.id})">Delete</button></td>
                </tr>`;
            });

            $("#data").html(html);
        }
    });

}

loadData();


// CREATE
$("#save").click(function(){

    $.ajax({
        url:"dummy.json",
        type:"POST",
        success:function(){

            let students = JSON.parse(localStorage.getItem("students"));

            let obj={
                id: Date.now(),
                name: $("#name").val(),
                email: $("#email").val()
            };

            students.push(obj);
            localStorage.setItem("students",JSON.stringify(students));

            loadData();
            $("#name,#email").val('');
        }
    });

});


// EDIT LOAD
function editData(id){
    let students = JSON.parse(localStorage.getItem("students"));
    let s = students.find(x=>x.id==id);

    edit_id=id;
    $("#name").val(s.name);
    $("#email").val(s.email);
}


// UPDATE
$("#update").click(function(){

    $.ajax({
        url:"dummy.json",
        type:"PUT",
        success:function(){

            let students = JSON.parse(localStorage.getItem("students"));

            students.forEach(function(s){
                if(s.id==edit_id){
                    s.name=$("#name").val();
                    s.email=$("#email").val();
                }
            });

            localStorage.setItem("students",JSON.stringify(students));
            loadData();
            $("#name,#email").val('');
        }
    });

});


// DELETE
function deleteData(id){

    $.ajax({
        url:"dummy.json",
        type:"DELETE",
        success:function(){

            let students = JSON.parse(localStorage.getItem("students"));
            students = students.filter(x=>x.id!=id);

            localStorage.setItem("students",JSON.stringify(students));
            loadData();
        }
    });

}