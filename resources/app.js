/* ============================================================
   Piano Nutrizionale — Pier
   app.js — React (no build)
   ============================================================ */

// Dati della dieta (fonte unica)
const DATA = {
  on: {
    label: 'Giorni ON',
    macros: { kcal: 2800, prot: 240, carb: 310, fat: 55 },
    meals: [
      {
        id: 'on-colazione',
        icon: '🌅',
        name: 'Colazione',
        time: 'Mattina · appena sveglio',
        kcal: '~560',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '350 ml albume',
              '200 ml latte scremato / mandorla / soia + 40 gr proteine isolate',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1',
            items: [
              "60 gr farina d'avena + 10 gr cornflakes",
              '60 gr cornflakes',
            ],
          },
          {
            type: 'fat',
            title: 'Grassi — scegli 1',
            items: [
              '30 gr burro di arachidi',
              '30 gr altra crema spalmabile',
              '30 gr frutta secca',
              '15 gr olio',
            ],
          },
        ],
        note: '💡 Puoi aggiungere 30–40 gr di marmellata Hero Light',
        supp:
          '💊 Con la colazione: 1 Multivitaminico · 2 Omega-3 · 1 Vit C · 30 mg Zinco · 50 mg Vit D · 300 mg ALA',
      },
      {
        id: 'on-spuntino-mattina',
        icon: '🍎',
        name: 'Spuntino Mattina',
        time: 'Metà mattinata',
        kcal: '~370',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '150 gr petto di pollo / tacchino / fesa / bresaola / prosciutto crudo sgrassato / tonno al naturale in vetro',
              '300 gr yogurt Fage 0% grassi',
              '35 gr proteine Whey o Isolate',
              '300 ml albume',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1',
            items: [
              '50 gr gallette',
              '75 gr pane di segale o integrale',
              '50 gr crema di riso o farina di riso',
              "60 gr farina d'avena",
            ],
          },
          {
            type: 'fat',
            title: 'Grassi — scegli 1',
            items: ['20 gr frutta secca', '10 gr olio', '20 gr burro di arachidi'],
          },
        ],
      },
      {
        id: 'on-pranzo',
        icon: '🍽️',
        name: 'Pranzo',
        time: 'Mezzogiorno',
        kcal: '~750',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '200 gr petto di pollo o tacchino',
              '250 gr pesce magro (merluzzo, spigola, orata, sogliola o gamberetti)',
              '200 gr carne rossa magra',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1',
            items: [
              '80 gr riso o pasta',
              '120 gr pane di segale o integrale',
              '80 gr gallette',
              '320 gr patate o patate dolci bollite / al forno — olio sempre a crudo',
              '200 gr gnocchi di patate',
            ],
          },
          { type: 'fat', title: 'Grassi', items: ['10 gr olio'] },
        ],
        note:
          '💡 Per ogni 100 gr legumi cotti (piselli, lenticchie, fagioli, ceci): togli 10 gr riso/pasta + 25 gr pollo · 🍅 Puoi aggiungere 100–150 gr polpa di pomodoro + 100 gr verdura a scelta',
        badge: '⚗️ 600 mg ALA dopo il pasto',
      },
      {
        id: 'on-post-workout',
        icon: '💪',
        name: 'Spuntino Post-Workout',
        time: "Subito dopo l'allenamento",
        kcal: '~490',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '150 gr petto di pollo / tacchino / fesa / bresaola / prosciutto crudo sgrassato / tonno al naturale in vetro',
              '300 gr yogurt Fage 0% grassi',
              '35 gr proteine Whey o Isolate',
              '300 ml albume',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1 (+ miele)',
            items: [
              '120 gr gallette + 10 gr miele',
              '120 gr cornflakes + 10 gr miele',
              '120 gr crema di riso / farina di riso + 10 gr miele',
              '120 gr riso + 10 gr miele',
            ],
          },
        ],
      },
      {
        id: 'on-cena',
        icon: '🌙',
        name: 'Cena',
        time: 'Sera',
        kcal: '~630',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '200 gr petto di pollo o tacchino',
              '250 gr pesce magro (merluzzo, spigola, orata, sogliola o gamberetti)',
              '200 gr carne rossa magra',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1',
            items: [
              '100 gr riso o pasta',
              '150 gr pane di segale o integrale',
              '100 gr gallette',
              '400 gr patate o patate dolci — olio sempre a crudo',
              '250 gr gnocchi di patate',
            ],
          },
          { type: 'fat', title: 'Grassi', items: ['10 gr olio'] },
        ],
        note:
          '💡 Per ogni 100 gr legumi cotti: togli 10 gr riso/pasta + 25 gr pollo · 🍅 Puoi aggiungere 100–150 gr polpa di pomodoro + 100 gr verdura a scelta',
        badge: '⚗️ 600 mg ALA dopo il pasto',
      },
    ],
  },
  off: {
    label: 'Giorni OFF',
    macros: { kcal: 2720, prot: 235, carb: 260, fat: 65 },
    meals: [
      {
        id: 'off-colazione',
        icon: '🌅',
        name: 'Colazione',
        time: 'Mattina · appena sveglio',
        kcal: '~540',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '350 ml albume',
              '200 ml latte scremato / mandorla / soia + 40 gr proteine isolate',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1',
            items: [
              "50 gr farina d'avena + 20 gr cornflakes",
              '60 gr cornflakes',
            ],
          },
          {
            type: 'fat',
            title: 'Grassi — scegli 1',
            items: [
              '30 gr burro di arachidi',
              '30 gr altra crema spalmabile',
              '30 gr frutta secca',
              '15 gr olio',
            ],
          },
        ],
        note: '💡 Puoi aggiungere 30–40 gr di marmellata Hero Light',
        supp:
          '💊 Con la colazione: 1 Multivitaminico · 2 Omega-3 · 1 Vit C · 30 mg Zinco · 50 mg Vit D · 300 mg ALA',
      },
      {
        id: 'off-spuntino-mattina',
        icon: '🍎',
        name: 'Spuntino Mattina',
        time: 'Metà mattinata',
        kcal: '~370',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '150 gr petto di pollo / tacchino / fesa / bresaola / prosciutto crudo sgrassato / tonno al naturale in vetro',
              '300 gr yogurt Fage 0% grassi',
              '35 gr proteine Whey o Isolate',
              '300 ml albume',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1',
            items: [
              '50 gr gallette',
              '75 gr pane di segale o integrale',
              '50 gr crema di riso o farina di riso',
              "60 gr farina d'avena",
            ],
          },
          {
            type: 'fat',
            title: 'Grassi — scegli 1',
            items: ['20 gr frutta secca', '10 gr olio', '20 gr burro di arachidi'],
          },
        ],
      },
      {
        id: 'off-pranzo',
        icon: '🍽️',
        name: 'Pranzo',
        time: 'Mezzogiorno',
        kcal: '~750',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '200 gr petto di pollo o tacchino',
              '250 gr pesce magro (merluzzo, spigola, orata, sogliola o gamberetti)',
              '200 gr carne rossa magra',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1',
            items: [
              '80 gr riso o pasta',
              '120 gr pane di segale o integrale',
              '80 gr gallette',
              '320 gr patate o patate dolci — olio sempre a crudo',
              '200 gr gnocchi di patate',
            ],
          },
          { type: 'fat', title: 'Grassi', items: ['10 gr olio'] },
        ],
        note:
          '💡 Per ogni 100 gr legumi cotti: togli 10 gr riso/pasta + 25 gr pollo · 🍅 Puoi aggiungere 100–150 gr polpa di pomodoro + 100 gr verdura a scelta',
        badge: '⚗️ 600 mg ALA dopo il pasto',
      },
      {
        id: 'off-spuntino-pomeriggio',
        icon: '☀️',
        name: 'Spuntino Pomeriggio',
        time: 'Ore 15:30 – 16:00',
        kcal: '~370',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '150 gr petto di pollo / tacchino / fesa / bresaola / prosciutto crudo sgrassato / tonno al naturale in vetro',
              '300 gr yogurt Fage 0% grassi',
              '35 gr proteine Whey o Isolate',
              '300 ml albume',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1',
            items: [
              '50 gr gallette',
              '75 gr pane di segale o integrale',
              '50 gr crema di riso o farina di riso',
              "60 gr farina d'avena",
            ],
          },
          {
            type: 'fat',
            title: 'Grassi — scegli 1',
            items: ['20 gr frutta secca', '10 gr olio', '20 gr burro di arachidi'],
          },
        ],
      },
      {
        id: 'off-cena',
        icon: '🌙',
        name: 'Cena',
        time: 'Sera',
        kcal: '~690',
        rows: [
          {
            type: 'prot',
            title: 'Proteine — scegli 1',
            items: [
              '200 gr petto di pollo o tacchino',
              '250 gr pesce magro (merluzzo, spigola, orata, sogliola o gamberetti)',
              '200 gr carne rossa magra',
            ],
          },
          {
            type: 'carb',
            title: 'Carboidrati — scegli 1',
            items: [
              '80 gr riso o pasta',
              '120 gr pane di segale o integrale',
              '80 gr gallette',
              '320 gr patate o patate dolci — olio sempre a crudo',
              '200 gr gnocchi di patate',
            ],
          },
          { type: 'fat', title: 'Grassi', items: ['10 gr olio'] },
        ],
        note:
          '💡 Per ogni 100 gr legumi cotti: togli 10 gr riso/pasta + 25 gr pollo · 🍅 Puoi aggiungere 100–150 gr polpa di pomodoro + 100 gr verdura a scelta',
        badge: '⚗️ 600 mg ALA dopo il pasto',
      },
    ],
  },
};

