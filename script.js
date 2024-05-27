document.addEventListener('DOMContentLoaded', function() {
    const talkTitles = document.querySelectorAll('.talk-title');

    talkTitles.forEach(title => {
        title.addEventListener('click', () => {
            const detailsRow = title.parentElement.nextElementSibling;
            detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
        });
    });
});
