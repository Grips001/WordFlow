// Curated list of common two-word phrases for Word Flow puzzles
const WORD_PAIRS = [
    // Common compound words and phrases
    ['COFFEE', 'BREAK'],
    ['BREAK', 'ROOM'],
    ['ROOM', 'SERVICE'],
    ['SERVICE', 'ELEVATOR'],
    ['BOOK', 'MARK'],
    ['MARK', 'DOWN'],
    ['DOWN', 'TOWN'],
    ['TOWN', 'HALL'],
    ['FIRE', 'PLACE'],
    ['PLACE', 'MAT'],
    ['MAT', 'BOARD'],
    ['BOARD', 'ROOM'],
    ['WATER', 'FALL'],
    ['FALL', 'BACK'],
    ['BACK', 'YARD'],
    ['YARD', 'SALE'],
    ['SALE', 'PRICE'],
    ['PRICE', 'TAG'],
    ['TAG', 'TEAM'],
    ['TEAM', 'WORK'],
    ['WORK', 'SHOP'],
    ['SHOP', 'KEEPER'],
    ['KEEPER', 'GOAL'],
    ['GOAL', 'POST'],
    ['POST', 'OFFICE'],
    ['OFFICE', 'SPACE'],
    ['SPACE', 'SHIP'],
    ['SHIP', 'YARD'],
    ['NIGHT', 'SHIFT'],
    ['SHIFT', 'KEY'],
    ['KEY', 'BOARD'],
    ['BOARD', 'WALK'],
    ['WALK', 'WAY'],
    ['WAY', 'POINT'],
    ['POINT', 'GUARD'],
    ['GUARD', 'RAIL'],
    ['RAIL', 'ROAD'],
    ['ROAD', 'TRIP'],
    ['TRIP', 'WIRE'],
    ['WIRE', 'FRAME'],
    ['FRAME', 'WORK'],
    ['LIGHT', 'HOUSE'],
    ['HOUSE', 'HOLD'],
    ['HOLD', 'UP'],
    ['UP', 'GRADE'],
    ['GRADE', 'SCHOOL'],
    ['SCHOOL', 'YARD'],
    ['PAPER', 'BACK'],
    ['BACK', 'PACK'],
    ['PACK', 'AGE'],
    ['AGE', 'GROUP'],
    ['GROUP', 'CHAT'],
    ['CHAT', 'ROOM'],
    ['TIME', 'ZONE'],
    ['ZONE', 'OUT'],
    ['OUT', 'DOOR'],
    ['DOOR', 'STEP'],
    ['STEP', 'LADDER'],
    ['LADDER', 'BACK'],
    ['HAND', 'SHAKE'],
    ['SHAKE', 'DOWN'],
    ['DOWN', 'LOAD'],
    ['LOAD', 'SCREEN'],
    ['SCREEN', 'TIME'],
    ['TIME', 'STAMP'],
    ['STAMP', 'COLLECTION'],
    ['COLLECTION', 'PLATE'],
    ['PLATE', 'GLASS'],
    ['GLASS', 'HOUSE'],
    ['SIDE', 'WALK'],
    ['WALK', 'THROUGH'],
    ['THROUGH', 'PUT'],
    ['PUT', 'DOWN'],
    ['SNOW', 'BALL'],
    ['BALL', 'PARK'],
    ['PARK', 'BENCH'],
    ['BENCH', 'MARK'],
    ['MARK', 'UP'],
    ['UP', 'TOWN'],
    ['TOWN', 'SQUARE'],
    ['SQUARE', 'DANCE'],
    ['DANCE', 'FLOOR'],
    ['FLOOR', 'PLAN'],
    ['PLAN', 'NET'],
    ['NET', 'WORK'],
    ['FLASH', 'LIGHT'],
    ['LIGHT', 'WEIGHT'],
    ['WEIGHT', 'ROOM'],
    ['ROOM', 'MATE'],
    ['MATE', 'SHIP'],
    ['SHIP', 'WRECK'],
    ['WRECK', 'AGE'],
    ['WIND', 'MILL'],
    ['MILL', 'STONE'],
    ['STONE', 'WALL'],
    ['WALL', 'PAPER'],
    ['PAPER', 'TRAIL'],
    ['TRAIL', 'HEAD'],
    ['HEAD', 'LIGHT'],
    ['LIGHT', 'BULB'],
    ['PLANT', 'POT'],
    ['POT', 'HOLE'],
    ['HOLE', 'PUNCH'],
    ['PUNCH', 'LINE'],
    ['LINE', 'UP'],
    ['SAND', 'BOX'],
    ['BOX', 'OFFICE'],
    ['OFFICE', 'CHAIR'],
    ['CHAIR', 'MAN'],
    ['MAN', 'HOLE'],
    ['HOLE', 'CARD'],
    ['CARD', 'BOARD'],
    ['BOARD', 'GAME'],
    ['GAME', 'SHOW'],
    ['SHOW', 'CASE'],
    ['CASE', 'STUDY'],
    ['STUDY', 'HALL'],
    ['BOW', 'TIE'],
    ['TIE', 'BREAK'],
    ['FAST', 'FOOD'],
    ['FAST', 'TRACK'],
    ['TRACK', 'RECORD'],
    ['RECORD', 'PLAYER'],
    ['PLAYER', 'PIANO'],
    ['FOOD', 'COURT'],
    ['COURT', 'YARD'],
    ['YARD', 'STICK'],
    ['STICK', 'SHIFT'],
    ['SHIFT', 'WORK'],
    ['WORK', 'FORCE'],
    ['FORCE', 'FIELD'],
    ['FIELD', 'TRIP'],

    ['HAMMER', 'HEAD'],
    ['HEAD', 'BAND'],
    ['BAND', 'STAND'],
    ['STAND', 'UP'],
    ['UP', 'SET'],
    ['SET', 'BACK'],
    ['BACK', 'FIRE'],
    ['FIRE', 'WORK'],
    ['WORK', 'OUT'],
    ['OUT', 'PUT'],
    ['PUT', 'BACK'],
    ['BACK', 'BONE'],
    ['BONE', 'HEAD'],
    ['HEAD', 'MASTER'],
    ['MASTER', 'PIECE'],
    ['PIECE', 'WORK'],
    ['MEAL', 'PLAN'],
    ['PLAN', 'AHEAD'],
    ['AHEAD', 'START'],
    ['START', 'UP'],
    ['TIME', 'OUT'],
    ['OUT', 'REACH'],
    ['REACH', 'AROUND'],
    ['AROUND', 'TOWN'],
    
    // Additional quality pairs
    ['BLUE', 'PRINT'],
    ['PRINT', 'SHOP'],
    ['SHOP', 'TALK'],
    ['TALK', 'SHOW'],
    ['SHOW', 'BOAT'],
    ['BOAT', 'HOUSE'],
    ['HOUSE', 'PARTY'],
    ['PARTY', 'LINE'],
    ['LINE', 'DANCE'],
    ['DANCE', 'PARTY'],
    
    ['GOLD', 'RUSH'],
    ['RUSH', 'HOUR'],
    ['HOUR', 'GLASS'],
    ['GLASS', 'DOOR'],
    ['DOOR', 'BELL'],
    ['BELL', 'TOWER'],
    ['TOWER', 'BRIDGE'],
    ['BRIDGE', 'WORK'],
    
    ['MOON', 'LIGHT'],
    ['LIGHT', 'SHOW'],
    ['SHOW', 'ROOM'],
    ['ROOM', 'TEMPERATURE'],
    ['TEMPERATURE', 'CONTROL'],
    ['CONTROL', 'PANEL'],
    ['PANEL', 'DISCUSSION'],
    
    ['STAR', 'LIGHT'],
    ['LIGHT', 'SWITCH'],
    ['SWITCH', 'BOARD'],
    ['BOARD', 'MEETING'],
    ['MEETING', 'ROOM'],
    
    ['POWER', 'HOUSE'],
    ['HOUSE', 'WORK'],
    ['WORK', 'PLACE'],
    ['PLACE', 'SETTING'],
    ['SETTING', 'SUN'],
    ['SUN', 'LIGHT'],
    
    ['SPRING', 'BREAK'],
    ['BREAK', 'DANCE'],
    ['DANCE', 'FLOOR'],
    ['FLOOR', 'SHOW'],
    
    ['SUMMER', 'CAMP'],
    ['CAMP', 'FIRE'],
    ['FIRE', 'DRILL'],
    ['DRILL', 'PRESS'],
    ['PRESS', 'ROOM'],
    
    ['WINTER', 'COAT'],
    ['COAT', 'HANGER'],
    ['HANGER', 'DECK'],
    ['DECK', 'CHAIR'],
    ['CHAIR', 'LIFT'],
    ['LIFT', 'OFF'],
    ['OFF', 'ROAD'],
    
    ['FALL', 'SEASON'],
    ['SEASON', 'PASS'],
    ['PASS', 'WORD'],
    ['WORD', 'PLAY'],
    ['PLAY', 'GROUND'],
    ['GROUND', 'FLOOR'],
    
    ['SCHOOL', 'BUS'],
    ['BUS', 'STOP'],
    ['STOP', 'SIGN'],
    ['SIGN', 'POST'],
    ['POST', 'CARD'],
    ['CARD', 'GAME'],
    
    ['MUSIC', 'BOX'],
    ['BOX', 'SEAT'],
    ['SEAT', 'BELT'],
    ['BELT', 'LOOP'],
    ['LOOP', 'BACK'],
    
    ['PHONE', 'BOOK'],
    ['BOOK', 'CASE'],
    ['CASE', 'WORK'],
    ['WORK', 'BENCH'],
    ['BENCH', 'PRESS'],
    
    ['RADIO', 'WAVE'],
    ['WAVE', 'LENGTH'],
    ['LENGTH', 'WISE'],
    ['WISE', 'CRACK'],
    ['CRACK', 'DOWN'],
    
    ['VIDEO', 'GAME'],
    ['GAME', 'PLAN'],
    ['PLAN', 'AHEAD'],
    
    ['PHOTO', 'SHOOT'],
    ['SHOOT', 'OUT'],
    ['OUT', 'HOUSE'],
    ['HOUSE', 'GUEST'],
    ['GUEST', 'ROOM']
];

