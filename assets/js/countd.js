(function() {
    const $ = id => document.getElementById(id);
    const targetDate = '2026-06-26T00:00:00';
    let target = new Date(targetDate).getTime();

    const update = () => {
        const el = $('full-countdown');
        if (!el) return;
        const diff = target - new Date().getTime();
        
        if (diff <= 0) {
            el.innerText = "TRAGUARDO RAGGIUNTO!";
            return;
        }

        const d = Math.floor(diff / 864e5);
        const h = Math.floor((diff % 864e5) / 36e5).toString().padStart(2, '0');
        const m = Math.floor((diff % 36e5) / 6e4).toString().padStart(2, '0');
        const s = Math.floor((diff % 6e4) / 1e3).toString().padStart(2, '0');
        
        // Formato compatto e pulito: "X giorni, 00:00:00"
        el.innerText = `${d} giorni, ${h}h, ${m}m, ${s}s`;
    };

    document.addEventListener('DOMContentLoaded', () => {
        const btn = $('set-date-btn'), input = $('date-input');
        if (input) input.value = targetDate.split('T')[0];
        
        if (btn) btn.onclick = () => { 
            if (input.value) {
                target = new Date(input.value + 'T00:00:00').getTime(); 
                update(); 
            }
        };
        
        setInterval(update, 1000); 
        update();
    });
})();