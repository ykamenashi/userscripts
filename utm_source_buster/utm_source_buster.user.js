// ==UserScript==
// @name         utm_source_buster
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove unnecessary URL parameter from gmail.
// @author       ykmns
// @match        https://qiita.com/*?utm_source=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    location.href = location.href.match(/^[^?]+/)[0];
})();