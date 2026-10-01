// Spencer Gabor Design Interactive Engine for Ramya Paneerselvam Portfolio

// Theme Palettes (Exactly matching Spencer Gabor's site presets)
const THEMES = [
  {
    name: 'Editorial Cream',
    primary: '#ede6d3',
    onPrimary: '#222222',
    secondary: '#ff7906',
    onSecondary: '#ffffff',
    cardBg: '#f5f0e3',
    cardBorder: 'rgba(34, 34, 34, 0.1)',
    subtle: '#767064'
  },
  {
    name: 'Electric Cobalt',
    primary: '#0779ff',
    onPrimary: '#ffffff',
    secondary: '#002180',
    onSecondary: '#ffffff',
    cardBg: '#1c83ff',
    cardBorder: 'rgba(255, 255, 255, 0.18)',
    subtle: '#d5e6ff'
  },
  {
    name: 'Kelly Green',
    primary: '#37af5d',
    onPrimary: '#ffffff',
    secondary: '#005319',
    onSecondary: '#ffffff',
    cardBg: '#40bb67',
    cardBorder: 'rgba(255, 255, 255, 0.18)',
    subtle: '#d2f6dc'
  },
  {
    name: 'Velvet Neon',
    primary: '#3c0350',
    onPrimary: '#ffffff',
    secondary: '#db30f5',
    onSecondary: '#ffffff',
    cardBg: '#4a0862',
    cardBorder: 'rgba(255, 255, 255, 0.18)',
    subtle: '#f5c8fd'
  }
];

// Project Catalog
const PROJECTS_DATA = {
  lpl: {
    title: 'LPL Financial',
    category: 'Distributed Enterprise Batch Processing',
    summary: 'Led offshore engineering team to design, engineer, and deploy scheduler-based batch jobs for automated client and investor correspondence.',
    details: 'Architected and orchestrated distributed high-volume scheduler jobs that guarantee transactional integrity, fault tolerance, and zero-data-loss for large-scale investor communications.',
    tech: ['Scala', 'Apache Spark', '.NET', 'Python', 'AWS Cloud', 'SQL'],
    icon: 'fa-server',
    metrics: 'Multi-million daily correspondence volume'
  },
  allokate: {
    title: 'alloKate',
    category: 'Distributed FinTech Tax Engine',
    summary: 'Engineered high-throughput tax calculation platform with an intuitive Angular UI, high-performance .NET REST APIs, and distributed Scala/Spark batch computing.',
    details: 'Coupled a modular Angular frontend with microservices in .NET and distributed computational pipelines in Scala/Spark, backed by Cassandra for fast distributed data lookups.',
    tech: ['Angular', '.NET APIs', 'Scala', 'Apache Spark', 'Cassandra'],
    icon: 'fa-calculator',
    metrics: 'Complex real-time financial taxation pipelines'
  },
  distiller: {
    title: 'Distiller',
    category: 'Cloud Document Extraction Platform',
    summary: 'Solo-developed document text extraction web platform from architecture through cloud deployment within an accelerated 3-month timeline.',
    details: 'Took complete individual ownership of solution architecture, frontend development in Angular, REST services in .NET/Python, and cloud infrastructure deployment on AWS.',
    tech: ['Angular', '.NET', 'Python', 'AWS APIs & Lambda', 'Cloud Architecture'],
    icon: 'fa-file-lines',
    metrics: 'Solo delivery in under 90 days'
  },
  pctel: {
    title: 'Pctel',
    category: 'Telemetry & Floor Signal Mapping',
    summary: 'Co-developed an interactive mapping application integrating Google Maps API and HTML5 Canvas to map floor signal telemetry in real time.',
    details: 'Engineered custom high-performance canvas layers atop Google Maps, rendering signal heatmaps, RF telemetry, and floor boundary matrices seamlessly.',
    tech: ['Angular', 'HTML5 Canvas', 'Google Maps API', '.NET', 'PostgreSQL'],
    icon: 'fa-map-location-dot',
    metrics: 'Real-time telemetry & geospatial rendering'
  },
  valet: {
    title: 'Valet Manager',
    category: 'Smart Parking Management System',
    summary: 'Coordinated 6-member engineering team delivering comprehensive parking management system, developing component-based UI and backend REST APIs.',
    details: 'Designed resilient backend microservices with Java Spring Boot and Couchbase NoSQL database, paired with a responsive Angular component-driven interface.',
    tech: ['Angular', 'Java Spring Boot', 'Couchbase', 'REST APIs'],
    icon: 'fa-car',
    metrics: '6-member team coordination & delivery'
  },
  kewaunee: {
    title: 'Kewaunee',
    category: 'Enterprise Sales & Lab Configurator',
    summary: 'Delivered an end-to-end web platform allowing sales teams to configure, maintain, and present complex custom laboratory room designs.',
    details: 'Empowered global sales and engineering departments to dynamically design modular laboratory furniture setups with instant bill-of-materials and state persistence.',
    tech: ['Angular', '.NET', 'PostgreSQL', 'Complex State Management'],
    icon: 'fa-flask-vial',
    metrics: 'Deployed to enterprise field sales teams'
  },
  testlabs: {
    title: 'TestLabs & NOCApp',
    category: 'Lab Retrieval & NOC Automation',
    summary: 'Built full-stack lab retrieval app in Angular/.NET and automated NOC tag scanning with PowerApps & Power Automate.',
    details: 'Streamlined network operations center (NOC) inventory, automated barcode/tag parsing, and integrated automated workflow triggers across Microsoft Power Platform.',
    tech: ['Angular', '.NET', 'PowerApps', 'Power Automate'],
    icon: 'fa-network-wired',
    metrics: 'Significant reduction in manual NOC cycle times'
  },
  pulse: {
    title: 'Pulsesecure',
    category: 'Quality Engineering & Test Automation',
    summary: 'Collaborated in a 4-member team designing and maintaining extensive automated regression testing suites for mission-critical legacy applications.',
    details: 'Built test architectures using Katalon Framework, standardizing CI regression runs and accelerating release deployment velocity.',
    tech: ['Katalon Framework', 'Regression Automation', 'CI/CD Pipelines'],
    icon: 'fa-shield-halved',
    metrics: 'High test coverage on legacy platforms'
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initColorPicker();
  initCarouselDrag();
  initHeaderNav();
});

