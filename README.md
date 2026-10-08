# Reading List — Advanced Introduction into ADP

Reading list for the course *Advanced Introduction into ADP*, WS 25/26, Christopher Gruber.

**Live:** https://adpchrgruber.github.io/adp_adv_reading_list/

## Use

- **Category · Timeline · A–Z** — three ways to sort the 63 titles; Timeline groups them by decade.
- **Search** — author, title, publisher or year (press `/` to jump to the field).
- **Category links** — filter to one or more categories.
- **My list** — mark texts of interest with the square next to a title. Copy the list or print it / save it as PDF — both as a bibliography in Chicago style (18th ed.), sorted by author. The list is stored only in your own browser.
- **Search library** — each entry links to a search for it in the Academy library catalogue (Summon), limited to the library’s own holdings.
- **Dark / Light** — switch in the top right corner.

Views can be shared as links, e.g. `…/#sort=timeline&cat=7` (category numbers start at 0).

## Editing the list

All entries live in [`readings.js`](readings.js). Each title has an author (`a`), title (`t`), publisher (`p`), year (`y`), and optionally `url` and `kind: "article"`. Add or change entries there; `index.html` does not need to be touched.

Plain HTML, CSS and JavaScript — no build step, no dependencies.
