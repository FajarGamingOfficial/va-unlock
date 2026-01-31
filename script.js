// Fungsi membuat bintang galaxy
function createStars() {
    const container = document.getElementById('star-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        container.appendChild(star);
    }
}
createStars(); // Jalankan saat page load

function generateNow() {
    const yt = document.getElementById('ytInput').value.trim();
    const ig = document.getElementById('igInput').value.trim();
    const dest = document.getElementById('destInput').value.trim();

    if(!yt || !dest) {
        alert("Minimal isi YouTube dan Link Tujuan!");
        return;
    }

    // 1. Data di-encode agar unik
    const dataStr = `yt=${encodeURIComponent(yt)}&ig=${encodeURIComponent(ig)}&dest=${encodeURIComponent(dest)}`;
    const encoded = btoa(dataStr);

    // 2. LOGIKA PERBAIKAN: Mengambil base folder agar tidak menumpuk parameter ?data= sebelumnya
    // Ini memastikan link baru benar-benar bersih dari data lama
    let currentPath = window.location.pathname;
    let directoryPath = currentPath.substring(0, currentPath.lastIndexOf('/')) + '/';
    let baseUrl = window.location.origin + directoryPath;
    
    const finalURL = baseUrl + 'unlock.html?data=' + encoded;

    // 3. Tampilkan hasil di kotak hijau (resultArea)
    document.getElementById('outputLink').value = finalURL;
    document.getElementById('resultArea').classList.remove('d-none');
}

function copyLink() {
    const copyText = document.getElementById("outputLink");
    copyText.select();
    document.execCommand("copy");
    alert("Link disalin!");
}

// Tambahkan ini agar background galaxy tetap ada di Generator
function createStars() {
    const container = document.getElementById('star-container');
    if(!container) return;
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        container.appendChild(star);
    }
}
createStars();