// ---- Componenti React --------------------------------------------------

function App() {
  const [day, setDay] = React.useState('on');

  return (
    <div className="wrap">
      <Header />
      <DayToggle day={day} setDay={setDay} />
      <MacroHero day={day} />

      <div className="views-cont">
        <DayView day={day} />
      </div>

      <Supplements />
      <Rules />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="badge">⚡ Piano Nutrizionale</div>
      <h1>
        Dieta di <em>Pier</em>
      </h1>
      <p className="sub">5 pasti · scegli la fonte · supplementi inclusi</p>
      <div className="date-chip">📅 Aggiornato: 1 Aprile 2026</div>
    </header>
  );
}

function DayToggle({ day, setDay }) {
  const btnOnRef = React.useRef(null);
  const btnOffRef = React.useRef(null);
  const pillRef = React.useRef(null);

  // Commento semplice: posiziona la pillola sotto il bottone attivo
  React.useEffect(() => {
    const active = day === 'on' ? btnOnRef.current : btnOffRef.current;
    if (!active || !pillRef.current) return;
    const left = active.offsetLeft;
    const width = active.offsetWidth;
    pillRef.current.style.width = width + 'px';
    pillRef.current.style.transform = `translateX(${left}px)`;
  }, [day]);

  return (
    <div className="toggle-wrap">
      <div className="toggle-track" id="tt" role="tablist" aria-label="Selezione giorno">
        <div className="toggle-pill" ref={pillRef} id="tp"></div>
        <button
          className={`tbtn ${day === 'on' ? 'active' : ''}`}
          id="bOn"
          ref={btnOnRef}
          onClick={() => setDay('on')}
          type="button"
          aria-pressed={day === 'on'}
        >
          🔥 Giorni ON
        </button>
        <button
          className={`tbtn ${day === 'off' ? 'active' : ''}`}
          id="bOff"
          ref={btnOffRef}
          onClick={() => setDay('off')}
          type="button"
          aria-pressed={day === 'off'}
        >
          🧘 Giorni OFF
        </button>
      </div>
    </div>
  );
}

