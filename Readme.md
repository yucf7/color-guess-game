# 🎨 RGB Color Guessing Game  

A visually striking, **premium-feel** color guessing game built with **React Native & Expo**.  
Match the correct color based on the displayed RGB value, track your score, unlock higher difficulties, and enjoy smooth animations with stunning neon visuals.  

![Game Preview](./assets/screenshots/preview.png)  

---

## 🚀 Features  

### 🎮 **Gameplay**  
- Guess the correct color from an RGB code (e.g., `rgb(120, 45, 200)`).  
- Score tracking with **confetti celebration** for correct answers.  
- **Difficulty levels**:  
  - **Easy**: 3 color swatches  
  - **Medium**: 6 color swatches  
  - **Hard**: Mix of RGB & HEX codes  
- **Accessibility mode**: Symbols on swatches for colorblind users.  

### 🎨 **Visual Design**  
- **Dark mode UI** with vibrant neon accents.  
- **Smooth animations** powered by Reanimated 2.  
- Dynamic background shifts between rounds.  
- Pulse effects for correct/incorrect guesses.  
- **Custom typography**: JetBrains Mono for RGB codes.  

### ⚙️ **Extras**  
- **Settings screen**: Toggle sound, adjust difficulty, reset scores.  
- **Share high scores** as an image (via `react-native-view-shot`).  
- **Fully responsive** and accessibility-friendly.  

---

## 🧰 **Tech Stack**  
- **Framework**: React Native + Expo  
- **State Management**: Zustand  
- **Animations**: Reanimated 2, Lottie (confetti)  
- **Styling**: `styled-components`  
- **Screenshot Sharing**: `react-native-view-shot`  
- **Font**: JetBrains Mono (Google Fonts)  

---

## 📸 **Screenshots**  
| Gameplay | Settings | Celebration |  
|----------|----------|-------------|  
| <img src="./assets/screenshots/gameplay.png" width="220" /> | <img src="./assets/screenshots/settings.png" width="220" /> | <img src="./assets/screenshots/confetti.png" width="220" /> |  

---

## 🛠️ **Installation**  

1. **Clone the repository**  
   ```bash  
   git clone https://github.com/yourusername/rgb-color-guessing-game.git  
   cd rgb-color-guessing-game  
   ```

2. **Install dependencies**  
   ```bash  
   npm install  
   ```

3. **Run the app**  
   ```bash  
   npx expo start  
   ```

4. **Build for iOS**  
   ```bash  
   npx expo run:ios  
   ```

5. **Build for Android**  
   ```bash  
   npx expo run:android  
   ```

🧪 **Testing**  
Manually tested on iOS & Android with performance checks.

📂 **Project Structure**  
```bash	
src/  
├── components/  # Reusable UI components  
├── screens/     # App screens (Game, Settings)  
├── store/       # Zustand state logic  
├── assets/      # Images, fonts, etc.  
├── utils/       # Helper functions  
└── App.tsx      # Main entry point  
```
🤝 **Contributing**  
Feel free to submit issues and pull requests.

📄 **License**  
MIT

✨ **Credits**  
Built with ❤️ using React Native & Expo
Neon UI inspired by arcade aesthetics
Fonts by Google Fonts

Enjoy the game and test your RGB vision! 🎯🎨



## 📸 **Screenshots**  
| Gameplay | Settings | Gameplay 2 |  
|----------|----------|-------------|  
| <img src="https://i.ibb.co/bjtg55XJ/Capture-d-cran-2025-04-16-180429.png" width="220" /> | <img src="https://i.ibb.co/WWMrJqSj/Capture-d-cran-2025-04-16-180444.png" width="220" /> | <img src="https://i.ibb.co/0ysH6wWf/Capture-d-cran-2025-04-16-180513.png" width="220" /> |  
