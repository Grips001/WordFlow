class WordFlowGame {
    constructor() {
        this.puzzleGenerator = new PuzzleGenerator();
        this.currentPuzzle = null;
        this.gameState = [];
        this.selectedIndex = -1;
        this.score = 0;
        
        this.initializeElements();
        this.bindEvents();
        this.startNewGame();
    }
    
    initializeElements() {
        this.wordChain = document.getElementById('word-chain');
        this.scoreElement = document.getElementById('score');
        this.currentWordElement = document.getElementById('current-word');
        this.winMessage = document.getElementById('win-message');
        this.playAgainBtn = document.getElementById('play-again-btn');
        this.inputSection = document.getElementById('input-section');
        this.wordGuessInput = document.getElementById('word-guess');
        this.submitGuessBtn = document.getElementById('submit-guess');
    }
    
    bindEvents() {
        this.playAgainBtn.addEventListener('click', () => {
            this.hideWinMessage();
            this.startNewGame();
        });
        
        this.submitGuessBtn.addEventListener('click', () => this.submitGuess());
        this.wordGuessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitGuess();
            }
        });
        
        this.wordGuessInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase();
        });
    }
    
    startNewGame() {
        // Generate a new puzzle dynamically
        this.currentPuzzle = this.puzzleGenerator.generatePuzzle(5);
        this.gameState = this.currentPuzzle.chain.map((word, index) => ({
            word: word,
            isFixed: index === 0 || index === this.currentPuzzle.chain.length - 1,
            isSolved: index === 0 || index === this.currentPuzzle.chain.length - 1,
            userInput: '',
            revealedLetters: 0
        }));
        
        this.selectedIndex = -1;
        this.score = 100;
        this.hideInputSection();
        this.updateDisplay();
        this.renderWordChain();
    }
    
    renderWordChain() {
        this.wordChain.innerHTML = '';
        
        this.gameState.forEach((item, index) => {
            const wordDiv = document.createElement('div');
            wordDiv.className = 'word-item';
            
            if (item.isFixed) {
                wordDiv.className += ' fixed';
                wordDiv.textContent = item.word;
            } else if (item.isSolved) {
                wordDiv.className += ' solved';
                wordDiv.textContent = item.word;
            } else {
                wordDiv.className += ' blank';
                if (this.selectedIndex === index) {
                    wordDiv.className += ' selected';
                }
                
                // Show revealed letters or placeholder
                if (item.revealedLetters > 0) {
                    const revealed = item.word.substring(0, item.revealedLetters);
                    const hidden = '_'.repeat(item.word.length - item.revealedLetters);
                    wordDiv.innerHTML = `<span class="hint-text">${revealed}${hidden}</span>`;
                } else {
                    wordDiv.textContent = 'Click to select';
                }
                
                wordDiv.addEventListener('click', () => this.selectWord(index));
            }
            
            this.wordChain.appendChild(wordDiv);
        });
    }
    
    showInputSection() {
        this.inputSection.classList.remove('hidden');
        this.wordGuessInput.value = '';
        this.wordGuessInput.focus();
    }
    
    hideInputSection() {
        this.inputSection.classList.add('hidden');
        this.selectedIndex = -1;
    }
    
    selectWord(index) {
        const item = this.gameState[index];
        if (item.isFixed || item.isSolved) return;
        
        // Check if this is a valid selection (adjacent to solved words)
        if (!this.isValidSelection(index)) return;
        
        this.selectedIndex = index;
        
        // Automatically reveal first letter when selecting a new word
        if (item.revealedLetters === 0) {
            item.revealedLetters = 1;
        }
        
        this.showInputSection();
        this.renderWordChain();
        this.updateDisplay();
    }
    
    isValidSelection(index) {
        // Can select if it's adjacent to a solved word
        const prevSolved = index > 0 && this.gameState[index - 1].isSolved;
        const nextSolved = index < this.gameState.length - 1 && this.gameState[index + 1].isSolved;
        return prevSolved || nextSolved;
    }
    
    submitGuess() {
        if (this.selectedIndex === -1) return;
        
        const guess = this.wordGuessInput.value.trim().toUpperCase();
        const item = this.gameState[this.selectedIndex];
        
        if (guess === item.word) {
            // Correct guess!
            item.isSolved = true;
            this.score += Math.max(10, 20 - item.revealedLetters * 2);
            this.hideInputSection();
            this.renderWordChain();
            this.updateDisplay();
            
            // Show success feedback
            this.showFeedback('Correct!', 'success');
            
            if (this.isGameComplete()) {
                setTimeout(() => this.showWinMessage(), 1000);
            }
        } else {
            // Wrong guess - reveal another letter if possible
            if (item.revealedLetters < item.word.length) {
                item.revealedLetters++;
                this.score = Math.max(0, this.score - 5);
                this.wordGuessInput.value = '';
                this.renderWordChain();
                this.updateDisplay();
                this.showFeedback('Try again!', 'error');
            } else {
                this.showFeedback('All letters revealed!', 'warning');
            }
        }
    }
    
    showFeedback(message, type) {
        // Create temporary feedback element
        const feedback = document.createElement('div');
        feedback.textContent = message;
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 15px 30px;
            border-radius: 10px;
            font-weight: bold;
            font-size: 1.2em;
            z-index: 1000;
            animation: fadeInOut 1.5s ease-in-out;
        `;
        
        if (type === 'success') {
            feedback.style.background = '#28a745';
            feedback.style.color = 'white';
        } else if (type === 'error') {
            feedback.style.background = '#dc3545';
            feedback.style.color = 'white';
        } else {
            feedback.style.background = '#ffc107';
            feedback.style.color = '#333';
        }
        
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 1500);
    }
    
    isGameComplete() {
        return this.gameState.every(item => item.isSolved);
    }
    
    showWinMessage() {
        this.winMessage.classList.remove('hidden');
    }
    
    hideWinMessage() {
        this.winMessage.classList.add('hidden');
    }
    
    updateDisplay() {
        this.scoreElement.textContent = this.score;
        
        if (this.selectedIndex >= 0) {
            const item = this.gameState[this.selectedIndex];
            const revealed = item.word.substring(0, item.revealedLetters);
            const hidden = '_'.repeat(item.word.length - item.revealedLetters);
            this.currentWordElement.textContent = `${revealed}${hidden} (${item.word.length} letters)`;
        } else {
            this.currentWordElement.textContent = 'Select a blank to start';
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WordFlowGame();
});