function MacroHero({ day }) {
  const { kcal, prot, carb, fat } = DATA[day].macros;
  const kcalRef = React.useRef(null);
  const protRef = React.useRef(null);
  const carbRef = React.useRef(null);
  const fatRef = React.useRef(null);

  // Commento semplice: anima i numeri quando cambi giorno
  React.useEffect(() => {
    animateNumber(kcalRef.current, kcal);
    animateNumber(protRef.current, prot);
    animateNumber(carbRef.current, carb);
    animateNumber(fatRef.current, fat);
  }, [day, kcal, prot, carb, fat]);

  return (
    <div className="hero">
      <div className="kcal-block">
        <div className="kcal-num" id="kn" ref={kcalRef}>
          {kcal}
        </div>
        <div className="kcal-lbl">kcal totali / giorno</div>
      </div>
      <div className="mpills">
        <div className="mp p">
          <span className="mp-val" id="pn" ref={protRef}>
            {prot}
          </span>
          <span className="mp-unit">grammi</span>
          <span className="mp-name">Proteine</span>
        </div>
        <div className="mp c">
          <span className="mp-val" id="cn" ref={carbRef}>
            {carb}
          </span>
          <span className="mp-unit">grammi</span>
          <span className="mp-name">Carboidrati</span>
        </div>
        <div className="mp f">
          <span className="mp-val" id="fn" ref={fatRef}>
            {fat}
          </span>
          <span className="mp-unit">grammi</span>
          <span className="mp-name">Grassi</span>
        </div>
      </div>
    </div>
  );
}

