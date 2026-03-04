const mainContent = document.getElementById('main-content');
const homeLogo = document.getElementById('home-logo');

// Configurazione Materie
const materie = {
    'sdi': {
        title: 'Modulo Utente SDI',
        data: ['assets/js/sdi/sdi1-data.js', 'assets/js/sdi/sdi2-data.js'],
        config: { 'sdi1': 'SDI - Tutte le domande', 'sdi2': 'SDI - Obiettivi Formativi' }
    },
    'crim': {
        title: 'Criminalistica',
        data: ['assets/js/crim/crim1-data.js', 'assets/js/crim/crim2-data.js', 'assets/js/crim/crim3-data.js'],
        config: { 'crim1': 'Criminalistica - 2023-2024 (179 dom)', 'crim2': 'Criminalistica - Vecchie BD (88 dom)', 'crim3': 'Criminalistica - NEW' }
    },
    'prociv': {
        title: 'Procedura Civile',
        data: ['assets/js/prociv/prociv-data.js'],
        config: { 'prociv': 'Procedura Civile - Anni Precedenti' }
    },
    'dircom': {
        title: 'Diritto Commerciale',
        data: ['assets/js/dircom/dircom1-data.js','assets/js/dircom/dircom2-data.js'],
        config: { 'dircom1': 'Diritto Commerciale - Quiz 1 (224 domande)','dircom2': 'Diritto Commerciale - Quiz 2 (281 domande)'}
    },
    'dirue': {
        title: 'Diritto UE',
        data: ['assets/js/dirue/dirue1-data.js', 'assets/js/dirue/dirue2-data.js', 'assets/js/dirue/dirue3-data.js', 'assets/js/dirue/dirue4-data.js', 'assets/js/dirue/dirue5-data.js'],
        config: { 'dirue1': 'Dir. UE - 10 domande', 'dirue2': 'Dir. UE - 65 domande', 'dirue3': 'Dir. UE - 65 domande v2', 'dirue4': 'Dir. UE - 110 domande', 'dirue5': 'Dir. UE - 111 domande'}
    },
    'tecinv2': {
        title: 'Tecniche Investigative',
        data: ['assets/js/tecinv2/tecinv2-data.js'],
        config: { 'tecinv2': 'Tecniche Investigative - Completo' }
    }
};

async function navigate(view, materiaKey = null) {
    mainContent.style.opacity = '0'; // Dissolvenza in uscita
    
    try {
        const response = await fetch(`views/${view}.html`);
        const html = await response.text();
        
        setTimeout(() => {
            mainContent.innerHTML = html;
            
            if (materiaKey && materie[materiaKey]) {
                const m = materie[materiaKey];
                homeLogo.innerText = `Moodle SCM - ${m.title}`;
                window.quizConfig = m.config;
                
                // Correzione: richiamiamo l'app in modo globale e sicuro
                loadMultipleScripts(m.data, () => {
                    if (typeof app !== 'undefined') {
                        app.reg = window.quizConfig;
                        app.init();
                    }
                });
            } else {
                // Siamo tornati alla Home
                homeLogo.innerText = "Moodle SCM";
                if (typeof initCountdown !== 'undefined') initCountdown();
            }
            
            mainContent.style.opacity = '1'; // Dissolvenza in entrata
        }, 200);
    } catch (e) {
        mainContent.innerHTML = "<div class='card text-center'><h2>Errore</h2><p>Impossibile caricare la pagina.</p></div>";
        mainContent.style.opacity = '1';
    }
}

// Funzione per caricare i file dei database dinamicamente
function loadMultipleScripts(scripts, callback) {
    let loaded = 0;
    scripts.forEach(src => {
        // Rimuove la versione vecchia se esiste per pulire la memoria
        const oldScript = document.querySelector(`script[src="${src}"]`);
        if (oldScript) oldScript.remove();

        const s = document.createElement('script');
        s.src = src;
        s.onload = () => { if (++loaded === scripts.length) callback(); };
        document.body.appendChild(s);
    });
}

// Eventi
homeLogo.onclick = () => navigate('home');
window.addEventListener('DOMContentLoaded', () => navigate('home'));