Below is an end-to-end working Intersection Observer example with:

✅ HTML
✅ CSS
✅ JavaScript
✅ Comments on every important line
✅ Infinite Scroll + Lazy Loading images
✅ Clear Pros & Cons

Just copy-paste into a single .html file and open in browser — it works.

✅ FULL WORKING CODE — Intersection Observer (Infinite Scroll + Lazy Images)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Intersection Observer Demo</title>

<style>
  /* Simple clean layout */
  body {
    font-family: Arial;
    margin: 0;
    padding: 0;
  }

  .container {
    width: 90%;
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }

  .card {
    width: 100%;
    height: 250px;
    background: #eee;
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;                  /* Start hidden for fade-in animation */
    transition: opacity 0.7s;
  }

  .card img.loaded {
    opacity: 1;                  /* Fade in when loaded */
  }

  /* The sentinel at the bottom */
  #sentinel {
    height: 40px;
  }
</style>
</head>
<body>
<div class="container">

  <!-- Cards will be added here -->
  <div id="cards"></div>

  <!-- Sentinel triggers loading when visible -->
  <div id="sentinel"></div>
</div>

<script>
/*******************************************************
 * Mock API: returns 10 image URLs each time you call it
 *******************************************************/
function fetchImages() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const images = [];

      // 10 random images from picsum
      for (let i = 0; i < 10; i++) {
        images.push(`https://picsum.photos/seed/${Math.random()}/600/400`);
      }

      resolve(images);
    }, 600); // simulate API delay
  });
}

/**********************************************
 * Append card elements (with lazy-loaded images)
 **********************************************/
function addImagesToDOM(imageUrls) {
  const container = document.getElementById("cards");

  imageUrls.forEach((url) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.dataset.src = url; // store real image URL in data-src

    card.appendChild(img);
    container.appendChild(card);

    // Observe each image for lazy loading
    lazyObserver.observe(img);
  });
}

/**********************************************************
 * Lazy Loading Observer: loads image only when it appears
 **********************************************************/
const lazyObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;   // load real image
      img.onload = () => img.classList.add("loaded");

      obs.unobserve(img);          // stop observing loaded image
    }
  });
});

/**********************************************************
 * Infinite Scroll Observer: loads more content when bottom
 * sentinel comes into view
 **********************************************************/
let loading = false;

const infiniteObserver = new IntersectionObserver(async (entries) => {
  const entry = entries[0];

  if (entry.isIntersecting && !loading) {
    loading = true;

    const imgs = await fetchImages();
    addImagesToDOM(imgs);

    loading = false;
  }
});

// Observe the bottom sentinel
infiniteObserver.observe(document.getElementById("sentinel"));

/***********************************************
 * Initial load for the first set of images
 ***********************************************/
(async function initialLoad() {
  const imgs = await fetchImages();
  addImagesToDOM(imgs);
})();
</script>

</body>
</html>

✅ What this demo does
✔️ Loads 10 cards initially
✔️ Each card has an <img> that lazy-loads only when visible
✔️ Intersection Observer monitors the bottom sentinel
✔️ When the sentinel enters view → fetch next 10 images
✔️ Images fade in (CSS animation)
✔️ No scroll event handlers
✔️ Fully optimized browser-level async intersection checks
⭐ Pros of Intersection Observer
1. Super efficient (no scroll event spam)

Browser calculates visibility internally → no layout thrashing.

2. Perfect for infinite-scroll

Load data only when needed.

3. Perfect for lazy-loading images

Massive performance improvement for media-heavy pages.

4. Zero throttling/debouncing needed

Unlike scroll, which fires ~60 times per second.

5. Works even when page is not actually scrolling

(E.g., CSS animations, user resizing, changes in layout.)

6. Cleaner code and easier debugging
❌ Cons of Intersection Observer
1. Not supported in very old browsers

IE11 requires polyfill.

2. Hard to fine-tune thresholds for complex UI

E.g., animations that need exact timing.

3. Observers can stack up if not unobserved

Potential memory leak if you forget unobserve().

4. Callback can be triggered too often if threshold array is large

E.g., { threshold: [...lotsOfValues] }
