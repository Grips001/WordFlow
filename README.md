# Word Flow

A challenging HTML5 word puzzle game where players connect words by filling in missing links to create chains of two-word phrases.

## 🎮 How to Play

### Goal

Fill in the missing words to create a smooth chain of two-word phrases that connects the **top word** to the **bottom word**.

### Game Rules

1. **Starting Position**: Each puzzle begins with a top word and bottom word already revealed
2. **Valid Moves**: You can only select blanks that are directly adjacent to already-solved words
3. **Letter Reveals**: When you click a blank, the first letter is automatically revealed
4. **Guessing**: Type your complete word guess and press Enter or click Submit
5. **Progression**: Correct guesses unlock adjacent blanks, building the chain inward from both ends
6. **Wrong Guesses**: Incorrect answers reveal the next letter (with a small score penalty)

### Example Puzzle

```text
COFFEE
  ↓
BREAK  (Coffee Break)
  ↓
ROOM   (Break Room)
  ↓
SERVICE (Room Service)
  ↓
ELEVATOR (Service Elevator)
```

## 🚀 Features

- **Dynamic Puzzle Generation**: 25+ hand-curated puzzle chains ensure quality gameplay
- **Smart Validation**: Only legitimate two-word phrases are used
- **Progressive Difficulty**: Letter reveals provide strategic hints
- **Responsive Design**: Works on desktop and mobile devices
- **Score System**: Rewards efficient solving with fewer hints
- **Visual Feedback**: Clear indicators for correct/incorrect guesses

## 🛠️ Technical Details

### Files Structure

```text
word-flow/
├── index.html          # Main game interface
├── styles.css          # Game styling and responsive design
├── game.js            # Core game logic and mechanics
├── word-pairs.js      # Puzzle generation and word database
└── README.md          # This file
```

### Technologies Used

- **HTML5**: Semantic markup and game structure
- **CSS3**: Modern styling with flexbox and animations
- **Vanilla JavaScript**: No dependencies, pure ES6+ code
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox

### Key Components

## **PuzzleGenerator Class**

- Manages 25+ pre-validated word chains
- Ensures all connections are legitimate two-word phrases
- Tracks used puzzles to avoid immediate repeats

## **WordFlowGame Class**

- Handles game state and user interactions
- Manages scoring and hint system
- Controls puzzle progression and validation

## **Word Database**

- 200+ curated two-word phrases
- Examples: "COFFEE BREAK", "ROOM SERVICE", "GOAL POST"
- Excludes compound words typically written as one word

## 🎯 Game Examples

**Easy Chain**: `BOOK → MARK → DOWN → TOWN → HALL`

- Book Mark, Mark Down, Down Town, Town Hall

**Medium Chain**: `GOLD → RUSH → HOUR → GLASS → DOOR`

- Gold Rush, Rush Hour, Hour Glass, Glass Door

**Challenging Chain**: `SUMMER → CAMP → FIRE → DRILL → PRESS`

- Summer Camp, Camp Fire, Fire Drill, Drill Press

## 🏆 Scoring System

- **Starting Score**: 100 points
- **Correct Answer**: +10-20 points (more for fewer hints used)
- **Letter Reveal**: -5 points per additional letter
- **Strategy**: Balance between guessing quickly and using hints wisely

## 🎨 Design Philosophy

- **Clean Interface**: Minimal distractions, focus on gameplay
- **Intuitive Controls**: Click to select, type to guess
- **Visual Hierarchy**: Clear distinction between fixed, solved, and active words
- **Accessibility**: High contrast colors and readable fonts
- **Mobile-Friendly**: Touch-optimized for smartphones and tablets

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in any modern web browser
3. **Start Playing** - no installation or setup required!

### Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🔧 Development

### Adding New Puzzles

Edit `word-pairs.js` and add new chains to the `validChains` array:

```javascript
['WORD1', 'WORD2', 'WORD3', 'WORD4', 'WORD5']
```

### Customizing Difficulty

Modify the scoring system in `game.js`:

```javascript
// Adjust starting score
this.score = 100;

// Modify point rewards/penalties
this.score += Math.max(10, 20 - item.revealedLetters * 2);
```

### Styling Changes

Update `styles.css` to customize:

- Color schemes
- Animations
- Layout and spacing
- Mobile responsiveness

## 📝 Game Design Notes

### Quality Assurance

- All word pairs are manually verified as legitimate phrases
- No compound words that should be written as one word
- Consistent difficulty progression across puzzles
- Extensive testing on multiple devices and browsers

### User Experience

- Automatic letter reveals eliminate guesswork frustration
- Strategic hint system rewards thoughtful play
- Clear visual feedback for all game states
- Responsive design ensures consistent experience across devices

## 🎉 Credits

Developed as a modern take on classic word chain puzzles, combining strategic thinking with vocabulary knowledge. Perfect for word game enthusiasts and casual players alike!

---

**Enjoy playing Word Flow!** 🌟
