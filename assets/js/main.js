const $ = id => document.getElementById(id);

const app = {
    reg: window.quizConfig || {},
    st: { q: [], wrong: [], idx: 0, score: 0 },

    init() {
        const themeBtn = $('theme-toggle');
        if (themeBtn) {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
                themeBtn.innerText = '☀️';
            }
            themeBtn.onclick = () => {
                document.body.classList.toggle('dark-mode');
                if (document.body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                    themeBtn.innerText = '☀️';
                } else {
                    localStorage.setItem('theme', 'light');
                    themeBtn.innerText = '🌙';
                }
            };
        }

        app.view('view-menu');
        const list = $('list');
        if(!list) return;
        
        list.innerHTML = `
            <div class="text-center">
                <label class="shuffle-label">
                    <input type="checkbox" id="shuffle-toggle"> Mischia ordine domande
                </label>
            </div>
        `;
        
        Object.keys(app.reg).forEach(key => {
            const row = document.createElement('div');
            row.className = 'quiz-row';
            
            row.innerHTML = `
                <button class="btn-primary btn-quiz">${app.reg[key]}</button>
                <button class="btn-secondary btn-toggle-opt" title="Opzioni">⚙️</button>
                <div class="quiz-options">
                    <input type="number" id="start-${key}" placeholder="Da" min="1">
                    <input type="number" id="end-${key}" placeholder="A" min="1">
                    <button class="btn-secondary btn-pdf">PDF</button>
                </div>
            `;
            
            row.querySelector('.btn-quiz').onclick = () => {
                let s = parseInt($(`start-${key}`).value) || 1;
                let e = parseInt($(`end-${key}`).value) || null;
                app.load(key, s, e);
            };
            
            row.querySelector('.btn-pdf').onclick = () => app.print(key);
            
            row.querySelector('.btn-toggle-opt').onclick = () => {
                row.querySelector('.quiz-options').classList.toggle('show');
            };
            
            list.appendChild(row);
        });
    },

    load(k, startNum = 1, endNum = null) {
        let d = window[k + 'Data'];
        if (!d || !d.length) return alert('Dataset non trovato!');
        app.start(d.map(obj => ({...obj, answers: [...obj.answers]})), false, startNum, endNum);
    },

    start(qs, retry = false, startNum = 1, endNum = null) {
        let finalQs = qs;

        if (!retry) {
            finalQs.sort((a, b) => (parseInt(a.question) || 0) - (parseInt(b.question) || 0));
            
            let sIdx = Math.max(0, startNum - 1);
            let eIdx = endNum ? Math.min(finalQs.length, endNum) : finalQs.length;
            
            if (sIdx >= eIdx || sIdx >= finalQs.length) {
                alert('Range di domande inserito non valido!');
                return;
            }
            
            finalQs = finalQs.slice(sIdx, eIdx);
            
            const shuffle = $('shuffle-toggle')?.checked;
            if (shuffle) finalQs.sort(() => Math.random() - 0.5);
        }
        
        finalQs.forEach(q => q.answers.sort(() => Math.random() - 0.5));
        
        app.st = { q: finalQs, wrong: [], idx: 0, score: 0 };
        
        $('q-tot').innerText = finalQs.length;
        app.view('view-quiz');
        app.show();
    },

    show() {
        const { q, idx } = app.st;
        $('q-curr').innerText = idx + 1;
        $('q-text').innerText = q[idx].question.replace(/^\d+[\.\)]\s*/, '');
        
        const box = $('ans-box');
        box.innerHTML = '';
        $('btn-next').classList.add('hidden');
        window.scrollTo(0, 0);

        q[idx].answers.forEach((ans, i) => {
            let b = document.createElement('button');
            b.className = 'answer-btn btn-secondary';
            b.innerHTML = `<strong>${String.fromCharCode(65 + i)}.</strong> ${ans}`;
            b.onclick = () => app.check(b, ans, q[idx]);
            box.appendChild(b);
        });
        
        $('btn-next').onclick = () => { app.st.idx++; app.show(); };
        $('btn-end').onclick = app.end;
    },

    check(btn, ans, curr) {
        const btns = document.querySelectorAll('.answer-btn');
        btns.forEach(b => b.disabled = true);

        if (ans === curr.correctAnswer) {
            btn.classList.replace('btn-secondary', 'correct');
            app.st.score++;
        } else {
            btn.classList.replace('btn-secondary', 'incorrect');
            if (!app.st.wrong.includes(curr)) app.st.wrong.push(curr);
            btns.forEach(b => b.innerText.includes(curr.correctAnswer) && b.classList.replace('btn-secondary', 'correct'));
        }
        
        if (app.st.idx < app.st.q.length - 1) {
            $('btn-next').classList.remove('hidden');
        }
    },

    end() {
        app.view('view-end');
        const { q, score, wrong } = app.st;
        let errHtml = wrong.length ? `<br><small style="color:var(--danger)">Errori: ${wrong.length}</small>` : '';
        $('score').innerHTML = `Punteggio: ${score} / ${q.length}${errHtml}`;
        
        const errBox = $('err-box');
        errBox.innerHTML = '';
        if (wrong.length) {
            let b = document.createElement('button');
            b.className = 'btn-primary';
            b.textContent = `Ripeti ${wrong.length} errori`;
            b.onclick = () => app.start([...wrong], true);
            errBox.appendChild(b);
        }
    },

    view(id) {
        ['view-menu', 'view-quiz', 'view-end'].forEach(v => {
            if($(v)) $(v).classList.add('hidden');
        });
        if($(id)) $(id).classList.remove('hidden');
    },

    print(k) {
        let d = window[k + 'Data'];
        if (!d || !d.length) return;
        let html = `<h1>${app.reg[k]}</h1>`;
        
        d.sort((a,b) => (parseInt(a.question)||0)-(parseInt(b.question)||0)).forEach((q, i) => {
            html += `<div class="print-item"><div class="print-question">${i+1}. ${q.question.replace(/^\d+[\.\)]\s*/, '')}</div><ul class="print-options">`;
            q.answers.forEach(a => {
                let isC = a === q.correctAnswer;
                html += `<li class="${isC ? 'print-correct' : ''}">${isC ? '[X]' : '[ ]'} ${a}</li>`;
            });
            html += `</ul></div>`;
        });
        
        $('print-area').innerHTML = html;
        window.print();
    }
};

document.addEventListener('keydown', (e) => {
    if (!$('view-quiz') || $('view-quiz').classList.contains('hidden')) return;
    if (['1','2','3','4'].includes(e.key)) {
        let btn = document.querySelectorAll('.answer-btn')[parseInt(e.key)-1];
        if (btn && !btn.disabled) btn.click();
    }
    if (e.key === 'Enter' && !$('btn-next').classList.contains('hidden')) $('btn-next').click();
});

window.onload = app.init;