function DayView({ day }) {
  const dayData = DATA[day];

  return (
    <div className={`day-view visible`}>
      <div className="sec-lbl">
        <span className="sec-lbl-t">Piani Pasti — {dayData.label}</span>
        <div className="sec-lbl-l"></div>
      </div>

      <div className="premessa">
        <strong>📌 Come usare:</strong> Scegli <strong>una</strong> fonte proteica,
        <strong>una</strong> di carboidrati e <strong>una</strong> di grassi per ogni pasto.
        {day === 'off' ? ' Carbo e calorie ridotti rispetto ai giorni ON.' : ''}
      </div>

      {dayData.meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}

function MealCard({ meal }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="meal">
      <button
        className="meal-head"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="meal-icon">{meal.icon}</div>
        <div className="meal-info">
          <div className="meal-name">{meal.name}</div>
          <div className="meal-time">{meal.time}</div>
        </div>
        <div className="meal-kcal">
          <div className="meal-kcal-n">{meal.kcal}</div>
          <div className="meal-kcal-l">kcal</div>
        </div>
        <div className={`chevron ${open ? 'open' : ''}`}>›</div>
      </button>

      <div className={`meal-body ${open ? 'open' : ''}`}>
        <div className="meal-inner">
          {meal.rows.map((row, i) => (
            <MacroRow key={i} row={row} />
          ))}

          {meal.note && <div className="note-box">{meal.note}</div>}
          {meal.supp && <div className="supp-box">{meal.supp}</div>}
          {meal.badge && <div className="ala-badge">{meal.badge}</div>}
        </div>
      </div>
    </div>
  );
}

function MacroRow({ row }) {
  return (
    <div className={`mrow ${row.type}`}>
      <div className="mrow-head">
        <div className="mrow-dot"></div>
        <span className="mrow-title">{row.title}</span>
      </div>
      <div className="mrow-items">
        {row.items.map((item, idx) => (
          <div className="mrow-item" key={idx}>
            <span className="mrow-item-n">{numBadge(idx)}</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Supplements() {
  return (
    <>
      <div className="sec-lbl">
        <span className="sec-lbl-t">Supplementi</span>
        <div className="sec-lbl-l"></div>
      </div>
      <div className="supp-card">
        <div className="supp-card-title">💊 Stack Giornaliero</div>
        <div className="supp-grid">
          <SuppItem icon="🌈" name="Multivitaminico" dose="1 cpr · con colazione" />
          <SuppItem icon="🐟" name="Omega-3" dose="2 capsule · con colazione" />
          <SuppItem icon="🍊" name="Vitamina C" dose="1 cpr · con colazione" />
          <SuppItem icon="⚗️" name="Zinco" dose="30 mg · con colazione" />
          <SuppItem icon="☀️" name="Vitamina D" dose="50 mg · con colazione" />
          <SuppItem icon="🔬" name="ALA — Colazione" dose="300 mg · con colazione" />
          <div className="si si-full">
            <div className="si-icon">⚡</div>
            <div>
              <div className="si-name">ALA — Pranzo + Cena</div>
              <div className="si-dose">
                600 mg dopo pranzo · 600 mg dopo cena → Totale: 1500 mg ALA / die
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SuppItem({ icon, name, dose }) {
  return (
    <div className="si">
      <div className="si-icon">{icon}</div>
      <div>
        <div className="si-name">{name}</div>
        <div className="si-dose">{dose}</div>
      </div>
    </div>
  );
}

function Rules() {
  return (
    <>
      <div className="sec-lbl">
        <span className="sec-lbl-t">Note del Nutrizionista</span>
        <div className="sec-lbl-l"></div>
      </div>
      <div className="rules-card">
        <Rule
          icon="💧"
          title="3 litri di acqua al giorno"
          detail=", possibilmente naturale e con basso residuo fisso."
        />
        <Rule icon="🧂" title="Non esagerare con il sale." />
        <Rule
          icon="🍬"
          title="Usa dolcificanti, non zucchero."
          detail=" Puoi usare Bolero o bevande a zero zuccheri."
        />
        <Rule icon="🍕" title="1 pasto libero ogni 7 giorni." />
      </div>
    </>
  );
}

function Rule({ icon, title, detail = '' }) {
  return (
    <div className="rule">
      <div className="rule-ico">{icon}</div>
      <div className="rule-txt">
        <strong>{title}</strong>
        {detail}
      </div>
    </div>
  );
}

// ---- Utility -----------------------------------------------------------

// Commento semplice: animazione numeri (stessa logica di prima, ma in React)
function animateNumber(el, target) {
  if (!el) return;
  const start = parseInt(el.textContent, 10) || 0;
  const duration = 400;
  const t0 = performance.now();

  function tick(t) {
    const progress = Math.min((t - t0) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + (target - start) * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

// Commento semplice: numeri in cerchio come nell'HTML originale
function numBadge(idx) {
  const map = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];
  return map[idx] || String(idx + 1);
}

// ---- Mount -------------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
