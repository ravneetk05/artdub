

function savePost(){
    let t = document.getElementById("un").value;
    let b = document.getElementById("pwd").value;
    let c = document.getElementById("comments").value;
    let data = {un:t, pwd:b,comments:c }
    data = JSON.stringify(data);
    fetch("http://localhost:3000/posts",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:data
    }).then(response=>{
        if(response.status===201){
            alert("Post saved successfully");
        }   
        else{
            throw new Error(response.statusText);
        }
    }).catch(error=>{
        alert(error);
    })
}
