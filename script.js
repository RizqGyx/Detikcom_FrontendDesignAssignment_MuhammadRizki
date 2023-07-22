import { Card } from './src/components/cardUpdate.js';
import { Header } from './src/components/navbarHead.js';
import { Footer } from './src/components/footerBot.js';

window.addEventListener("DOMContentLoaded", () => {
    const boxCard = document.getElementById("box-container");
    const headNav = document.getElementById("navbar");
    const botFoo = document.getElementById("foBot");

    boxCard.innerHTML += Card('latest1.jpg','Alpha JWC Ventures Suntikkan Dana Segar kepada OnlinePajak dan Stoqo','1 hari yang lalu');
    boxCard.innerHTML += Card('latest2.jpeg','Startup Lifepack Rampungkan Pendanaan Seri A yang Dipimpin Golden Gate Ventures','1 hari yang lalu');
    boxCard.innerHTML += Card('latest3.jpeg','Angel Investor Adalah? Berikut Jenis, Contoh dan Cara Mendapatkannya','1 hari yang lalu');
    boxCard.innerHTML += Card('latest4.png','Crowe Indonesia Gelar Diskusi terkait Valuasi Startup & Laporan ESG','1 hari yang lalu');
    boxCard.innerHTML += Card('latest5.png','Startup Fresh Factory Bangun Ratusan Gudang Dingin di 103 Kota','1 hari yang lalu');
    boxCard.innerHTML += Card('latest6.png','Startup Pertanian RI Dapat Pendanaan Awal, Totalnya Rp 90 M','1 hari yang lalu');

    headNav.innerHTML += Header();
    botFoo.innerHTML += Footer();
});

function brandAnimation() {
    const brands = document.querySelector("ul.photos"),
                   total_brand = brands.children.length;

    for (let i = 0; i < total_brand; i++) {
        brands.appendChild(brands.children[i].cloneNode(true));
    }
}

brandAnimation();