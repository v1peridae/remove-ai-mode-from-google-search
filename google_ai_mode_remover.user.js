// ==UserScript==
// @name         Bye bye Google AI Mode :P
// @namespace    https://github.com/v1peridae/remove-ai-mode-from-google
// @version      1.0.1
// @description  Me when the function has AI Mode (not cool)
// @author       v1peridae
// @match        https://www.google.com/*
// @match        https://*.google.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  "use strict";
  const selector = 'div[jsname="bVqjv"].YmvwI';
  function removeAI() {
    document.querySelectorAll(selector).forEach((el) => el.remove());
    document.querySelectorAll("span.Beswgc").forEach((span) => {
      if (span.textContent.trim() === "AI Mode") {
        const cont = span.closest("div");
        if (cont) {
          cont.remove();
        }
      }
    });
  }
  removeAI();
  document.addEventListener("DOMContentLoaded", removeAI);
  const observer = new MutationObserver(removeAI);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