// Create a map for quick lookup of connections
const WORD_CONNECTIONS = new Map();

// Build the connection map
WORD_PAIRS.forEach(([first, second]) => {
    if (!WORD_CONNECTIONS.has(first)) {
        WORD_CONNECTIONS.set(first, new Set());
    }
    if (!WORD_CONNECTIONS.has(second)) {
        WORD_CONNECTIONS.set(second, new Set());
    }
    
    WORD_CONNECTIONS.get(first).add(second);
    WORD_CONNECTIONS.get(second).add(first);
});

class PuzzleGenerator {
    constructor() {
        this.usedPuzzles = new Set();
        // Pre-validated puzzle chains that we know work perfectly
        this.validChains = [
            ['COFFEE', 'BREAK', 'ROOM', 'SERVICE', 'ELEVATOR'],
            ['BOOK', 'MARK', 'DOWN', 'TOWN', 'HALL'],
            ['FIRE', 'PLACE', 'MAT', 'BOARD', 'ROOM'],
            ['WATER', 'FALL', 'BACK', 'YARD', 'SALE'],
            ['NIGHT', 'SHIFT', 'KEY', 'BOARD', 'GAME'],
            ['PAPER', 'BACK', 'PACK', 'AGE', 'GROUP'],
            ['SNOW', 'BALL', 'PARK', 'BENCH', 'MARK'],
            ['FLASH', 'LIGHT', 'HOUSE', 'HOLD', 'UP'],
            ['WIND', 'MILL', 'STONE', 'WALL', 'PAPER'],
            ['SAND', 'BOX', 'OFFICE', 'CHAIR', 'MAN'],

            ['GOLD', 'RUSH', 'HOUR', 'GLASS', 'DOOR'],
            ['BLUE', 'PRINT', 'SHOP', 'TALK', 'SHOW'],
            ['SPRING', 'BREAK', 'DANCE', 'FLOOR', 'PLAN'],
            ['SCHOOL', 'BUS', 'STOP', 'SIGN', 'POST'],
            ['MUSIC', 'BOX', 'SEAT', 'BELT', 'LOOP'],
            ['PHONE', 'BOOK', 'CASE', 'WORK', 'SHOP'],
            ['VIDEO', 'GAME', 'PLAN', 'AHEAD', 'START'],
            ['POWER', 'HOUSE', 'WORK', 'PLACE', 'MAT'],
            ['SUMMER', 'CAMP', 'FIRE', 'DRILL', 'PRESS'],
            ['WINTER', 'COAT', 'HANGER', 'DECK', 'CHAIR'],
            ['RADIO', 'WAVE', 'LENGTH', 'WISE', 'CRACK'],
            ['PHOTO', 'SHOOT', 'OUT', 'DOOR', 'STEP'],
            ['MOON', 'LIGHT', 'SWITCH', 'BOARD', 'WALK'],
            ['STAR', 'LIGHT', 'WEIGHT', 'ROOM', 'MATE'],
            ['HAND', 'SHAKE', 'DOWN', 'LOAD', 'SCREEN'],
            ['TIME', 'ZONE', 'OUT', 'DOOR', 'STEP'],
            ['GOAL', 'POST', 'OFFICE', 'SPACE', 'SHIP'],
            ['YARD', 'SALE', 'PRICE', 'TAG', 'TEAM'],
            ['TRAIL', 'HEAD', 'LIGHT', 'BULB', 'PLANT'],
            ['SIDE', 'WALK', 'WAY', 'POINT', 'GUARD']
        ];
    }
    
