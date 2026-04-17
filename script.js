// ======================
// FORM VALIDATION
// ======================
const form = document.getElementById("contactform");
const pesan = document.getElementById("pesan");

form.addEventListener("submit", function(event){
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const isiPesan = document.getElementById("pesanInput").value;

  if(nama === "" || email === "" || isiPesan === ""){
    pesan.innerText = "Semua field wajib diisi yaa";
    pesan.style.color = "red";
    return;
  }

  if(!email.includes("@")){
    pesan.innerText = "Email tidak valid";
    pesan.style.color = "red";
    return;
  }

  pesan.innerText = "Pesan berhasil dikirim 🚀";
  pesan.style.color = "lightgreen";
});


// ======================
// LOADING SCREEN
// ======================
window.addEventListener("load", function(){
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});


// ======================
// DARK MODE
// ======================
const toggle = document.getElementById("toggle-mode");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    toggle.innerText = "☀";
  } else {
    toggle.innerText = "🌙";
  }
});

const elements = document.querySelectorAll('.fade-up');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
    const parent = el.closest('.timeline-item');
if(parent){
  parent.classList.add('show');
}
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

