function shuffle(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function ShuffleArray({ items, children }) {
    const shuffledItems = shuffle(items);
    return children(shuffledItems);
}

export default ShuffleArray;
