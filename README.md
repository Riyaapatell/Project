# Project
IHWP_Project
# 🌿 **Ayurvedic Prakriti Self-Assessment Quiz**

### *Discover your inner balance — the ancient way, powered by modern web magic* ✨

An immersive, animated web experience built with **React** and **Framer Motion** to help you explore your **Ayurvedic constitution (Prakriti)** — your unique blend of **Vata, Pitta, and Kapha** energies.

---

## 🪷 **Overview**

Every person is a harmony of the three Doshas — **Vata** (Air & Space), **Pitta** (Fire & Water), and **Kapha** (Earth & Water).
This quiz helps you uncover which Dosha dominates your mind and body through a **16-question self-assessment**, crafted around physical traits, emotional patterns, daily habits, and environmental preferences.

At the end, you’ll receive a **personalized result** with lifestyle insights and practical recommendations to help you maintain balance — all wrapped in a **beautifully animated, intuitive interface.**

---

## ✨ **Key Features**

### 🎯 **Interactive Quiz Journey**

* **4 Progressive Sections** — explore your nature step-by-step
* **Framer Motion Animations** — fluid slide transitions and gentle fades
* **Progress Tracking** — animated bar + visual section indicators
* **Fully Responsive** — seamless experience on phones, tablets, and desktops

### 🌞 **Comprehensive Assessment**

* 16 thoughtfully designed questions across 4 categories:

  * **Physical Traits** — body frame, skin, hair, appetite
  * **Mind & Emotions** — learning style, stress response, decision-making
  * **Lifestyle Patterns** — sleep, energy, activity, and habits
  * **Environmental Reactions** — climate comfort, temperature, stamina

### 🌈 **Detailed, Personalized Results**

* 🔹 **Dosha Distribution** — see your Vata, Pitta & Kapha balance in percentages
* 🔸 **Dominant Constitution** — your Prakriti revealed with elemental symbolism
* 🔹 **Personality & Body Traits** — a detailed breakdown of your unique type
* 🔸 **Lifestyle Wisdom** — tailored diet, exercise, and daily routine suggestions
* 💾 **Downloadable Report** — save your results as a beautifully formatted text file

---

## 🎨 **Visual Design Philosophy**

* **Soft gradients** and **glowing elements** for a serene atmosphere
* **Dosha Color Themes**:

  * 💜 *Vata* → Purple & Silver mist tones
  * 🔶 *Pitta* → Amber & Fiery Orange glow
  * 💚 *Kapha* → Green & Earthy calm hues
* **Emoji icons** and **subtle hover animations** add a playful, human touch

---

## ⚙️ **Technical Stack**

### **Core Technologies**

* ⚛️ React (with Hooks + stateful components)
* 🎬 Framer Motion for interactive animations
* 🎨 Tailwind CSS utility classes for fast styling
* 💻 JavaScript (ES6+)

### **App Architecture**

* Single-page design (SPA) with conditional rendering
* Centralized state for quiz progress & scoring
* Dynamic transitions with animation variants
* Efficient rendering and lightweight performance

---

## 🚀 **Installation & Setup**

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project folder
cd ayurveda-prakriti-quiz

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` (or as shown in console) to begin your self-discovery journey 🌺

---

## 🌼 **How to Use**

1. Read each question carefully
2. Select the option that describes you best
3. Navigate between steps with **Next / Previous**
4. Finish all 16 questions to reveal your **Prakriti profile**

### 🌟 **Understanding Your Dosha**

* **Vata (Air + Space):** Creative, energetic, quick-thinking
* **Pitta (Fire + Water):** Focused, ambitious, intelligent
* **Kapha (Earth + Water):** Calm, compassionate, grounded

### 💾 **Save Your Insights**

Click **“Save Results”** to download your personal Ayurvedic analysis — including dosha percentages, traits, and lifestyle tips.

---

## 🧠 **Code Highlights**

### **Main State Variables**

* `currentStep` → tracks quiz progress
* `answers` → stores user responses
* `showResults` → toggles between quiz & results views
* `slideDirection` → controls animation flow

### **Core Data Structures**

* `quizData` → 16 questions grouped by theme
* `doshaInfo` → detailed info about each constitution

### **Utility Functions**

* `handleAnswer()` → records selections
* `calculateResults()` → computes dosha percentages
* `saveResults()` → exports a downloadable report
* `resetQuiz()` → clears data for a fresh start

---

## 🧩 **Customization Guide**

* 📝 **To edit questions:** Update the `quizData` object with your own content.
* 🎨 **To change colors:** Modify gradient backgrounds and button palettes.
* ⏱️ **To tweak animations:** Adjust Framer Motion duration & delay properties.

---

## 🌍 **Browser Compatibility**

Compatible with all modern browsers supporting ES6 and CSS3:

* Chrome ≥ 90
* Firefox ≥ 88
* Safari ≥ 14
* Edge ≥ 90

---

## ⚡ **Performance Optimization**

* GPU-accelerated motion for smooth transitions
* Conditional rendering to minimize re-renders
* Optimized state updates for speed and stability
* No heavy dependencies or API calls

---

## 🔮 **Planned Enhancements**

* 🌐 Multi-language support (English, Hindi, Sanskrit)
* 🧘 Dosha balancing tracker & daily tips
* 📧 Email result sharing
* 🥗 Ayurvedic food & lifestyle database integration
* * 🌿 Social sharing for results
* 🪩 Optional dark mode

---

## 🕉️ **Credits**

Inspired by timeless **Ayurvedic wisdom** and **Prakriti analysis** from classical texts.
Crafted with love, code, and consciousness — bringing ancient knowledge into the digital age.

> *"Balance is not something you find; it’s something you create."* 🌺
