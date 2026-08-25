# Workspace Customization Rules - Brahma Kumaris Chiang Mai Web Project

This ruleset preserves the design aesthetics, translation conventions, and technical patterns developed for the Brahma Kumaris Chiang Mai web project. All future agents working in this workspace must adhere strictly to these guidelines.

---

## 1. Typography & Styling Guidelines

* **Headings Font Family**: All headings (`h1, h2, h3, h4`) must use:
  ```css
  font-family: 'Playfair Display', 'Noto Serif Thai', serif;
  ```
* **Body Font Family**: All body text, paragraphs (`p`), list items (`li`), button labels, inline details, and blockquotes must use:
  ```css
  font-family: 'Sarabun', 'Noto Sans Thai', sans-serif;
  ```
  This renders the elegant looped Thai font **Sarabun** across the page.
* **Avoid Tailwind Font Overrides**: Never apply default Tailwind classes like `font-sans` or `font-serif` to container wrappers. Doing so overrides the global CSS font-family definitions, causing Thai text to render in generic system sans-serif instead of **Sarabun**. Always verify that cards, FAQs, and lists inherit the body's font family naturally.

---

## 2. Bilingual Section Headers (Stacked Format)

When adding or modifying section headers (such as *Founding Members* or *Administrative Heads*), follow the stacked layout:
* **Top Subtitle**: Displays the secondary language in small, red-orange uppercase text:
  ```html
  <span class="text-xs font-bold text-[#cc4422] uppercase tracking-widest mb-1.5 block" data-i18n="[key]_sub">[Secondary Text]</span>
  ```
* **Bottom Title**: Displays the primary language in large, dark-blue bold text:
  ```html
  <h2 class="text-2xl font-extrabold text-slate-800 tracking-wide" data-i18n="[key]_main">[Primary Text]</h2>
  ```
* **Bilingual Toggle Sync**: In the translation dictionary, map the keys such that:
  * In Thai mode (`isTh = true`), the main title is Thai and the subtext is English.
  * In English mode (`isTh = false`), the main title is English and the subtext is Thai.

---

## 3. Hindi/Sanskrit Transliteration Standards

When translating Indian names and campuses, use these exact Thai spellings (do not use alternative phonetic spellings):
* **Pandav Bhavan** -> **"พันดาพ บาวัน"** (Do not use "ปานดัพ บาวัน" or "ปานดอฟ บาวัน")
* **Gyan Sarovar** -> **"ญาณ สโรว่าร์"** (Do not use "เกียน สโรเวอร์" or "ชาน สโรเวอร์")
* **Shantivan** -> **"ชานติวัน"**
* **Dadi Gulzar** -> **"ทาดี้ กุลซาร์"** (Mapped to card key `dadi-gulzar`)

---

## 4. Seniors Card & Popup Overlay Logic

* **Relative Paths**: Always specify asset paths as relative (`../assets/...`) to support both the Express dev server and direct local file browsing (`file://` protocol). Do not use root-relative paths (`/assets/...`).
* **Profile Card Images**: Use a pure-CSS absolute overlay:
  ```html
  <div class="relative w-full h-full rounded-full overflow-hidden">
      <!-- Initials in background -->
      <span class="absolute inset-0 flex items-center justify-center font-serif text-[#d4af37]">BB</span>
      <!-- Profile image overlays absolutely -->
      <img src="../assets/images/seniors/..." class="absolute inset-0 w-full h-full object-cover">
  </div>
  ```
  This removes the need for flaky JavaScript image-load toggle classes.
* **Popup Modals**: Ensure `data/seniors-data.js` is declared in `<head>` so `SENIOR_DETAILS` is globally accessible. The popup loader should asynchronously fade in the modal and overlays.

---

## 5. Timeline (Our Journey) & About Us Asset Standards

* **Our Journey Filename Convention**:
  All images for the timeline (Our Journey) must be stored in `assets/images/Our-Journey/` and follow the sequential naming pattern:
  `journey-[01-16]-[short-event-description].[webp/png]` (e.g., `journey-01-simple-jeweler.webp`). This keeps the files ordered and clearly associated with their respective timeline cards.
* **Aspect Ratio & Focal Point**:
  - Timeline images are styled with `w-full h-48 object-cover`. Because they render wide (`~2.25:1`) on desktop and narrower (`~1.5:1`) on mobile, always use a **landscape aspect ratio** (e.g. `16:9` or `3:2`).
  - Keep the primary subject **centered** in the image, as the browser will crop the sides on desktop and the top/bottom on mobile.
* **Resolution & File Size**:
  - Recommended dimensions: **800 x 450 px** to **960 x 540 px** (Max 1200 x 675 px).
  - Use the `.webp` format to keep the compressed file size under **100KB - 150KB** for optimal page load speed.
* **About Us Section Layout**:
  - The About Us (Role of Women) section uses a wider container `max-w-6xl` aligned with the timeline below it.
  - It splits the layout on desktop using a 12-column grid (`lg:grid-cols-12`) with the image column spanning **`lg:col-span-7`** (~58% width) and the text column spanning **`lg:col-span-5`** (~42% width) to give the `Role-of-Women.webp` card an impactful, wider appearance.
* **Workspace Cleanliness**:
  - Do not keep temporary database payload files (`db_payload_*.bin`) or code restoration python scripts (`restore_step_*.py`) in the root directory. Clean them up promptly when the task is complete.

---

## 6. Task & Implementation Plan Completion Notification

* **Explicit Completion Announcement**: Whenever an Implementation Plan, task, or multi-step execution is completed (especially after the user clicks "Proceed" or gives approval), the agent MUST explicitly state:
  > 🎉 **ภารกิจเสร็จสิ้นเรียบร้อย** (Task Completed Successfully)
  followed by a clear summary of all completed changes, tests, and verification results.

---

## 7. Chat UI Troubleshooting - "Failed to fetch" Error

* **Connection Restoration Procedure**: If the user reports or encounters a `Failed to fetch` error when submitting a new message, explain that it is caused by a transient socket disconnect between the web UI and the IDE host daemon. Instruct the user to refresh the chat browser window (`F5` or `Ctrl + R`) to seamlessly re-establish the connection without losing chat history.



