/**
 * ==========================================================================
 * MAISON SARTOR • 3-SLIDE PRESENTATION & INTERACTIVE APPLICATION
 * High-Performance Vanilla JavaScript for Modern Luxury E-Commerce
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. DATA STORE: PRODUCTS CATALOG
  // ------------------------------------------------------------------------
  const PRODUCTS = [
    {
      id: 'suit-navy',
      name: 'The Ambassador Bespoke Venetian Navy Suit',
      category: 'suits',
      price: 980,
      image: 'assets/images/hero-ambassador.jpg',
      alternateImage: 'assets/images/hero-ambassador-hd.jpg',
      badge: 'Iconic Tailoring',
      badgeClass: '',
      rating: 5.0,
      reviewsCount: 52,
      colors: ['#151E2B', '#D4C3B3', '#FAF8F5'],
      colorNames: ['Venetian Navy', 'Classic Beige', 'Ivory'],
      sizes: ['38R', '40R', '42R', '44R', '46R'],
      fabric: 'Super 150s Wool by Vitale Barberis Canonico',
      description: 'As styled by our brand ambassador. Tailored with a modern tapered silhouette, Milanese lapel buttonhole, horn buttons, and breathable cupro lining.'
    },
    {
      id: 'dress-beige-silk',
      name: 'The Aurelia Draped Silk Chiffon Evening Gown',
      category: 'dresses',
      price: 1250,
      image: 'assets/images/dress-beige-silk.jpg',
      badge: 'Haute Couture',
      badgeClass: 'badge-beige',
      rating: 5.0,
      reviewsCount: 24,
      colors: ['#D4C3B3', '#FAF8F5', '#151E2B'],
      colorNames: ['Champagne Beige', 'Alabaster White', 'Venetian Navy'],
      sizes: ['IT 38 / US 2', 'IT 40 / US 4', 'IT 42 / US 6', 'IT 44 / US 8', 'IT 46 / US 10'],
      fabric: '100% Como Mulberry Silk Chiffon & Silk Habotai Lining',
      description: 'An architectural triumph in classical beige and alabaster white. Hand-pleated asymmetric one-shoulder bodice with a cascading fluid train and a hand-sewn satin sash that sculpts the waist.'
    },
    {
      id: 'dress-white-minimal',
      name: 'The Seraphina Tailored Pleated Linen-Silk Midi Dress',
      category: 'dresses',
      price: 780,
      image: 'assets/images/dress-white-minimal.jpg',
      badge: 'New Release',
      badgeClass: '',
      rating: 4.9,
      reviewsCount: 31,
      colors: ['#FFFFFF', '#D4C3B3', '#8C7662'],
      colorNames: ['Crisp White', 'Classic Beige', 'Warm Taupe'],
      sizes: ['IT 38 / US 2', 'IT 40 / US 4', 'IT 42 / US 6', 'IT 44 / US 8', 'IT 46 / US 10'],
      fabric: '55% Belgian Spun Linen, 45% Como Silk with Tuscan Calfskin Belt',
      description: 'The epitome of warm-weather quiet luxury. Features a crisp tailored shirt collar, knife-pleated flowing midi skirt, genuine Australian mother-of-pearl buttons, and a detachable classic beige leather belt.'
    },
    {
      id: 'suit-beige',
      name: 'The Milanese Double-Breasted Cashmere Blazer',
      category: 'suits',
      price: 890,
      image: 'assets/images/suit-beige.jpg',
      badge: 'Signature Piece',
      badgeClass: 'badge-beige',
      rating: 4.9,
      reviewsCount: 38,
      colors: ['#D4C3B3', '#FAF8F5', '#151E2B'],
      colorNames: ['Classic Beige', 'Chalk White', 'Venetian Navy'],
      sizes: ['38R', '40R', '42R', '44R', '46R'],
      fabric: '100% Super 150s Merino Wool & Cashmere',
      description: 'Handcrafted in Biella, Italy. Features a soft Neapolitan shoulder, hand-rolled peak lapels, floating horsehair canvas, and genuine carved horn buttons.'
    },
    {
      id: 'shirt-white',
      name: 'The Imperial Giza 45 Poplin Sartorial Shirt',
      category: 'shirts',
      price: 240,
      image: 'assets/images/shirt-white.jpg',
      badge: 'Best Seller',
      badgeClass: 'badge-beige',
      rating: 4.9,
      reviewsCount: 84,
      colors: ['#FFFFFF', '#FAF8F5', '#D4C3B3'],
      colorNames: ['Pure White', 'Warm Ivory', 'Sand'],
      sizes: ['15.0', '15.5', '16.0', '16.5', '17.0'],
      fabric: '100% Long-Staple Egyptian Giza 45 Cotton',
      description: 'Woven with extra-long staple Egyptian yarn for a silky, crisp drape. Features mother-of-pearl Australian buttons and hand-attached French cuffs.'
    },
    {
      id: 'coat-camel',
      name: 'The Ulster Double-Breasted Cashmere Overcoat',
      category: 'outerwear',
      price: 1450,
      image: 'assets/images/coat-camel.jpg',
      badge: 'Autumn Capsule',
      badgeClass: '',
      rating: 5.0,
      reviewsCount: 29,
      colors: ['#C29567', '#191817', '#D4C3B3'],
      colorNames: ['Tobacco Camel', 'Onyx Black', 'Warm Beige'],
      sizes: ['38R', '40R', '42R', '44R'],
      fabric: '100% Pure Mongolian Baby Cashmere (520gsm)',
      description: 'Sumptuously soft double-faced baby cashmere with generous Ulster lapels, horn buttons, and deep slanted hand-warmer welt pockets.'
    },
    {
      id: 'knit-ecru',
      name: 'The St. Moritz Cable-Knit Royal Sweater',
      category: 'knitwear',
      price: 420,
      image: 'assets/images/knit-ecru.jpg',
      badge: 'Artisanal Knit',
      badgeClass: 'badge-beige',
      rating: 4.8,
      reviewsCount: 46,
      colors: ['#E9E1D2', '#FAF8F5', '#8C7662'],
      colorNames: ['Ecru Cream', 'Chalk White', 'Warm Taupe'],
      sizes: ['S', 'M', 'L', 'XL'],
      fabric: '70% Ultra-Fine Merino Wool, 30% Mulberry Silk',
      description: 'Intricately cable-knitted on antique Italian looms. Designed with ribbed cuffs and hem for an effortless relaxed-luxury drape.'
    },
    {
      id: 'trousers-sand',
      name: 'The Florentine Pleated High-Rise Trousers',
      category: 'suits',
      price: 380,
      image: 'assets/images/trousers-sand.jpg',
      badge: 'Classic Cut',
      badgeClass: 'badge-beige',
      rating: 4.9,
      reviewsCount: 41,
      colors: ['#CFC1AE', '#FAF8F5', '#151E2B'],
      colorNames: ['Tuscan Sand', 'Chalk White', 'Deep Navy'],
      sizes: ['30', '32', '34', '36', '38'],
      fabric: 'High-Twist Wool & Linen Fresco',
      description: 'Deep forward double pleats, extended sartorial waistband with solid brass side adjusters, and a 4.5cm turn-up cuff for perfect drape.'
    },
    {
      id: 'loafers-leather',
      name: 'The Tuscan Goodyear-Welted Penny Loafers',
      category: 'accessories',
      price: 540,
      image: 'assets/images/loafers-leather.jpg',
      badge: 'Hand-Lasted',
      badgeClass: '',
      rating: 4.9,
      reviewsCount: 33,
      colors: ['#422916', '#191817', '#8C7662'],
      colorNames: ['Espresso Calf', 'Onyx Black', 'Burnished Tan'],
      sizes: ['40', '41', '42', '43', '44', '45'],
      fabric: 'Full-Grain French Calfskin with Oak-Bark Sole',
      description: 'Handcrafted in Florence. Goodyear welted for a lifetime of resolute wear, finished with hand-burnished aprons and channelled leather soles.'
    },
    {
      id: 'tie-silk',
      name: 'The Como Seven-Fold Mulberry Silk Tie',
      category: 'accessories',
      price: 160,
      image: 'assets/images/tie-silk.jpg',
      badge: 'Seven-Fold',
      badgeClass: 'badge-beige',
      rating: 5.0,
      reviewsCount: 65,
      colors: ['#D4C3B3', '#151E2B', '#C29567'],
      colorNames: ['Champagne Beige', 'Venetian Navy', 'Warm Bronze'],
      sizes: ['Standard 8.5cm'],
      fabric: '100% Heavyweight Como Jacquard Silk',
      description: 'Crafted without inner canvas lining using a single piece of pure Italian silk folded seven times upon itself for an impeccable, dimpled knot.'
    }
  ];

  // Curated menswear items for Slide 3 Carousel
  const MENSWEAR_CAROUSEL_ITEMS = PRODUCTS.filter(p => p.category !== 'dresses' && p.id !== 'suit-navy');

  // ------------------------------------------------------------------------
  // 2. CURRENCY EXCHANGE RATES & FORMATTER
  // ------------------------------------------------------------------------
  const CURRENCIES = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    INR: { symbol: '₹', rate: 83.5 }
  };

  let currentCurrency = localStorage.getItem('sartor_currency') || 'USD';

  function formatPrice(amountInUSD) {
    const config = CURRENCIES[currentCurrency] || CURRENCIES.USD;
    const converted = Math.round(amountInUSD * config.rate);
    return `${config.symbol}${converted.toLocaleString()}`;
  }

  // ------------------------------------------------------------------------
  // 3. APPLICATION STATE
  // ------------------------------------------------------------------------
  let cart = JSON.parse(localStorage.getItem('sartor_cart')) || [
    {
      id: 'suit-navy',
      name: 'The Ambassador Bespoke Venetian Navy Suit',
      price: 980,
      image: 'assets/images/hero-ambassador.jpg',
      size: '40R',
      color: 'Venetian Navy',
      quantity: 1
    }
  ];

  let currentSlide = 1;
  const TOTAL_SLIDES = 3;
  let activePromo = null;
  const FREE_SHIPPING_THRESHOLD_USD = 500;

  // ------------------------------------------------------------------------
  // 4. DOM ELEMENTS
  // ------------------------------------------------------------------------
  const cartDrawer = document.getElementById('cart-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartTotalEl = document.getElementById('cart-total');
  const freeShippingText = document.getElementById('free-shipping-text');
  const freeShippingFill = document.getElementById('free-shipping-fill');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const quickViewModal = document.getElementById('quick-view-modal');
  const toastContainer = document.getElementById('toast-container');
  const currencySelect = document.getElementById('currency-select');
  const promoInput = document.getElementById('promo-input');
  const applyPromoBtn = document.getElementById('apply-promo-btn');

  // ------------------------------------------------------------------------
  // 5. TOAST NOTIFICATION UTILITY
  // ------------------------------------------------------------------------
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✦ ${message}</span>`;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 350);
    }, 3000);
  }

  // ------------------------------------------------------------------------
  // 6. 3-SLIDE NAVIGATION CONTROLLER
  // ------------------------------------------------------------------------
  function goToSlide(slideIndex) {
    if (slideIndex < 1 || slideIndex > TOTAL_SLIDES) return;
    currentSlide = slideIndex;
    const targetEl = document.getElementById(`slide-${slideIndex}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
    updateSlidePagination(slideIndex);
  }

  function updateSlidePagination(slideIndex) {
    // Update vertical dots
    document.querySelectorAll('.slide-nav-dot').forEach(dot => {
      const idx = parseInt(dot.dataset.slideTarget, 10);
      dot.classList.toggle('active', idx === slideIndex);
    });

    // Update header nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const idx = parseInt(link.dataset.slideTarget, 10);
      link.classList.toggle('active', idx === slideIndex);
    });
  }

  // ScrollSpy on slides using IntersectionObserver
  const slideSections = document.querySelectorAll('.slide-section');
  const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        const idx = parseInt(entry.target.dataset.slideIndex, 10);
        if (idx) {
          currentSlide = idx;
          updateSlidePagination(idx);
        }
      }
    });
  }, { threshold: 0.5 });

  slideSections.forEach(sec => slideObserver.observe(sec));

  // Arrow buttons
  const prevBtn = document.getElementById('slide-prev-btn');
  const nextBtn = document.getElementById('slide-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const target = currentSlide > 1 ? currentSlide - 1 : TOTAL_SLIDES;
      goToSlide(target);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const target = currentSlide < TOTAL_SLIDES ? currentSlide + 1 : 1;
      goToSlide(target);
    });
  }

  // Keyboard navigation (Arrow keys)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      goToSlide(currentSlide < TOTAL_SLIDES ? currentSlide + 1 : 1);
    } else if (e.key === 'ArrowUp') {
      goToSlide(currentSlide > 1 ? currentSlide - 1 : TOTAL_SLIDES);
    }
  });

  // Click on any [data-slide-target]
  document.addEventListener('click', (e) => {
    const targetBtn = e.target.closest('[data-slide-target]');
    if (targetBtn) {
      e.preventDefault();
      const targetIdx = parseInt(targetBtn.dataset.slideTarget, 10);
      goToSlide(targetIdx);
    }
  });

  // ------------------------------------------------------------------------
  // 7. SLIDE 03: MEN'S CAROUSEL ENGINE
  // ------------------------------------------------------------------------
  let currentMwIdx = 0;

  function updateMenswearCarousel() {
    const item = MENSWEAR_CAROUSEL_ITEMS[currentMwIdx];
    if (!item) return;

    const img = document.getElementById('mw-img');
    const counter = document.getElementById('carousel-counter');
    const cat = document.getElementById('mw-category');
    const title = document.getElementById('mw-title');
    const desc = document.getElementById('mw-desc');
    const fabric = document.getElementById('mw-fabric');
    const price = document.getElementById('mw-price');
    const actionBtn = document.getElementById('mw-action-btn');

    if (counter) counter.textContent = `${currentMwIdx + 1}/${MENSWEAR_CAROUSEL_ITEMS.length}`;
    if (cat) cat.textContent = item.category.toUpperCase();
    if (title) title.textContent = item.name;
    if (desc) desc.textContent = item.description;
    if (fabric) fabric.textContent = item.fabric;
    if (price) price.textContent = formatPrice(item.price);

    if (img) {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = item.image;
        img.alt = item.name;
        img.style.opacity = '1';
      }, 150);
    }

    if (actionBtn) {
      actionBtn.dataset.id = item.id;
      actionBtn.textContent = `Acquire • ${formatPrice(item.price)}`;
    }
  }

  const mwPrev = document.getElementById('mw-prev');
  const mwNext = document.getElementById('mw-next');
  const mwAction = document.getElementById('mw-action-btn');

  if (mwPrev) {
    mwPrev.addEventListener('click', () => {
      currentMwIdx = (currentMwIdx - 1 + MENSWEAR_CAROUSEL_ITEMS.length) % MENSWEAR_CAROUSEL_ITEMS.length;
      updateMenswearCarousel();
    });
  }

  if (mwNext) {
    mwNext.addEventListener('click', () => {
      currentMwIdx = (currentMwIdx + 1) % MENSWEAR_CAROUSEL_ITEMS.length;
      updateMenswearCarousel();
    });
  }

  if (mwAction) {
    mwAction.addEventListener('click', () => {
      const item = MENSWEAR_CAROUSEL_ITEMS[currentMwIdx];
      if (item) openQuickView(item.id);
    });
  }

  // ------------------------------------------------------------------------
  // 8. 3D TACTILE CARD TILT & SPECULAR GLARE
  // ------------------------------------------------------------------------
  function init3DTiltCards() {
    const tiltCards = document.querySelectorAll('.tilt-card, .dress-card-3d');
    tiltCards.forEach(card => {
      let glare = card.querySelector('.card-specular-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'card-specular-glare';
        card.insertBefore(glare, card.firstChild);
      }

      const maxTilt = parseFloat(card.dataset.tiltMax) || 10;

      function onMouseMove(e) {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const tiltX = (0.5 - y) * maxTilt * 2;
        const tiltY = (x - 0.5) * maxTilt * 2;

        card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        glare.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`;
        glare.style.opacity = '1';
      }

      function onMouseLeave() {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        glare.style.opacity = '0';
      }

      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);
    });
  }

  // ------------------------------------------------------------------------
  // 9. 3D OPTICAL TEXTURE LABORATORY (LOUPE)
  // ------------------------------------------------------------------------
  const TEXTURE_SPECIMENS = {
    'wool-twill': {
      title: 'Super 150s Merino Wool',
      prov: 'Biella, Italy • 15.8 µm Twill',
      image: 'assets/images/texture-wool-twill.svg'
    },
    'cotton-poplin': {
      title: 'Egyptian Giza 45 Poplin',
      prov: 'Nile Delta • 140/2 Crisp White',
      image: 'assets/images/texture-cotton-poplin.svg'
    },
    'cashmere': {
      title: 'Mongolian Baby Cashmere',
      prov: 'Alashan • 520 GSM Brushed Nap',
      image: 'assets/images/texture-cashmere.svg'
    },
    'silk-chiffon': {
      title: 'Como Mulberry Silk Chiffon',
      prov: 'Lake Como • 12 Momme Gauze',
      image: 'assets/images/texture-silk-chiffon.svg'
    }
  };

  function initFabricLab() {
    const viewport = document.getElementById('fabric-viewport');
    const specimenImg = document.getElementById('fabric-specimen-img');
    const loupe = document.getElementById('fabric-loupe');
    const loupeImg = document.getElementById('fabric-loupe-img');
    const textureBtns = document.querySelectorAll('.texture-btn-pill');

    if (!viewport || !loupe || !loupeImg) return;

    viewport.addEventListener('mouseenter', () => loupe.classList.add('active'));
    viewport.addEventListener('mouseleave', () => loupe.classList.remove('active'));

    viewport.addEventListener('mousemove', (e) => {
      const rect = viewport.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      loupe.style.left = `${x}px`;
      loupe.style.top = `${y}px`;

      const zoom = 4;
      const radius = 65; // half of 130px
      loupeImg.style.left = `-${x * zoom - radius}px`;
      loupeImg.style.top = `-${y * zoom - radius}px`;
    });

    textureBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        textureBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const key = btn.dataset.specimen;
        const data = TEXTURE_SPECIMENS[key];
        if (!data) return;

        specimenImg.style.opacity = '0';
        setTimeout(() => {
          specimenImg.src = data.image;
          loupeImg.src = data.image;
          specimenImg.style.opacity = '1';
        }, 150);

        const titleEl = document.getElementById('lab-spec-title');
        const provEl = document.getElementById('lab-spec-prov');
        if (titleEl) titleEl.textContent = data.title;
        if (provEl) provEl.textContent = data.prov;

        showToast(`Analyzing fiber weave: ${data.title}`);
      });
    });

    const swatchBtn = document.getElementById('request-swatch-btn');
    if (swatchBtn) {
      swatchBtn.addEventListener('click', () => {
        showToast('Complimentary Swatch Folio (Box of 4) registered for courier delivery.');
      });
    }
  }

  // ------------------------------------------------------------------------
  // 10. SHOPPING BAG DRAWER & STATE
  // ------------------------------------------------------------------------
  function saveCart() {
    localStorage.setItem('sartor_cart', JSON.stringify(cart));
    updateCartUI();
  }

  function addToCart(productId, size = null, color = null, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = size || product.sizes[0];
    const chosenColor = color || product.colorNames[0];

    const existingIndex = cart.findIndex(
      item => item.id === productId && item.size === chosenSize && item.color === chosenColor
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: chosenSize,
        color: chosenColor,
        quantity: quantity
      });
    }

    saveCart();
    openCart();
    showToast(`Added ${product.name} to your Shopping Bag`);
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadges.forEach(b => b.textContent = totalCount);

    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--color-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">✦</div>
          <p>Your Shopping Bag is empty.</p>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div>
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-details">Size: ${item.size} • Color: ${item.color}</div>
            <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
          </div>
          <button type="button" class="action-btn" data-action="cart-remove" data-index="${index}" style="width: 28px; height: 28px; font-size: 0.8rem;">✕</button>
        </div>
      `).join('');
    }

    const subtotalUSD = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountUSD = activePromo ? subtotalUSD * activePromo.discount : 0;
    const totalUSD = Math.max(0, subtotalUSD - discountUSD);

    if (cartTotalEl) cartTotalEl.textContent = formatPrice(totalUSD);

    if (freeShippingText && freeShippingFill) {
      if (subtotalUSD >= FREE_SHIPPING_THRESHOLD_USD) {
        freeShippingText.innerHTML = `<strong>Unlocked:</strong> Complimentary global express courier!`;
        freeShippingFill.style.width = '100%';
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD_USD - subtotalUSD;
        const percent = Math.min(100, Math.round((subtotalUSD / FREE_SHIPPING_THRESHOLD_USD) * 100));
        freeShippingText.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more for complimentary shipping.`;
        freeShippingFill.style.width = `${percent}%`;
      }
    }
  }

  function openCart() {
    if (cartDrawer && drawerBackdrop) {
      cartDrawer.classList.add('open');
      drawerBackdrop.classList.add('active');
    }
  }

  function closeCart() {
    if (cartDrawer && drawerBackdrop) {
      cartDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('active');
    }
  }

  // ------------------------------------------------------------------------
  // 11. QUICK VIEW MODAL
  // ------------------------------------------------------------------------
  function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !quickViewModal) return;

    let selectedSize = product.sizes[0];
    let selectedColor = product.colorNames[0];

    const container = quickViewModal.querySelector('.modal-container');
    container.innerHTML = `
      <button type="button" class="modal-close-btn" data-action="close-modal">✕</button>
      <div class="quick-view-grid">
        <div class="quick-view-gallery">
          <img id="qv-main-img" src="${product.image}" alt="${product.name}">
          ${product.alternateImage ? `
            <div class="qv-gallery-thumbs" style="display: flex; gap: 8px; margin-top: 12px;">
              <button type="button" class="qv-thumb-btn active" data-src="${product.image}" style="width: 58px; height: 58px; border-radius: 4px; overflow: hidden; border: 2px solid var(--color-charcoal-900); padding: 0; cursor: pointer; background: transparent;">
                <img src="${product.image}" alt="Original View" style="width: 100%; height: 100%; object-fit: cover;">
              </button>
              <button type="button" class="qv-thumb-btn" data-src="${product.alternateImage}" style="width: 58px; height: 58px; border-radius: 4px; overflow: hidden; border: 2px solid transparent; padding: 0; cursor: pointer; background: transparent;">
                <img src="${product.alternateImage}" alt="Studio HD View" style="width: 100%; height: 100%; object-fit: cover;">
              </button>
            </div>
          ` : ''}
        </div>
        <div class="quick-view-details">
          <span class="qv-category">${product.category} • Hand-Crafted in Italy</span>
          <h2 class="qv-title">${product.name}</h2>
          <div class="qv-price">${formatPrice(product.price)}</div>
          <p class="qv-description">${product.description}</p>
          <div style="font-size: 0.75rem; color: var(--color-charcoal-700); margin-bottom: 1.25rem;">
            <strong>Fabric &amp; Craft:</strong> ${product.fabric}
          </div>

          <div style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; margin-bottom: 0.4rem;">Select Size</div>
          <div class="size-selector" id="qv-size-selector">
            ${product.sizes.map((s, i) => `
              <button type="button" class="size-pill ${i === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
            `).join('')}
          </div>

          <button type="button" class="btn btn-primary btn-block" id="qv-submit-add">
            Add to Shopping Bag • ${formatPrice(product.price)}
          </button>
        </div>
      </div>
    `;

    const thumbBtns = container.querySelectorAll('.qv-thumb-btn');
    const mainImg = container.querySelector('#qv-main-img');
    thumbBtns.forEach(tBtn => {
      tBtn.addEventListener('click', () => {
        thumbBtns.forEach(b => {
          b.classList.remove('active');
          b.style.borderColor = 'transparent';
        });
        tBtn.classList.add('active');
        tBtn.style.borderColor = 'var(--color-charcoal-900)';
        if (mainImg) {
          mainImg.style.opacity = '0.4';
          mainImg.src = tBtn.dataset.src;
          mainImg.onload = () => { mainImg.style.opacity = '1'; };
        }
      });
    });

    const sizePills = container.querySelectorAll('.size-pill');
    sizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        sizePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectedSize = pill.dataset.size;
      });
    });

    const submitBtn = container.querySelector('#qv-submit-add');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        addToCart(product.id, selectedSize, selectedColor, 1);
        closeModal();
      });
    }

    quickViewModal.classList.add('active');
  }

  function closeModal() {
    if (quickViewModal) quickViewModal.classList.remove('active');
    const checkoutModal = document.getElementById('checkout-confirmation-modal');
    if (checkoutModal) checkoutModal.classList.remove('active');
  }

  // ------------------------------------------------------------------------
  // 12. CHECKOUT SIMULATION
  // ------------------------------------------------------------------------
  function proceedToCheckout() {
    if (cart.length === 0) {
      showToast('Your shopping bag is empty.');
      return;
    }
    closeCart();

    const checkoutModal = document.getElementById('checkout-confirmation-modal');
    if (!checkoutModal) return;

    const subtotalUSD = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const summary = document.getElementById('checkout-order-summary');
    if (summary) {
      summary.innerHTML = `
        <div style="background-color: var(--color-beige-50); padding: 1rem; border-radius: 4px; margin-bottom: 1.25rem; font-size: 0.8rem;">
          ${cart.map(item => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
              <span>${item.quantity}x ${item.name} (${item.size})</span>
              <strong>${formatPrice(item.price * item.quantity)}</strong>
            </div>
          `).join('')}
          <div style="border-top: 1px solid var(--color-border); padding-top: 0.5rem; margin-top: 0.5rem; display: flex; justify-content: space-between; font-weight: 700;">
            <span>Total Investment:</span>
            <span>${formatPrice(subtotalUSD)}</span>
          </div>
        </div>
      `;
    }

    checkoutModal.classList.add('active');
  }

  // ------------------------------------------------------------------------
  // 13. GLOBAL EVENT LISTENERS
  // ------------------------------------------------------------------------
  document.addEventListener('click', (e) => {
    const target = e.target;

    // Quick View
    const qvBtn = target.closest('[data-action="quick-view"]');
    if (qvBtn) {
      e.preventDefault();
      openQuickView(qvBtn.dataset.id);
      return;
    }

    // Open Cart
    if (target.closest('[data-action="open-cart"]')) {
      e.preventDefault();
      openCart();
      return;
    }

    // Close Cart
    if (target.closest('[data-action="close-cart"]') || target === drawerBackdrop) {
      e.preventDefault();
      closeCart();
      closeModal();
      return;
    }

    // Close Modal
    if (target.closest('[data-action="close-modal"]')) {
      e.preventDefault();
      closeModal();
      return;
    }

    // Cart Remove
    const cartRem = target.closest('[data-action="cart-remove"]');
    if (cartRem) {
      const idx = parseInt(cartRem.dataset.index, 10);
      cart.splice(idx, 1);
      saveCart();
      showToast('Removed item from Shopping Bag');
      return;
    }

    // Checkout CTA
    if (target.closest('#checkout-cta-btn')) {
      e.preventDefault();
      proceedToCheckout();
      return;
    }
  });

  // Promo Code
  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'SARTOR10') {
        activePromo = { code: 'SARTOR10', discount: 0.10 };
        showToast('Privé Voucher Applied: 10% Off!');
        updateCartUI();
      } else {
        showToast('Invalid code. Try SARTOR10.');
      }
    });
  }

  // Currency Switcher
  if (currencySelect) {
    currencySelect.value = currentCurrency;
    currencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      localStorage.setItem('sartor_currency', currentCurrency);
      updateCartUI();
      updateMenswearCarousel();
      showToast(`Currency updated to ${currentCurrency}`);
    });
  }

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeModal();
    }
  });

  // ------------------------------------------------------------------------
  // AMBASSADOR VIEW SWITCHER (Original Portrait vs Studio HD Editorial)
  // ------------------------------------------------------------------------
  function initAmbassadorViewSwitcher() {
    const toggleBtns = document.querySelectorAll('.ambassador-view-toggle .view-toggle-btn');
    const heroImg = document.getElementById('hero-ambassador-img');
    if (!toggleBtns.length || !heroImg) return;

    const sources = {
      orig: 'assets/images/hero-ambassador.jpg',
      hd: 'assets/images/hero-ambassador-hd.jpg'
    };

    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (!sources[view]) return;

        toggleBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        heroImg.style.opacity = '0.3';
        heroImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          heroImg.src = sources[view];
          heroImg.onload = () => {
            heroImg.style.opacity = '1';
            heroImg.style.transform = 'scale(1)';
          };
        }, 120);
      });
    });
  }

  // ------------------------------------------------------------------------
  // 14. INITIALIZE APPLICATION
  // ------------------------------------------------------------------------
  initAmbassadorViewSwitcher();
  updateMenswearCarousel();
  init3DTiltCards();
  initFabricLab();
  updateCartUI();
  updateSlidePagination(1);
});
