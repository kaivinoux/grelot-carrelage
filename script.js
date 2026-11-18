document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Burger Menu Overlay (Figma #229:4612)
  const burgerBtns = document.querySelectorAll('.js-burger-btn');
  const mobileOverlay = document.getElementById('mobileMenuOverlay');
  const mobileBackdrop = document.getElementById('mobileMenuBackdrop');

  function toggleMobileMenu(forceState) {
    if (!mobileOverlay || !mobileBackdrop) return;
    const isOpen = typeof forceState === 'boolean'
      ? forceState
      : !mobileOverlay.classList.contains('open');
    mobileOverlay.classList.toggle('open', isOpen);
    mobileBackdrop.classList.toggle('open', isOpen);
  }

  burgerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  });

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', () => toggleMobileMenu(false));
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleMobileMenu(false);
      closeLightbox();
    }
  });

  // 1b. Sticky Header below Hero on Home Page
  const homeStickyHeader = document.getElementById('homeStickyHeader');
  const heroSection = document.querySelector('.hero-section');

  function updateStickyHeader() {
    if (!homeStickyHeader || !heroSection) return;
    const heroBottom = heroSection.getBoundingClientRect().bottom;
    homeStickyHeader.classList.toggle('is-stuck', heroBottom <= 2);
  }

  if (homeStickyHeader && heroSection) {
    window.addEventListener('scroll', updateStickyHeader, { passive: true });
    window.addEventListener('resize', updateStickyHeader);
    updateStickyHeader();
  }

  // 2. Home Page Featured Realisations Carousel
  const realisationsSlides = [
    {
      title: 'Mosaiques Bleu dans une piscine',
      img: 'assets/images/mosaiques_piscine.png',
      desc: 'Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.',
      link: 'chantier.html?projet=piscine'
    },
    {
      title: 'Douche à l’italienne en travertin',
      img: 'assets/images/douche_travertin.jpg',
      desc: 'Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.',
      link: 'chantier.html?projet=travertin'
    },
    {
      title: 'Habillage mural & niche en pierre naturelle',
      img: 'assets/images/chantier_3.jpg',
      desc: 'Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.',
      link: 'chantier.html?projet=travertin'
    },
    {
      title: 'Pose de briquettes & terrasse extérieure',
      img: 'assets/images/hero_bg_desktop.jpg',
      desc: 'Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.',
      link: 'chantier.html?projet=travertin'
    }
  ];

  const homeTrack = document.getElementById('homeRealisationsTrack');
  const prevRealBtn = document.getElementById('prevRealisationBtn');
  const nextRealBtn = document.getElementById('nextRealisationBtn');
  let realIndex = 0;

  function renderHomeRealisations() {
    if (!homeTrack) return;
    const isMobile = window.innerWidth <= 1180;
    const count = isMobile ? 1 : 2;
    homeTrack.style.opacity = '0.35';

    setTimeout(() => {
      homeTrack.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const item = realisationsSlides[(realIndex + i) % realisationsSlides.length];
        const card = document.createElement('a');
        card.href = item.link;
        card.className = 'realisation-card clickable-card';
        card.innerHTML = `
          <div class="framed-photo">
            <img class="photo-img" src="${item.img}" alt="${item.title}">
          </div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        `;
        homeTrack.appendChild(card);
      }
      homeTrack.style.opacity = '1';
    }, 120);
  }

  if (homeTrack && prevRealBtn && nextRealBtn) {
    prevRealBtn.addEventListener('click', () => {
      realIndex = (realIndex - 1 + realisationsSlides.length) % realisationsSlides.length;
      renderHomeRealisations();
    });
    nextRealBtn.addEventListener('click', () => {
      realIndex = (realIndex + 1) % realisationsSlides.length;
      renderHomeRealisations();
    });
    window.addEventListener('resize', () => {
      renderHomeRealisations();
    });
  }

  // 3. Home Page Tabs (Prestations / Histoire / Savoir-faire)
  const tabContents = {
    prestations: `Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides.`,
    histoire: `Histoire de Grelot Carrelage — Implantée en Gironde, notre entreprise familiale accompagne les particuliers et les professionnels dans tous leurs projets de revêtement de sols et de murs. Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides. De génération en génération, nous perpétuons l'exigence du travail soigné, du conseil personnalisé et du respect des délais sur chaque chantier.`,
    savoirfaire: `Savoir-faire artisanal — Pose de carrelage grand format, faïence, mosaïque de piscine, pierre naturelle, travertin, terre cuite et création complète de douches à l'italienne sur mesure. Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super hoc ulla documentorum rata est fides. Chaque découpe, joint et étanchéité est réalisé dans les règles de l'art (normes DTU).`
  };

  const tabBtns = document.querySelectorAll('.js-tab-btn');
  const tabTextEl = document.getElementById('tabContentText');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-tab');
      if (tabTextEl && tabContents[key]) {
        tabTextEl.textContent = tabContents[key];
      }
    });
  });

  // 4. Partners Carousel (Auto + Manual Scroll as specified in Figma Moodboard)
  const partnersTrack = document.getElementById('partnersTrack');
  const prevPartnerBtn = document.getElementById('prevPartnerBtn');
  const nextPartnerBtn = document.getElementById('nextPartnerBtn');
  let partnerOffset = 0;

  function stepPartners(dir = 1) {
    if (!partnersTrack) return;
    const tiles = partnersTrack.children;
    if (!tiles.length) return;
    const tileWidth = tiles[0].offsetWidth + 64; // width + gap
    const maxIndex = Math.max(0, tiles.length - (window.innerWidth <= 768 ? 1 : 3));
    partnerOffset = partnerOffset + dir;
    if (partnerOffset > maxIndex) partnerOffset = 0;
    if (partnerOffset < 0) partnerOffset = maxIndex;
    partnersTrack.style.transform = `translateX(-${partnerOffset * tileWidth}px)`;
  }

  if (partnersTrack && prevPartnerBtn && nextPartnerBtn) {
    prevPartnerBtn.addEventListener('click', () => stepPartners(-1));
    nextPartnerBtn.addEventListener('click', () => stepPartners(1));
    setInterval(() => stepPartners(1), 4000);
  }

  // 5. Chantier Individuel Lightbox Overlay (Figma #229:4874..4878)
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxContent = document.getElementById('lightboxContent');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const zoomablePhotos = document.querySelectorAll('.js-lightbox-trigger');

  function closeLightbox() {
    if (!lightboxBackdrop) return;
    lightboxBackdrop.classList.remove('open');
  }

  zoomablePhotos.forEach(photo => {
    photo.addEventListener('click', () => {
      if (!lightboxBackdrop || !lightboxImg || !lightboxContent) return;
      const imgEl = photo.querySelector('.photo-img');
      if (!imgEl) return;
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt;
      const isLandscape = photo.classList.contains('chantier-photo-horizontal');
      lightboxContent.classList.toggle('landscape', isLandscape);
      lightboxBackdrop.classList.add('open');
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', (e) => {
      if (e.target === lightboxBackdrop) closeLightbox();
    });
  }
});