    // Generate a puzzle by selecting from pre-validated chains
    generatePuzzle(targetLength = 5) {
        // Filter chains by target length
        const validChains = this.validChains.filter(chain => chain.length === targetLength);
        
        if (validChains.length === 0) {
            return this.getFallbackPuzzle();
        }
        
        // Try to find an unused chain
        let attempts = 0;
        while (attempts < validChains.length * 2) {
            attempts++;
            const randomChain = validChains[Math.floor(Math.random() * validChains.length)];
            const puzzleKey = randomChain.join('-');
            
            if (!this.usedPuzzles.has(puzzleKey)) {
                this.usedPuzzles.add(puzzleKey);
                return {
                    chain: [...randomChain],
                    phrases: this.getPhrasesFromChain(randomChain)
                };
            }
        }
        
        // If all chains have been used, reset and pick one
        this.usedPuzzles.clear();
        const randomChain = validChains[Math.floor(Math.random() * validChains.length)];
        return {
            chain: [...randomChain],
            phrases: this.getPhrasesFromChain(randomChain)
        };
    }
    
    // Validate that all adjacent pairs in the chain are legitimate phrases
    validateChain(chain) {
        for (let i = 0; i < chain.length - 1; i++) {
            const pair = [chain[i], chain[i + 1]];
            const reversePair = [chain[i + 1], chain[i]];
            
            // Check if this exact pair exists in our curated list
            const pairExists = WORD_PAIRS.some(([first, second]) => 
                (first === pair[0] && second === pair[1]) ||
                (first === reversePair[0] && second === reversePair[1])
            );
            
            if (!pairExists) {
                return false;
            }
        }
        return true;
    }
    
