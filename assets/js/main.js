/**
 * A-Z Waterproofing and Construction
 * Standalone Client Scripts
 * (No Vite or Node.js required)
 */

// 0. Preloader Initialization
initializePageLoader();

// Cookie Banner Initialization
initializeCookieBanner();

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Dynamic Swiper Carousels
  initializeSwiperCarousels();

  // 2. Initialize Product Showcase Filters
  initializeProductFilters();

  // 3. Initialize Product Order Controls (WhatsApp Order with JSON payload)
  initializeProductOrderControls();

  // 4. Reinitialize when quick-view modal is shown (if present)
  const modalElement = document.getElementById('quickViewModal');
  if (modalElement) {
    modalElement.addEventListener('shown.bs.modal', function () {
      initializeSwiperCarousels();
    });
  }

  console.log('A-Z Waterproofing standalone scripts initialized successfully.');
});

/**
 * Interactive filter pills for product showcase catalog
 */
function initializeProductFilters() {
  const filterButtons = document.querySelectorAll('#catalog-filters .filter-btn');
  const productItems = document.querySelectorAll('#products-grid .product-item');

  if (!filterButtons.length || !productItems.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => {
        b.classList.remove('btn-dark', 'active');
        b.classList.add('btn-outline-dark');
      });
      btn.classList.remove('btn-outline-dark');
      btn.classList.add('btn-dark', 'active');

      const filter = btn.getAttribute('data-filter');

      productItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'block';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease';
            item.style.opacity = '1';
          }, 20);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Manages the page loader overlay and paint brush animation dismissal
 */
function initializePageLoader() {
  const pageLoader = document.getElementById('page-loader');
  if (!pageLoader) return;

  const hideLoader = () => {
    if (!pageLoader.classList.contains('loaded')) {
      pageLoader.classList.add('loaded');
      setTimeout(() => {
        if (pageLoader.parentNode) {
          pageLoader.parentNode.removeChild(pageLoader);
        }
      }, 550);
    }
  };

  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 700);
  } else {
    window.addEventListener('load', () => {
      setTimeout(hideLoader, 700);
    });
    // Fallback safety timeout so user is never blocked
    setTimeout(hideLoader, 2500);
  }
}


/**
 * Initializes Swiper carousels across the site based on HTML data-attributes
 */
function initializeSwiperCarousels() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library is not loaded.');
    return;
  }

  const swiperContainers = document.querySelectorAll('.swiper-container');

  swiperContainers.forEach((swiperContainer) => {
    // Prevent double-initialization
    if (swiperContainer.swiper) {
      return;
    }

    const speed = swiperContainer.getAttribute('data-speed') || 400;
    const spaceBetween = swiperContainer.getAttribute('data-space-between') || 20;
    const paginationEnabled = swiperContainer.getAttribute('data-pagination') === 'true';
    const navigationEnabled = swiperContainer.getAttribute('data-navigation') === 'true';
    const autoplayEnabled = swiperContainer.getAttribute('data-autoplay') === 'true';
    const autoplayDelay = swiperContainer.getAttribute('data-autoplay-delay') || 3000;
    const paginationType = swiperContainer.getAttribute('data-pagination-type') || 'bullets';
    const centerSlides = swiperContainer.getAttribute('data-center-slides') === 'true';
    const effect = swiperContainer.getAttribute('data-effect') || 'slide';
    const thumbsEnabled = swiperContainer.getAttribute('data-thumbs') === 'true';

    let breakpoints = {};
    const breakpointsData = swiperContainer.getAttribute('data-breakpoints');
    if (breakpointsData) {
      try {
        breakpoints = JSON.parse(breakpointsData);
      } catch (error) {
        console.error('Error parsing breakpoints data:', error);
      }
    }

    const swiperOptions = {
      speed: parseInt(speed, 10),
      spaceBetween: parseInt(spaceBetween, 10),
      breakpoints: breakpoints,
      slidesPerView: 'auto',
      effect: effect,
    };

    if (effect === 'fade') {
      swiperOptions.fadeEffect = { crossFade: true };
    }

    if (centerSlides) {
      swiperOptions.centeredSlides = true;
    }

    // Pagination
    if (paginationEnabled) {
      const paginationEl = swiperContainer.querySelector('.swiper-pagination');
      if (paginationEl) {
        swiperOptions.pagination = {
          el: paginationEl,
          clickable: true,
          type: paginationType,
        };
      }
    }

    // Navigation
    if (navigationEnabled) {
      const nextButton = swiperContainer.querySelector('.swiper-button-next');
      const prevButton = swiperContainer.querySelector('.swiper-button-prev');
      swiperOptions.navigation = {
        nextEl: nextButton,
        prevEl: prevButton,
      };
    }

    // Autoplay
    if (autoplayEnabled) {
      swiperOptions.autoplay = {
        delay: parseInt(autoplayDelay, 10),
        disableOnInteraction: false,
      };
    }

    // Thumbs (optional)
    if (thumbsEnabled) {
      const thumbsContainer = swiperContainer.nextElementSibling;
      if (thumbsContainer && thumbsContainer.classList.contains('swiper-thumbs')) {
        const thumbsSwiper = new Swiper(thumbsContainer, {
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
        });
        swiperOptions.thumbs = { swiper: thumbsSwiper };
      }
    }

    // Initialize Swiper instance
    new Swiper(swiperContainer, swiperOptions);
  });
}

