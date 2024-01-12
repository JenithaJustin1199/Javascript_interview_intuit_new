<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>javascript Execution</title>
    <style>
        div{
            min-width: 100px;
            min-height: 100px;
            padding: 30px;
            border: 1px solid black
        }
    </style>
</head>
<body>
    <div>
        <ul id="category">
            <li id="camera">"camera"</li>
            <li id="mobile">"mobile"</li>
            <li id="shoes">"shoes"</li>

        </ul>
    </div>
    <script src="./src/eventdelagation.js"></script>
    
</body>
</html>

document.querySelector("#category").addEventListener("click",(e)=>{
    console.log(e.target.id)
    if(e.target.tagName=="LI"){
    window.location.href = "/"+e.target.id
    }
})
