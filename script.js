/**
 * KINETIX WORKS - MAIN SCRIPT
 */

// Global State
const state = {
    lang: 'en'
};

// Dictionary for EN / ES
const dictionary = {
    en: {
        // Nav
        navWho: "Who We Are",
        navAbout: "About",
        navServices: "Services",
        navPortfolio: "Portfolio",
        navContact: "Contact",
        navCTA: "Contact Us",
        
        // Hero
        heroHeadline: "Engineering That Gets Built.",
        heroSubhead: "We design and deliver industrial food systems that move from concept to commissioning — faster, smarter, and fully executable. From single machines to complete plants.",
        heroCTA1: "Build Your Plant",
        heroCTA2: "Modernize Your Factory",
        
        // Who
        whoHeading: "For Plant Owners, Investors, and Factory Modernization Leaders.",
        whoCard1Title: "Plant Owners",
        whoCard1Desc: "Scaling production, resolving bottlenecks, and building new lines to match market demand.",
        whoCard2Title: "Investors",
        whoCard2Desc: "Developing new greenfield facilities and seeking reliable execution and CAPEX control.",
        whoCard3Title: "Modernization Leaders",
        whoCard3Desc: "Upgrading aging lines for automation, efficiency, and energy optimization.",
        
        // About
        aboutHeading: "Execution First. Always.",
        aboutP1: "Founded on over 20 years of hands-on engineering leadership in the food and beverage industry, Kinetix Works combines scientific rigor, industrial creativity, and real-world execution.",
        aboutP2: "We do not operate as a theoretical consultancy. We design systems that are fabricated, installed, commissioned, and optimized in live production environments.",
        statYears: "Years",
        statInd: "Industries",
        statComm: "Commissioning",
        
        // Advantage
        adv1Title: "Fast Delivery.",
        adv1Desc: "Integrated engineering reduces coordination delays and accelerates project timelines. Design, simulation, fabrication supervision, automation, and commissioning are aligned from day one.",
        adv2Title: "Innovation with Purpose.",
        adv2Desc: "We develop proprietary process improvements. Our redesigned evaporator for condensed milk improved energy performance by 10%. Our instant coffee technology preserves volatile aromas typically lost.",
        adv3Title: "Complete Engineering.",
        adv3Desc: "Process engineering, mechanical design, automation, utilities, and quality systems integration are executed as a single coordinated solution.",

        // Services
        servicesHeading: "Our Services",
        serv1Title: "Process Engineering & Plant Design",
        serv1Desc: "Basic and detailed engineering for food processing facilities. Layout development, equipment specification, utilities integration, civil coordination, assembly supervision, and commissioning support.",
        serv2Title: "Custom Machinery Design & Manufacturing",
        serv2Desc: "Design and fabrication supervision of mixers, cyclones, evaporators, spray dryers, extraction systems, tanks, and heat exchangers. Validated through calculation, CFD simulation, and structural analysis.",
        serv3Title: "Automation & Control Systems",
        serv3Desc: "PLC programming, HMI development, SCADA systems, VFD and servo commissioning, and control panel engineering. Projects have reduced operating personnel by up to 40% and increased efficiency by 50%.",
        serv4Title: "Factory Modernization & Optimization",
        serv4Desc: "Energy audits, process debottlenecking, automation retrofits, and performance optimization of existing plants to improve throughput, efficiency, and reliability.",
        
        // Portfolio
        portfolioHeading: "Selected Projects",
        port1Title: "Dairy Processing Line",
        tagDairy: "Dairy",
        port1Desc: "Complete design and commissioning of a high-efficiency dairy processing line.",
        port2Title: "Instant Coffee Extraction",
        tagCoffee: "Coffee",
        port2Desc: "Innovative system preserving volatile aroma compounds typically lost in standard processes.",
        port3Title: "Evaporator Retrofit",
        tagMilk: "Condensed Milk",
        port3Desc: "Redesigned evaporator system yielding a 10% improvement in energy performance.",

        // Philosophy
        philQuote: '"Built from First Principles. Delivered in Steel and Code."',
        philTagline: "Innovation that runs in production.",

        // Contact
        contactHeading: "Let's Build Something.",
        contactDesc: "Ready to start your next project? Speak with our expert engineering team for a comprehensive feasibility consultation or a technical walkthrough of your existing facilities.",
        contactLocation: "Global Operations",
        formName: "Full Name",
        formCompany: "Company",
        formEmail: "Email Address",
        formMessage: "Project Details / Message",
        formSubmit: "Send Message",

        // Form feedback
        formPleaseWait: "Please wait...",
        formSuccess: "Form submitted successfully.",
        formError: "Something went wrong!",

        // Footer
        footerRights: "All rights reserved."
    },
    es: {
        // Nav
        navWho: "Quiénes Somos",
        navAbout: "Acerca de",
        navServices: "Servicios",
        navPortfolio: "Portafolio",
        navContact: "Contacto",
        navCTA: "Contáctanos",
        
        // Hero
        heroHeadline: "Ingeniería Que Se Construye.",
        heroSubhead: "Diseñamos y entregamos sistemas industriales alimentarios que pasan del concepto a la puesta en marcha: más rápido, más inteligente y totalmente ejecutable. Desde máquinas individuales hasta plantas completas.",
        heroCTA1: "Construye tu Planta",
        heroCTA2: "Moderniza tu Fábrica",
        
        // Who
        whoHeading: "Para Propietarios de Plantas, Inversionistas y Líderes de Modernización.",
        whoCard1Title: "Propietarios",
        whoCard1Desc: "Escalando la producción, resolviendo cuellos de botella y construyendo nuevas líneas para adaptarse al mercado.",
        whoCard2Title: "Inversionistas",
        whoCard2Desc: "Desarrollando nuevas instalaciones y buscando ejecución confiable y control de CAPEX.",
        whoCard3Title: "Líderes de Modernización",
        whoCard3Desc: "Actualizando líneas antiguas para automatización, eficiencia y optimización energética.",
        
        // About
        aboutHeading: "La Ejecución Primero. Siempre.",
        aboutP1: "Fundada sobre más de 20 años de liderazgo práctico en ingeniería en la industria de alimentos y bebidas, Kinetix Works combina rigor científico, creatividad industrial y ejecución en el mundo real.",
        aboutP2: "No operamos como una consultoría teórica. Diseñamos sistemas que se fabrican, instalan, ponen en marcha y optimizan en entornos de producción en vivo.",
        statYears: "Años",
        statInd: "Industrias",
        statComm: "Puesta en marcha",
        
        // Advantage
        adv1Title: "Entrega Rápida.",
        adv1Desc: "La ingeniería integrada reduce los retrasos y acelera el proyecto. Diseño, simulación, supervisión, automatización y puesta en marcha se alinean desde el primer día.",
        adv2Title: "Innovación con Propósito.",
        adv2Desc: "Desarrollamos mejoras de procesos. Nuestro evaporador para leche condensada mejoró el rendimiento energético un 10%. Nuestra tecnología de café instantáneo preserva los aromas.",
        adv3Title: "Ingeniería Completa.",
        adv3Desc: "La ingeniería de procesos, diseño mecánico, automatización, servicios públicos e integración de sistemas de calidad se ejecutan como una solución única y coordinada.",

        // Services
        servicesHeading: "Nuestros Servicios",
        serv1Title: "Ingeniería de Procesos y Diseño de Planta",
        serv1Desc: "Ingeniería básica y de detalle para instalaciones de procesamiento de alimentos. Desarrollo de layout, especificación de equipos, integración de servicios públicos, coordinación civil, supervisión de montaje y apoyo en puesta en marcha.",
        serv2Title: "Diseño y Fabricación de Maquinaria a Medida",
        serv2Desc: "Diseño y supervisión en fabricación de mezcladores, ciclones, evaporadores, secadores, sistemas de extracción, tanques e intercambiadores. Validado mediante cálculos, simulación y análisis estructural.",
        serv3Title: "Automatización y Control",
        serv3Desc: "Programación de PLC, desarrollo de HMI, SCADA, puesta en marcha de VFD/servos, e ingeniería de paneles. Proyectos redujeron personal operativo hasta un 40% y aumentaron la eficiencia hasta un 50%.",
        serv4Title: "Modernización de Fábricas y Optimización",
        serv4Desc: "Auditorías energéticas, eliminación de cuellos de botella, automatización y optimización de rendimiento en plantas existentes para mejorar el rendimiento, eficiencia y confiabilidad.",
        
        // Portfolio
        portfolioHeading: "Proyectos Destacados",
        port1Title: "Línea de Lácteos",
        tagDairy: "Lácteos",
        port1Desc: "Diseño completo y puesta en marcha de una línea de alto rendimiento.",
        port2Title: "Extracción de Café Instantáneo",
        tagCoffee: "Café",
        port2Desc: "Sistema innovador que preserva aromas comúnmente perdidos en el proceso.",
        port3Title: "Retrofit de Evaporador",
        tagMilk: "Leche Condensada",
        port3Desc: "Rediseño de sistema evaporador logrando un 10% de mejora energética.",

        // Philosophy
        philQuote: '"Construido desde Principios Fundamentales. Entregado en Acero y Código."',
        philTagline: "Innovación que rinde en producción.",

        // Contact
        contactHeading: "Construyamos Algo.",
        contactDesc: "¿Listo para comenzar tu próximo proyecto? Habla con nuestro equipo de expertos en ingeniería para una consulta de viabilidad o una revisión técnica de tus instalaciones.",
        contactLocation: "Operaciones Globales",
        formName: "Nombre Completo",
        formCompany: "Empresa",
        formEmail: "Correo Electrónico",
        formMessage: "Detalles del Proyecto / Mensaje",
        formSubmit: "Enviar Mensaje",

        // Form feedback
        formPleaseWait: "Por favor espera...",
        formSuccess: "Formulario enviado con éxito.",
        formError: "¡Algo salió mal!",

        // Footer
        footerRights: "Todos los derechos reservados."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initi18n();
    initScrollEffects();
    initCounters();
    initForm();
    initMobileMenu();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const links = document.querySelector('.nav-links');
    
    if (btn && links) {
        btn.addEventListener('click', () => {
            if (links.style.display === 'flex') {
                links.style.display = 'none';
            } else {
                links.style.display = 'flex';
                links.style.flexDirection = 'column';
                links.style.position = 'absolute';
                links.style.top = '100%';
                links.style.left = '0';
                links.style.width = '100%';
                links.style.backgroundColor = 'var(--white)';
                links.style.padding = '20px';
                links.style.boxShadow = 'var(--shadow-nav)';
                links.style.alignItems = 'flex-start';
                
                // Add event listeners to close menu on click
                links.querySelectorAll('a').forEach(a => {
                    a.addEventListener('click', () => {
                        if(window.innerWidth <= 768) {
                            links.style.display = 'none';
                        }
                    });
                });
            }
        });
        
        // Reset on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                links.style.display = 'flex';
                links.style.flexDirection = 'row';
                links.style.position = 'static';
                links.style.padding = '0';
                links.style.boxShadow = 'none';
            } else {
                links.style.display = 'none';
            }
        });
    }
}

