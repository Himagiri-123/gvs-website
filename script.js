/* ==========================================
   1. LANGUAGE DATA
   ========================================== */
let currentLang = 'en';

const translations = {
    en: {
        navTitle: "Grameena Vikas Sangham",
        navHome: "Home", navAbout: "About", navInitiatives: "Initiatives", navDonate: "Donate", navContact: "Contact",
        homeHeading: "Grameena Vikas Sangham",
        homePara: "Committed to the holistic development of rural communities through education, healthcare, and sustainable livelihood initiatives.",
        homeBtn: "Explore Our Initiatives",
        aboutHeading: "About Grameena Vikas Sangham",
        pillarsHeading: "Our Pillars of Success",
        initiativesHeading: "Our Initiatives",
        donateHeading: "Support Our Cause",
        donatePara: "Your small contribution can bring a big change in rural lives.",
        bankHeading: "Bank Transfer",
        contactHeading: "Contact Us",
        // Initiatives Cards
        iTitles: ["Education", "Health", "Agriculture", "Environment", "Skill Development", "Spirituality", "Others"],
        iTexts: [
            "Empowering rural children with quality education and support.",
            "Providing medical assistance and free health camps.",
            "Supporting farmers with modern techniques.",
            "Promoting tree plantation and eco-friendly living.",
            "Vocational training for rural youth.",
            "Encouraging moral values and peace.",
            "General welfare activities."
        ],
        viewGallery: "View in Gallery →"
    },
    te: {
        navTitle: "గ్రామీణ వికాస సంఘం",
        navHome: "హోమ్", navAbout: "మా గురించి", navInitiatives: "కార్యక్రమాలు", navDonate: "విరాళం", navContact: "సంప్రదించండి",
        homeHeading: "గ్రామీణ వికాస సంఘం",
        homePara: "విద్య, వైద్యం మరియు స్థిరమైన ఉపాధి కార్యక్రమాల ద్వారా గ్రామీణ సమాజాల సమగ్ర అభివృద్ధికి కట్టుబడి ఉన్నాము.",
        homeBtn: "మా కార్యక్రమాలను చూడండి",
        aboutHeading: "గ్రామీణ వికాస సంఘం గురించి",
        pillarsHeading: "మా విజయానికి మూలస్తంభాలు",
        initiativesHeading: "మా కార్యక్రమాలు",
        donateHeading: "మా ఆశయానికి సహకరించండి",
        donatePara: "మీరు ఇచ్చే చిన్న విరాళం గ్రామీణ జీవితాల్లో పెద్ద మార్పును తెస్తుంది.",
        bankHeading: "బ్యాంక్ బదిలీ",
        contactHeading: "మమ్మల్ని సంప్రదించండి",
        // Initiatives Cards
        iTitles: ["విద్య", "వైద్యం", "వ్యవసాయం", "పర్యావరణం", "నైపుణ్యాభివృద్ధి", "ఆధ్యాత్మికం", "ఇతర సేవలు"],
        iTexts: [
            "గ్రామీణ విద్యార్థులకు నాణ్యమైన విద్య మరియు తోడ్పాటు.",
            "ఉచిత వైద్య శిబిరాలు మరియు ఆరోగ్య సహాయం.",
            "రైతులకు ఆధునిక వ్యవసాయ పద్ధతుల్లో సహాయం.",
            "మొక్కల పెంపకం మరియు పకృతి రక్షణ.",
            "యువతకు ఉపాధి నైపుణ్యాల కల్పన.",
            "నైతిక విలువలు మరియు ఆధ్యాత్మిక వికాసం.",
            "గ్రామీణ అభివృద్ధి సేవా కార్యక్రమాలు."
        ],
        viewGallery: "గ్యాలరీ చూడండి →"
    }
};

/* ==========================================
   2. LANGUAGE TOGGLE FUNCTION
   ========================================== */
function toggleLanguage() {
    currentLang = (currentLang === 'en') ? 'te' : 'en';
    updateContent();
}

function updateContent() {
    const lang = translations[currentLang];
    
    // Update Navbar
    document.getElementById('nav-brand').innerText = lang.navTitle;
    document.getElementById('lang-home').innerText = lang.navHome;
    document.getElementById('lang-about').innerText = lang.navAbout;
    document.getElementById('lang-initiatives').innerText = lang.navInitiatives;
    document.getElementById('lang-donate').innerText = lang.navDonate;
    document.getElementById('lang-contact').innerText = lang.navContact;

    // Update Home
    document.getElementById('home-h').innerText = lang.homeHeading;
    document.getElementById('home-p').innerText = lang.homePara;
    document.getElementById('home-btn').innerText = lang.homeBtn;

    // Update Headings
    if(document.getElementById('about-h')) document.getElementById('about-h').innerText = lang.aboutHeading;
    if(document.getElementById('pillars-h')) document.getElementById('pillars-h').innerText = lang.pillarsHeading;
    if(document.getElementById('initiatives-h')) document.getElementById('initiatives-h').innerText = lang.initiativesHeading;
    if(document.getElementById('donate-h')) document.getElementById('donate-h').innerText = lang.donateHeading;
    if(document.getElementById('donate-p')) document.getElementById('donate-p').innerText = lang.donatePara;
    if(document.getElementById('bank-h')) document.getElementById('bank-h').innerText = lang.bankHeading;
    if(document.getElementById('contact-h')) document.getElementById('contact-h').innerText = lang.contactHeading;

    // Update Initiative Cards
    const titles = document.querySelectorAll('.card-title');
    const descs = document.querySelectorAll('.card-desc');
    const links = document.querySelectorAll('.view-link');

    titles.forEach((el, i) => { if(lang.iTitles[i]) el.innerText = lang.iTitles[i]; });
    descs.forEach((el, i) => { if(lang.iTexts[i]) el.innerText = lang.iTexts[i]; });
    links.forEach(el => { el.innerText = lang.viewGallery; });

    // Update Toggle Button
    document.getElementById('lang-btn').innerText = (currentLang === 'en') ? "తెలుగు" : "English";
}

/* ==========================================
   3. OTHER FUNCTIONS (Gallery, Menu, Scroll)
   ========================================== */
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

function openGallery(folder, title) {
    const overlay = document.getElementById("galleryOverlay");
    document.getElementById("dynamicTitle").innerText = title + " Gallery";
    const content = document.getElementById("galleryContent");
    content.innerHTML = ""; 
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";

    for (let i = 1; i <= 8; i++) {
        const img = document.createElement("img");
        img.src = `images/gallery/${folder}/${i}.jpg`;
        img.onerror = function() { this.style.display = 'none'; };
        img.onclick = function() { openImage(this.src); };
        content.appendChild(img);
    }
}

function closeGallery() {
    document.getElementById("galleryOverlay").style.display = "none";
    document.body.style.overflow = "auto";
}

function openImage(src) {
    const popup = document.createElement("div");
    popup.style = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:10000;";
    popup.onclick = () => popup.remove();
    const img = document.createElement("img");
    img.src = src;
    img.style = "max-width:90%;max-height:90%;border-radius:8px;";
    popup.appendChild(img);
    document.body.appendChild(popup);
}

// Smooth Scroll
document.querySelectorAll('.nav-right a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
            document.getElementById("navMenu").classList.remove("show");
        }
    });
});