/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/pricing-table/view.js ***!
  \***********************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");
checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
  professional.textContent = professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
  master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
});
/******/ })()
;
//# sourceMappingURL=view.js.map