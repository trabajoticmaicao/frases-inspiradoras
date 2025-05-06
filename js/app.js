const quotes = [
    "La vida es 10% lo que me ocurre y 90% cómo reacciono."
];

const list = document.getElementById('quote-list');
quotes.forEach(q => {
    const li = document.createElement('li');
    li.textContent = q;
    list.appendChild(li);
});