/**
 * Web3Forms Submit Handler
 */
function initForm() {
    const form = document.getElementById('contactForm');
    const result = document.getElementById('result');
    const submitBtn = document.querySelector('.submit-btn');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable button
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = dictionary[state.lang].formPleaseWait;
        submitBtn.disabled = true;
        
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.innerHTML = "";
        result.classList.remove('success', 'error');

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let jsonResponse = await response.json();
            if (response.status == 200) {
                result.innerHTML = dictionary[state.lang].formSuccess;
                result.classList.add('success');
            } else {
                console.log(response);
                result.innerHTML = jsonResponse.message;
                result.classList.add('error');
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = dictionary[state.lang].formError;
            result.classList.add('error');
        })
        .finally(() => {
            form.reset();
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            
            // Clean up Turnstile if available
            if (typeof turnstile !== 'undefined') {
                turnstile.reset();
            }
            
            setTimeout(() => {
                result.innerHTML = "";
            }, 5000);
        });
    });
}

/**
 * Animated Counters
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const countUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    
                    // Lower inc to slow and higher to fast
                    const inc = target / speed;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        countUpObserver.observe(counter);
    });
}

/**
 * Initialization for Internationalization
 */
function initi18n() {
    const toggleBtn = document.getElementById('langToggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        // Toggle language
        state.lang = state.lang === 'en' ? 'es' : 'en';
        
        // Update button text
        toggleBtn.textContent = state.lang === 'en' ? 'ES' : 'EN';
        
        // Update all translated strings
        updateTextContent();
    });
    
    // Initial content update
    updateTextContent();
}

function updateTextContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[state.lang] && dictionary[state.lang][key]) {
            el.textContent = dictionary[state.lang][key];
        }
    });
}

/**
 * Scroll Effects (Nav shadow, Fade-up animations)
 */
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-up elements
    const fadeElements = document.querySelectorAll('.fade-up');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });
}
