const cards = [1, 2, 3, 4, 5, 6, 7];

cards.forEach(card => {
    const el = document.getElementById(`card${card}`);
    console.log(`card${card}`);
    document.getElementById(`card${card}`).zIndex = card;
})