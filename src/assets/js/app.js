// Import CSS
import '../styles/app.scss';  // ✅ Correct path

// Your JavaScript code here
console.log('Theme1 loaded');

// Salla JS is available automatically
if (typeof salla !== 'undefined') {
    salla.ready(function() {
        console.log('Salla is ready');
    });
}