/**
 * Cookie Consent Banner
 * Shows a bottom banner on first visit; persists consent in localStorage.
 * Consent key: 'az_cookie_consent' — values: 'accepted' | 'declined'
 */
function initializeCookieBanner() {
  // Don't show if already answered
  if (localStorage.getItem('az_cookie_consent')) return;

  // Build the banner HTML
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.innerHTML = `
    <div class="cookie-banner__inner container">
      <div class="cookie-banner__text">
        <p class="cookie-banner__title">We use cookies</p>
        <p class="cookie-banner__body">
          We use essential and analytics cookies to improve your experience on our site.
          By clicking <strong>Accept</strong>, you consent to our use of cookies.
          Read our <a href="privacy-policy.html#cookies">Privacy Policy</a> to learn more.
        </p>
      </div>
      <div class="cookie-banner__actions">
        <button id="cookie-accept" class="btn btn-primary cookie-banner__accept">Accept All</button>
        <button id="cookie-decline" class="cookie-banner__decline">Decline</button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  // Slide in after a short delay (let the page settle first)
  setTimeout(() => {
    banner.classList.add('cookie-banner--visible');
  }, 1200);

  // Dismiss helper
  function dismissBanner(consent) {
    localStorage.setItem('az_cookie_consent', consent);
    banner.classList.remove('cookie-banner--visible');
    banner.classList.add('cookie-banner--hidden');
    // Remove from DOM after animation
    setTimeout(() => {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 450);
  }

  document.getElementById('cookie-accept').addEventListener('click', () => {
    dismissBanner('accepted');
  });

  document.getElementById('cookie-decline').addEventListener('click', () => {
    dismissBanner('declined');
  });
}

/**
 * Product Showcase Quantity Stepper & WhatsApp Checkout
 * Sends product name and selected quantity to WhatsApp (0597119749) in JSON format.
 */
function initializeProductOrderControls() {
  const cards = document.querySelectorAll('.product-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    const minusBtn = card.querySelector('.btn-minus');
    const plusBtn = card.querySelector('.btn-plus');
    const qtyInput = card.querySelector('.qty-val');
    const orderBtn = card.querySelector('.btn-whatsapp-order');
    const titleEl = card.querySelector('.product-name');

    if (!qtyInput || !orderBtn || !titleEl) return;

    if (minusBtn) {
      minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let current = parseInt(qtyInput.value, 10) || 1;
        if (current > 1) {
          qtyInput.value = current - 1;
        }
      });
    }

    if (plusBtn) {
      plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let current = parseInt(qtyInput.value, 10) || 1;
        if (current < 999) {
          qtyInput.value = current + 1;
        }
      });
    }

    qtyInput.addEventListener('change', () => {
      let val = parseInt(qtyInput.value, 10);
      if (isNaN(val) || val < 1) {
        qtyInput.value = 1;
      }
    });

    orderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = titleEl.textContent.trim();
      const quantity = Math.max(1, parseInt(qtyInput.value, 10) || 1);

      // JSON format with product name and quantity
      const orderPayload = {
        product: productName,
        quantity: quantity
      };

      const jsonString = JSON.stringify(orderPayload, null, 2);
      const whatsappUrl = `https://wa.me/233597119749?text=${encodeURIComponent(jsonString)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  });
}
