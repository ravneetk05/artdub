function loadPosts(){
    fetch("http://localhost:3000/",{
        method:"get"
    }).then(response=>{
        if(response.status===200){
            return response.json()
        }
        else{
            throw new Error(response.statusText);
        }
    }).then(posts=>{
        let output = "";
        posts.forEach(post=>{
            output = output + `
            <h1>${post.id}</h1>
            <h1>${post.title}</h1>
            <h1>${post.body}</h1>
            `
        });
        let cont = document.getElementById("cont");
        cont.innerHTML = output;
    }).catch(err=>{
        alert(err);
    })
}

function savePost(){
    let t = document.getElementById("title").value;
    let b = document.getElementById("body").value;
    let data = {title:t, body:b }
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

function updatePost(){
    let id = document.getElementById("uid").value;
    let t = document.getElementById("utitle").value;
    let b = document.getElementById("ubody").value;
    let data = {title:t, body:b }
    data = JSON.stringify(data);
    fetch("http://localhost:3000/posts/"+id, {
        method:"put",
        headers:{
            "Content-Type":"application/json"
        },
        body:data
    }).then(response=>{
        if(response.status == 200){
            alert("Post updated successfully");
        }
        else{
            throw new Error(response.statusText);
        }
    }).catch(error=>{
        alert(error);
    })
}

function deletePost(){
    let id = document.getElementById("did").value;
    fetch("http://localhost:3000/posts/"+id, {
        method:"delete"
    }).then(response=>{
        if(response.status == 200){
            alert("Post deleted successfully");
        }
        else{
            throw new Error(response.statusText);
        }
    }).catch(error=>{
        alert(error);
    })
}