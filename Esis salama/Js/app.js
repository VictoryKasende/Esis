// Kasende Ngeleka Victoire A4 L1 Chef du groupe
// Kwamba Kapinga Loveness
// Amisi Mwayuba Lys-Claudia A1 L1 Rapporteur
// Kapotwe Muya Polydor A4 L1 
// Banza Kazadi Gad A1 L1
// Masengo Thilumbu Plamedie
// Banza Kabamba Josue Adjoint
// Mukumbi Lushembu Phila L1 B3
// Kasongo Tshionyi Junior A5 L1
// Kabemba Kasanji Gracia 


const btn = document.getElementById('btn');
const ratio = .1;
// Lorsqu'on scrolle la bar de naviguation
let nav = document.getElementById('nav');
window.addEventListener('scroll', () =>{
    if (window.scrollY > 200) {
        nav.style.position = 'fixed';
        nav.style.top = '0px';
        nav.style.background = 'white';
        nav.style.width = '100%';
    }
    else{
        nav.style.position = 'relative';
    }
})
//Lorsqu'on scrolle le boutton pour amener vers le haut apparait
window.addEventListener('scroll', () =>{
    if(window.scrollY > 200){
        btn.className = 'btn2';
        btn.innerHTML= '<i class="uil uil-arrow-circle-up"></i>';
        btn.style.fontSize = '40px'
        btn.addEventListener('click', () => {

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        
        })
    }
    else{
        btn.className = 'none';
    }
})
// Jeu d'animation 
var options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  };
const handleIntersert = function(entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible');
        }
    })
}
let observer = new IntersectionObserver(handleIntersert, options);
document.querySelectorAll('[class *= "reveal-"]').forEach(function(r){
    observer.observe(r);
})

// Utilisation de la geolocalisation
var map = L.map('map').setView([-11.675279128661028, 27.481591824493623], 16);
var marker = L.marker([-11.675279128661028, 27.481591824493623]).addTo(map);
var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

Stadia_OSMBright.addTo(map);