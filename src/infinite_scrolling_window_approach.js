Below is a complete, clean, interview-ready infinite scrolling example using the FIRST approach:

✅ window.scrollY
✅ window.innerHeight
✅ document.body.scrollHeight

Every line is commented

HTML + CSS + JavaScript

Includes pros and cons inside the code as comments

Beginner-friendly, production-level explanation

✅ Infinite Scroll – Approach 1 (Scroll Position math)
Using:

window.scrollY → how far user scrolled

window.innerHeight → height of visible area

document.body.scrollHeight → total page height

📌 Full Working Example (Copy-Paste Ready)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Infinite Scroll - Scroll Position</title>
<style>
    /* Simple styling for demo */
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f5f5f5;
    }

    /* Container to hold items */
    #container {
        width: 600px;
        margin: auto;
        padding: 20px;
    }

    /* Individual items */
    .item {
        background: white;
        padding: 20px;
        margin-bottom: 15px;
        border-radius: 8px;
        box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
        font-size: 18px;
    }

    /* Loader indicator */
    #loader {
        text-align: center;
        padding: 20px;
        font-weight: bold;
        color: #555;
    }
</style>
</head>
<body>

<div id="container"></div>
<div id="loader">Loading...</div>

<script>
/*  
===================================================================
INFINITE SCROLL USING SCROLL POSITION:
window.scrollY + window.innerHeight >= document.body.scrollHeight
===================================================================
This approach manually checks if the user reached the bottom, 
and then loads more items.  
===================================================================
*/

/* Container where items will be appended */
const container = document.getElementById("container");
const loader = document.getElementById("loader");

/* 
-------------------------------------------
Simulated API - returns fake items
-------------------------------------------
*/
function fetchMoreItems(count = 5) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const items = [];
            for (let i = 0; i < count; i++) {
                items.push("Item " + (Math.random() * 100000).toFixed(0));
            }
            resolve(items); // return fake items
        }, 1000); // simulate network delay
    });
}

/*
----------------------------------------------
Renders new items into the page
----------------------------------------------
*/
function renderItems(items) {
    items.forEach((itemText) => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = itemText;
        container.appendChild(div);
    });
}

/*
-------------------------------------------------------------
Main Infinite Scroll Logic (Scroll Position Method)
-------------------------------------------------------------
*/
let isLoading = false; // prevents multiple fetches at once

async function handleScroll() {

    // If already fetching data → do nothing
    if (isLoading) return;

    /*
    Check if the user is close to the bottom:
    
    window.scrollY  -> how much user scrolled from top
    window.innerHeight -> visible screen height
    document.body.scrollHeight -> total content height
    
    When: scrollY + innerHeight >= scrollHeight - threshold
    Means: user is near the bottom → load more
    */
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
        
        console.log("Fetching more items...");

        isLoading = true;
        loader.style.display = "block";

        // fetch new items
        const newItems = await fetchMoreItems();

        // render them
        renderItems(newItems);

        loader.style.display = "none";
        isLoading = false;
    }
}

/*
-------------------------------------------------------------
Add Scroll Listener
-------------------------------------------------------------
The scroll event fires MANY times per second (up to 60fps).  
This can cause performance issues → A con of this approach.
-------------------------------------------------------------
*/
window.addEventListener("scroll", handleScroll);

/*
--------------------------------------------------------------
Load initial items
--------------------------------------------------------------
*/
fetchMoreItems().then(renderItems);


/*  
==============================================================
PROS & CONS OF SCROLL POSITION METHOD
==============================================================

---------------------------
✔ PROS:
---------------------------
1. Very simple to implement.
2. No new APIs required (works even in older browsers).
3. Easy to understand and interview-friendly.

---------------------------
✘ CONS:
---------------------------
1. Scroll events fire too frequently (up to 60 times/sec),
   causing performance issues.
2. Must manually calculate scroll height (brittle logic).
3. Can trigger early/late when dynamic content loads (images).
4. Harder to manage with nested scroll containers.
5. Requires throttling/debouncing for optimization.
6. More complex edge-case handling (e.g., user scrolls fast).

==============================================================
*/
</script>

</body>
</html>
