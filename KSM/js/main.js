const openModalButtons = document.querySelectorAll('.openModalButton');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');
const applicationForm = document.getElementById('applicationForm');

openModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = 'block';
    });
});

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

applicationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const whatsappUrl = `https://wa.me/79393460712?text=Имя:%20${encodeURIComponent(name)}%0AТелефон:%20${encodeURIComponent(phone)}`;
    window.location.href = whatsappUrl;
});
