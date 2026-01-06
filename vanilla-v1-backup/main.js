// Projects Data
const projects = [
    {
        id: 1,
        title: "Magnum Umalas",
        location: "Umalas, Bali",
        type: "villa",
        status: "В продаже",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
        usp: "Эксклюзивные виллы с панорамным видом на джунгли"
    },
    {
        id: 2,
        title: "Magnum Canggu",
        location: "Canggu, Bali",
        type: "residence",
        status: "Строится",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        usp: "Жилой комплекс премиум-класса в 5 минутах от пляжа"
    },
    {
        id: 3,
        title: "Magnum Sanur",
        location: "Sanur, Bali",
        type: "residence",
        status: "Анонсировано",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        usp: "Апартаменты у океана с инфраструктурой 5-звездочного отеля"
    }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const header = document.getElementById('main-header');
    const projectGrid = document.getElementById('projects-grid');

    // 1. Loader removal
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    });

    // 2. Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Render Projects
    const renderProjects = (filter = 'all') => {
        const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);

        projectGrid.innerHTML = filtered.map((p, index) => `
      <div class="project-card fade-in" style="animation-delay: ${index * 0.1}s">
        <div class="project-img-box">
          <img src="${p.image}" alt="${p.title}">
          <div class="project-status">${p.status}</div>
          <div class="project-overlay">
            <a href="#" class="btn btn-outline btn-sm">Детали</a>
          </div>
        </div>
        <div class="project-info">
          <div class="project-loc">${p.location}</div>
          <h3>${p.title}</h3>
          <p>${p.usp}</p>
        </div>
      </div>
    `).join('');
    };

    renderProjects();

    // 4. Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    // 5. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, h1, .fade-in').forEach(el => {
        observer.observe(el);
    });

    // 6. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const desktopNav = document.querySelector('.desktop-nav');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            desktopNav.classList.toggle('mobile-active');
        });
    }

    // Close menu on link click
    document.querySelectorAll('.desktop-nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            desktopNav.classList.remove('mobile-active');
        });
    });
});

// Form Submission (Demo)
const leadForm = document.getElementById('lead-form');
if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка принята. Менеджер свяжется с вами в ближайшее время.');
        leadForm.reset();
    });
}
