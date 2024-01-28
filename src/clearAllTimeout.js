// Polyfill for clearAllTimeout
if (!window.clearAllTimeout) {
  window.clearAllTimeout = function () {
    // Get all timeout IDs
    const timeoutIds = Object.keys(window)
      .filter((key) => key.startsWith('setTimeout'));

    // Clear each timeout
    timeoutIds.forEach((timeoutId) => {
      clearTimeout(window[timeoutId]);
      delete window[timeoutId];
    });
  };
}

// Usage
setTimeout(() => {
  console.log('Timeout 1');
}, 1000);

setTimeout(() => {
  console.log('Timeout 2');
}, 2000);

// Clear all timeouts
window.clearAllTimeout();
