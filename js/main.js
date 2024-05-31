// script.js
document.getElementById('openModalButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('closeModalButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const whatsappUrl = `https://wa.me/79393460712?text=Имя:%20${encodeURIComponent(name)}%0AТелефон:%20${encodeURIComponent(phone)}`;
    window.location.href = whatsappUrl;
});
