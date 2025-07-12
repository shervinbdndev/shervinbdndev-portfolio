document.querySelector('.banner-container').addEventListener('click', () => {
  window.open('https://aparat.com/shervinbdndev', '_blank', 'noopener');
});

document.querySelectorAll('.nav-items a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    
    const toggle = document.getElementById('darkModeToggle');
    
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
        if (toggle) toggle.innerText = 'light_mode';
    } else {
        if (toggle) toggle.innerText = 'dark_mode';
    }

    function loadParticles() {
        const isDark = document.body.classList.contains('dark-mode');
        const particleColor = isDark ? "#00bcd4" : "#212842";

        const existing = tsParticles.domItem(0);
        if (existing) {
            existing.destroy();
        }

        tsParticles.load("particles-bg", {
            fullScreen: false,
            background: { color: { value: "transparent" } },
            particles: {
            color: { value: particleColor },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
            links: { enable: true, distance: 120, color: particleColor, opacity: 0.2 }
            }
        });
    }

    loadParticles();
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
            toggle.innerText = document.body.classList.contains('dark-mode') ? 'light_mode' : 'dark_mode';

            loadParticles();
        });
    }

    hamburger.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
            const isDark = document.body.classList.contains('dark-mode');
            Swal.fire({
                title: 'کجا میخوای بری؟',
                html: `
                    <div style="display: flex; flex-direction: column; gap: 1rem; text-align: center;">
                        <a href="#about" style="color: #00bcd4; font-weight: bold;">درباره من</a>
                        <a href="#education" style="color: #00bcd4; font-weight: bold;">سوابق تحصیلی</a>
                        <a href="#skills" style="color: #00bcd4; font-weight: bold;">تخصص</a>
                        <a href="#projects" style="color: #00bcd4; font-weight: bold;">پروژه‌ها</a>
                        <a href="#learn" style="color: #00bcd4; font-weight: bold;">یادگیری برنامه نویسی</a>
                        <a href="#services" style="color: #00bcd4; font-weight: bold;">خدمات</a>
                        <a href="#documents" style="color: #00bcd4; font-weight: bold;">مقالات</a>
                        <a href="#contact" style="color: #00bcd4; font-weight: bold;">ارتباط</a>
                        
                        <button id="swalDarkToggle"
                            class="swal2-styled"
                            style="background: #2a375b; color: white; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight: bold;">
                            <span class="material-icons" id="swalIcon">${isDark ? 'light_mode' : 'dark_mode'}</span>
                            <span id="darkModeText">${isDark ? 'حالت روشن' : 'حالت تاریک'}</span>
                        </button>
                    </div>
                `,
                showConfirmButton: false,
                background: '#1e2b44',
                color: '#fff',
                customClass: {
                    popup: 'swal2-dark-popup'
                }
            });

            setTimeout(() => {
                const darkToggle = document.getElementById('swalDarkToggle');
                const icon = document.getElementById('swalIcon');
                darkToggle?.addEventListener('click', () => {
                    document.body.classList.toggle('dark-mode');
                    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
                    if (document.body.classList.contains('dark-mode')) {
                        icon.innerText = 'light_mode';
                    } else {
                        icon.innerText = 'dark_mode';
                    }
                    Swal.close();
                });
            }, 100);
        }
    });
});