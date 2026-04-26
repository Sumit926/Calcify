# Calculator

A clean, responsive calculator built with vanilla HTML, CSS, and JavaScript. Supports basic arithmetic, keyboard input, dark/light mode, and persistent history via localStorage.

---

## Features

- **Basic arithmetic** — addition, subtraction, multiplication, division, and percentage
- **Keyboard support** — use your numpad or keyboard to type expressions
- **History panel** — every calculation is saved to the side panel and persists across sessions via localStorage
- **Dark / Light mode** — toggles with your preference saved to localStorage
- **Responsive** — works on mobile and desktop. On desktop, the history panel is always visible alongside the calculator
- **Smart input handling** — consecutive operators get replaced instead of stacked, and incomplete expressions (like `34+`) are cleaned up before evaluating

---

## Project Structure

```
├── index.html      # Markup and button layout
├── style.css       # Styling, theming, and responsive layout
└── app.js          # All calculator logic
```

---

## How to Run

No build tools or dependencies needed. Just open `index.html` in your browser.

```bash
# If you have VS Code with Live Server
Right click index.html → Open with Live Server

# Or just double click index.html to open it directly in your browser
```

---

## Keyboard Shortcuts

| Key | Action |
|---|---|
| `0 – 9` | Input digit |
| `+ - * /` | Operators |
| `Enter` | Calculate |
| `Backspace` | Delete last character |
| `Delete` | Clear all |
| `.` | Decimal point |

---

## Known Limitations

- No support for parentheses `( )` in expressions
- No scientific functions (sin, cos, log, etc.) yet
- Expression history shows only the equation, not the result alongside it

---

## Future Updates

- [ ] **Scientific mode** — sin, cos, tan, log, square root, power, factorial (buttons are already stubbed out in the HTML, just commented)
- [ ] **Parentheses support** — allow grouped expressions like `(3 + 4) * 2`
- [ ] **Clickable history** — click any past expression in the history panel to load it back into the display
- [ ] **Result in history** — store `5 + 3 = 8` instead of just `5 + 3`
- [ ] **Max digit limit** — cap input length so the display never overflows
- [ ] **Decimal guard** — prevent typing two decimal points in the same number
- [ ] **Result formatting** — format large numbers with commas (`1,000,000`) and round floating-point noise (`0.1 + 0.2 = 0.3` instead of `0.30000000000000004`)
- [ ] **Swipe to close** — swipe gesture to dismiss the history panel on mobile
- [ ] **Clear history button** — a trash icon in the history panel header to wipe all saved history

---

## Built With

- HTML5
- CSS3 (CSS variables, Grid, Flexbox)
- Vanilla JavaScript (no frameworks)
- [Remix Icon](https://remixicon.com/) for icons

---

## Author

Made by [Sumit](https://github.com/Sumit926)
