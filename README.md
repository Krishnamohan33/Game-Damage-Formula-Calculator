# Game Damage Formula Calculator

A lightweight browser-based damage calculator designed for game developers.

This tool helps prototype and balance combat systems using critical chance, critical multiplier, and armor resistance formulas.

---

## 🚀 Features

- Base Damage input
- Critical Chance (%)
- Critical Multiplier
- Armor / Resistance scaling
- Real-time instant calculation
- Clean modern UI
- Fully client-side (no backend required)

---

## 🧮 Formula Used

### Expected Damage

ExpectedDamage = BaseDamage × (1 + CritChance × (CritMultiplier - 1))

### Armor Reduction Model

FinalDamage = ExpectedDamage × (100 / (100 + Armor))

This is a commonly used diminishing returns armor formula in RPG systems.

---

## 🎮 Who Is This For?

- Indie Game Developers
- Unity / Unreal developers
- Game design students
- Combat system prototyping
- Balancing early-stage RPG mechanics

---

## 🌐 Live Demo

https://krishnamohan33.github.io/Game-Damage-Formula-Calculator/

---

## 📦 Installation

Clone the repository:

git clone https://github.com/yourusername/Game-Damage-Formula-Calculator.git

Open `index.html` in your browser.

---

## 🧠 Why This Exists

Balancing combat systems often requires quick testing of different stat combinations.

Instead of using spreadsheets, this browser tool provides a fast, visual way to experiment with damage formulas.

---

## 👨‍💻 Author

Built by Krishnamohan Yagneswaran  
Indie Game Developer
