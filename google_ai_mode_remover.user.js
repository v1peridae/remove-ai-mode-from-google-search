// ==UserScript==
// @name         Bye bye Google AI Mode :P
// @namespace    https://github.com/v1peridae/remove-ai-mode-from-google
// @version      1.0.2
// @description  Me when the function has AI Mode (not cool)
// @author       v1peridae
// @match        https://www.google.com/*
// @match        https://*.google.com/*
// @include      /^https:\/\/(?:www\.)?google\.[a-z.]+\/.*/
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  "use strict";
  console.log("script loaded");
  function noai() {
    document.querySelectorAll('div[jsname="bVqjv"].YmvwI').forEach((div) => {
      const span = div.querySelector("span.Beswgc");
      if (span && (span.textContent.trim() === "AI Mode" || span.textContent.trim() === "Short videos")) {
        const link = div.closest("a") || div;
        link.remove();
      }
    });
  }

  noai();

  const observer = new MutationObserver(noai);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
