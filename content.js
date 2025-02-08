/*
Ignoring prepositions and bolding the first of each word.
*/

function isBlogPage() {
    return document.querySelector("article") !== null ||
           window.location.href.includes("blog") ||
           document.querySelector("meta[property='og:type'][content='article']");
}

// List of prepositions to exclude from bolding
const prepositions = new Set([
    "in", "on", "at", "by", "with", "about", "against", "between", "into", "through", "during",
    "before", "after", "above", "below", "to", "from", "up", "down", "under", "over", "again",
    "out", "off", "near", "since", "without", "within", "along", "toward", "until", "upon",
    "for", "of", "as", "like", "than", "though"
]);

function boldFirstHalf(text) {
    return text.replace(/\b(\w{2,})\b/g, (match) => {
        let cleanWord = match.replace(/[^a-zA-Z]/g, ""); // Remove special characters for comparison
        if (prepositions.has(cleanWord.toLowerCase()) || cleanWord.length < 2) return match; // Skip prepositions

        let half = Math.floor(cleanWord.length / 2);
        return `<b>${match.slice(0, half)}</b>${match.slice(half)}`;
    });
}

function processTextNode(node) {
    let span = document.createElement("span");
    span.innerHTML = boldFirstHalf(node.nodeValue);
    return span;
}

function processElement(node) {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
        node.replaceWith(processTextNode(node));
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.tagName !== "SCRIPT" && node.tagName !== "STYLE") {
            node.childNodes.forEach(processElement);
        }
    }
}

function applyBoldFormatting() {
    let article = document.querySelector("article") || document.body;
    processElement(article);

    // Increase font size for better readability
    //document.body.style.zoom = "133%";
}

// Ensure script runs only on blog pages and after full DOM load
if (isBlogPage()) {
    window.addEventListener("load", applyBoldFormatting);
}