    // Build a chain using depth-first search
    buildChain(startWord, targetLength, visited = new Set()) {
        if (visited.size === targetLength) {
            return Array.from(visited);
        }
        
        visited.add(startWord);
        
        const connections = WORD_CONNECTIONS.get(startWord);
        if (!connections) {
            visited.delete(startWord);
            return null;
        }
        
        // Shuffle connections for randomness
        const shuffledConnections = Array.from(connections).sort(() => Math.random() - 0.5);
        
        for (const nextWord of shuffledConnections) {
            if (!visited.has(nextWord)) {
                const result = this.buildChain(nextWord, targetLength, visited);
                if (result) {
                    return result;
                }
            }
        }
        
        visited.delete(startWord);
        return null;
    }
    
    // Convert chain to phrase pairs for validation
    getPhrasesFromChain(chain) {
        const phrases = [];
        for (let i = 0; i < chain.length - 1; i++) {
            phrases.push([chain[i], chain[i + 1]]);
        }
        return phrases;
    }
    
    // Fallback puzzles that we know work well
    getFallbackPuzzle() {
        const fallbacks = [
            {
                chain: ['COFFEE', 'BREAK', 'ROOM', 'SERVICE', 'ELEVATOR'],
                phrases: [
                    ['COFFEE', 'BREAK'],
                    ['BREAK', 'ROOM'],
                    ['ROOM', 'SERVICE'],
                    ['SERVICE', 'ELEVATOR']
                ]
            },
            {
                chain: ['BOOK', 'MARK', 'DOWN', 'TOWN', 'HALL'],
                phrases: [
                    ['BOOK', 'MARK'],
                    ['MARK', 'DOWN'],
                    ['DOWN', 'TOWN'],
                    ['TOWN', 'HALL']
                ]
            }
        ];
        
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
    
    // Reset used puzzles (for new game sessions)
    reset() {
        this.usedPuzzles.clear();
    }
}

// Export for use in main game
window.PuzzleGenerator = PuzzleGenerator;