// Color Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('ramya_theme_idx');
  if (savedTheme !== null) {
    setTheme(parseInt(savedTheme, 10));
  }
}

function setTheme(idx) {
  const theme = THEMES[idx] || THEMES[0];
  const root = document.documentElement;

  root.style.setProperty('--color-primary', theme.primary);
  root.style.setProperty('--color-onPrimary', theme.onPrimary);
  root.style.setProperty('--color-secondary', theme.secondary);
  root.style.setProperty('--color-onSecondary', theme.onSecondary);
  root.style.setProperty('--color-card-bg', theme.cardBg);
  root.style.setProperty('--color-card-border', theme.cardBorder);
  root.style.setProperty('--color-subtle', theme.subtle);

  localStorage.setItem('ramya_theme_idx', idx);

  // Close color picker
  const picker = document.getElementById('colorPicker');
  if (picker) picker.classList.remove('open');

  showToast(`Palette: ${theme.name}`);
}

// Color Picker Floating Widget
function initColorPicker() {
  const toggleBtn = document.getElementById('colorPickerToggle');
  const picker = document.getElementById('colorPicker');

  if (toggleBtn && picker) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      picker.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!picker.contains(e.target)) {
        picker.classList.remove('open');
      }
    });
  }
}

// Header Navigation
function initHeaderNav() {
  const aboutBtn = document.getElementById('aboutBtn');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
      openAboutModal();
    });
  }
}

// Carousel Drag-To-Scroll Helper
function initCarouselDrag() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => {
    isDown = false;
  });

  track.addEventListener('mouseup', () => {
    isDown = false;
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5;
    track.scrollLeft = scrollLeft - walk;
  });
}

// Modal Handlers
function openProjectModal(key) {
  const project = PROJECTS_DATA[key];
  if (!project) return;

  const modalBody = document.getElementById('modalBody');
  const modal = document.getElementById('projectModal');

  modalBody.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span class="slide-tag">${project.category}</span>
        <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: var(--color-secondary);">
          <i class="fa-solid ${project.icon}"></i>
        </div>
      </div>

      <h2 style="font-size: clamp(2.5rem, 5vw, 4rem); text-align: left; line-height: 0.9;">${project.title}</h2>

      <p style="font-size: 1.05rem; font-weight: 600; line-height: 1.4;">${project.summary}</p>
      
      <p style="font-size: 0.95rem; color: var(--color-subtle); line-height: 1.5;">${project.details}</p>

      <div style="background-color: var(--color-primary); border: 1px solid var(--color-card-border); padding: 1rem 1.25rem; border-radius: 1rem;">
        <small style="display: block; margin-bottom: 0.3rem;">Impact & Scope</small>
        <p style="font-weight: 600; font-size: 0.95rem; color: var(--color-secondary);">${project.metrics}</p>
      </div>

      <div>
        <small style="display: block; margin-bottom: 0.6rem;">Technologies & Frameworks</small>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
          ${project.tech.map(t => `<span class="slide-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div style="margin-top: 0.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="mailto:ramyamanokar2504@gmail.com?subject=Regarding%20${encodeURIComponent(project.title)}" class="button">Inquire About Project</a>
        <button class="button button-outline" onclick="closeModal('projectModal')">Close</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openAboutModal() {
  const modal = document.getElementById('aboutModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Contact Actions
function copyContact() {
  navigator.clipboard.writeText('+919952099983').then(() => {
    showToast('Phone Copied: +91 9952099983');
  }).catch(() => {
    showToast('+91 9952099983');
  });
}

// Toast
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Keyboard ESC listener
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal('projectModal');
    closeModal('aboutModal');
  }
});
