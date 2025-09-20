// 9Planets Website - Hauptdatei
import './style.css'

// Übersetzungen
const translations = {
  de: {
    'nav.home': 'Home',
    'nav.about': 'Über uns',
    'nav.artists': 'Künstler',
    'nav.releases': 'Releases',
    'nav.contact': 'Kontakt',
    'hero.subtitle': 'Sound Beyond Gravity',
    'hero.description': 'Musik für offene Räume und innere Reisen.<br>9Planets verbindet elektronische Klänge zu einer eigenen Erzählung.',
    'hero.listen': 'Musik hören',
    'hero.discover': 'Entdecken',
    'about.title': 'Über 9Planets',
    'about.mission': 'Für uns ist Musik eine universelle Sprache, die verbindet. Wir veröffentlichen elektronische Musik, die offen ist für das Emotionale, das Experimentelle, das Unerwartete. Dabei liegt unser Fokus auf Sounds, die sich entfalten dürfen – jenseits von Formeln, nah am klanglichen Ausdruck.',
    'about.experimental': 'Ansatz',
    'about.emotional': 'Fokus',
    'about.authentic': 'Ausdruck',
    'artists.title': 'Künstler',
    'releases.title': 'Releases',
    'contact.title': 'Kontakt',
    'contact.getInTouch': 'Kontakt aufnehmen',
    'contact.description': 'Hast Du Fragen oder Interesse an einer Zusammenarbeit?',
    'contact.send': 'Senden',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.artists': 'Artists',
    'nav.releases': 'Releases',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Sound Beyond Gravity',
    'hero.description': 'Music for open spaces and inner journeys.<br>9Planets connects electronic sounds into a unique narrative.',
    'hero.listen': 'Listen to Music',
    'hero.discover': 'Discover',
    'about.title': 'About 9Planets',
    'about.mission': 'For us, music is a universal language that connects. We release electronic music that is open to the emotional, the experimental, the unexpected. Our focus is on sounds that are allowed to unfold – beyond formulas, close to sonic expression.',
    'about.experimental': 'Approach',
    'about.emotional': 'Focus',
    'about.authentic': 'Expression',
    'artists.title': 'Artists',
    'releases.title': 'Releases',
    'contact.title': 'Contact',
    'contact.getInTouch': 'Get in Touch',
    'contact.description': 'Do you have questions or are you interested in collaboration?',
    'contact.send': 'Send',
    'footer.imprint': 'Legal Notice',
    'footer.privacy': 'Privacy Policy'
  }
};

// Aktuelle Sprache
let currentLanguage = 'de';

// App initialisieren
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 9Planets Website geladen!');
  
  initializeLanguageSwitcher();
  initializeSmoothScrolling();
  initializeNavigation();
  initializeContactForm();
// Video Background mit sanftem Loop
function initializeVideoBackground() {
  const video = document.querySelector('.background-video');
  
  if (video) {
    // Ensure video is muted for autoplay
    video.muted = true;
    
    // Sanfter Loop-Übergang
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });
    
    // Handle video load errors
    video.addEventListener('error', () => {
      console.log('Video failed to load, using fallback background');
      document.body.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)';
    });
    
    // Optimize video for mobile
    if (window.innerWidth <= 768) {
      video.style.display = 'none';
      document.body.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)';
    }
  }
}
});

// Sprachumschaltung
function initializeLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      switchLanguage(lang);
      
      // Aktiven Button updaten
      langButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

function switchLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  
  // Alle Elemente mit data-i18n Attribut updaten
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  console.log(`Sprache gewechselt zu: ${lang}`);
}

// Smooth Scrolling
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navHeight = document.querySelector('.glass-nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Navigation
function initializeNavigation() {
  const nav = document.querySelector('.glass-nav');
  
  // Scroll-Effekt für Navigation
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(0, 0, 0, 0.3)';
    } else {
      nav.style.background = 'rgba(0, 0, 0, 0.1)';
    }
  });
}

// Kontaktformular
function initializeContactForm() {
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Formulardaten holen
      const inputs = form.querySelectorAll('input, textarea');
      const name = inputs[0].value;
      const email = inputs[1].value;
      const message = inputs[2].value;
      
      // Einfache Validierung
      if (!name || !email || !message) {
        alert(currentLanguage === 'de' 
          ? 'Bitte fülle alle Felder aus.' 
          : 'Please fill out all fields.');
        return;
      }
      
      // Erfolgsmeldung
      alert(currentLanguage === 'de' 
        ? 'Vielen Dank für deine Nachricht! Ich melde mich bald bei dir.' 
        : 'Thank you for your message! I will get back to you soon.');
      
      // Formular zurücksetzen
      form.reset();
      
      console.log('Kontaktformular abgeschickt:', { name, email, message });
    });
  }
}

// Animationen
function initializeAnimations() {
  // Intersection Observer für Scroll-Animationen
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Alle Sektionen beobachten
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
  
  // Parallax-Effekt für Hero-Sektion
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-section');
    if (parallax) {
      const speed = scrolled * 0.3;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });
}

// Play-Buttons für Releases
function initializePlayButtons() {
  const playButtons = document.querySelectorAll('.play-btn');
  
  playButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Button-Animation
      this.style.transform = 'scale(0.9)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
      
      // Hier würdest du später echte Audio-URLs einbinden
      console.log('Play-Button geklickt - Audio würde hier starten');
      
      alert(currentLanguage === 'de' 
        ? 'Audio-Preview kommt bald!' 
        : 'Audio preview coming soon!');
    });
  });
}

// Performance-Optimierung
function optimizePerformance() {
  // Lazy Loading für Bilder (später für echte Bilder)
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
}

// Performance-Optimierung starten
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Console-Begrüßung
console.log('%c🌟 9Planets - Sound Beyond Gravity 🌟', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cWebsite erfolgreich geladen! 🚀', 'color: #a78bfa; font-size: 12px;');