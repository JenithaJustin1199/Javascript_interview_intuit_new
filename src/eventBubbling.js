<!DOCTYPE html>
<html lang="en">
    <style>
        div{
            min-width: 100px;
            min-height: 100px;
            padding: 30px;
            border: 1px solid black
        }
    </style>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" >
    <title>Document</title>
</head>
<body>
    <div id="grandParent">
        <div id = "parent">
            <div id ="child">

            </div>
        </div>
    </div>
    <script>
        document.getElementById("child").addEventListener("click",function(event){
            console.log("I'm child")
        },true)
        document.getElementById("parent").addEventListener("click",function(event){
            console.log("I'm parent")
            event.stopPropagation()
        },true)
        document.getElementById("grandParent").addEventListener("click",function(event){
            console.log("I'm grandParent")
        },true)
    </script>
</body>
</html>
