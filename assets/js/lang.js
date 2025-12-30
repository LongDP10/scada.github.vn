function setLang(lang) {
    document.querySelectorAll('[data-vi]').forEach(el => {
        el.innerText = el.dataset[lang];
    });
}

// Mặc định tiếng Việt
setLang('vi');
