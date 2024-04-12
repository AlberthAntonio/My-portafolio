const langToggle = document.getElementById('language-toggle');
const currentLang = window.location.href.includes('index_en.html');
langToggle.checked = currentLang;
function changeLang() {
  if (langToggle.checked) {
    window.location.href = 'index_en.html';
  } else {
    window.location.href = 'index.html';
  }
}
langToggle.addEventListener('change', changeLang);
export default changeLang;