# 📖 Chrome Extension: Blog Read Mode with Bold Formatting

![Extension Icon](icons/icon48.png)

## 📝 Overview
This Chrome extension enhances the readability of blog articles by:
- Automatically detecting blog pages.
- Converting them into a read-friendly format.
- Making the first half of each word bold (excluding prepositions).
- Increasing font size or page zoom for better readability.

## 🚀 Features
- **Auto-detection of blogs** based on article tags and metadata.
- **Text processing** that makes the first half of each word bold while keeping prepositions unchanged.
- **Custom styling** to improve readability without altering the website’s original layout.

## 📦 Installation
### Manual Installation (for Development or Personal Use)
1. Download the repository as a ZIP or clone it:
   ```sh
   git clone https://github.com/t-veera/speedReader.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (top right corner).
4. Click **Load unpacked** and select the extracted folder.
5. The extension should now be active.

## 🛠️ Usage
- Simply visit any blog or article, and the formatting will apply automatically.
- Adjust settings if needed from the extension’s popup (to be added in future versions).

## 📂 File Structure
```
blog-read-mode-extension/
├── manifest.json       # Chrome extension manifest
├── content.js          # Main script that processes blog pages
├── icon.png            # Extension icon
└── README.md           # This file
```

## 🌟 Future Enhancements
- A popup UI for customization.
- Support for dark mode readability.
- Adjustable bold formatting for different reading preferences.

## 🏆 Contributions
Feel free to fork, contribute, or submit issues!

## 📜 License
This project is licensed under the MIT License.

---
🔹 Created by [Twisha](https://github.com/t-veera)

