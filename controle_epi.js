/* ---------------------------------------------------------
   ÍCONES (SVG inline, minimalistas)
--------------------------------------------------------- */
const ICONS = {
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5.2 3.4 9.7 8 11 4.6-1.3 8-5.8 8-11V5l-8-3Z"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>',
  down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>',
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5h13l3.5 7v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Z"/></svg>',
  alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
  fileXls:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>',
};

/* ---------------------------------------------------------
   ESTADO
--------------------------------------------------------- */
let state = {
  loading: true,
  admins: [],
  products: [],
  movements: [],
  currentAdmin: null,
  view: 'dashboard',
  sidebarOpen: false,
  modal: null,
  errors: {},
  toast: null,
};

const CATEGORIES = [
  "Proteção da cabeça","Proteção auditiva","Proteção respiratória","Proteção das mãos",
  "Proteção dos pés","Proteção contra quedas","Proteção ocular/facial","Vestimenta","Outro"
];
const UNITS = ["un","par","caixa"];

if (!window.storage) {
  window.storage = {
    async get(key) {
      const raw = localStorage.getItem(key);
      return raw === null ? null : { value: raw };
    },
    async set(key, value) {
      localStorage.setItem(key, value);
      return true;
    }
  };
}

function uid(){ return Math.random().toString(36).slice(2,10) + Date.now().toString(36); }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function fmtDate(iso){
  if(!iso) return '-';
  const [y,m,d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
function showToast(msg, isErr){
  state.toast = {msg, isErr};
  render();
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>{ state.toast = null; render(); }, 2600);
}

/* ---------------------------------------------------------
   PERSISTÊNCIA (window.storage - dados compartilhados)
--------------------------------------------------------- */
async function loadAll(){
  state.admins = await safeGet('epi:admins', []);
  state.products = await safeGet('epi:products', []);
  state.movements = await safeGet('epi:movements', []);
  state.loading = false;
  render();
}
async function safeGet(key, fallback){
  try{
    const res = await window.storage.get(key, true);
    return res && res.value ? JSON.parse(res.value) : fallback;
  }catch(e){
    return fallback;
  }
}
async function saveAdmins(){ await window.storage.set('epi:admins', JSON.stringify(state.admins), true); }
async function saveProducts(){ await window.storage.set('epi:products', JSON.stringify(state.products), true); }
async function saveMovements(){ await window.storage.set('epi:movements', JSON.stringify(state.movements), true); }

/* ---------------------------------------------------------
   AÇÕES: ADMIN / SESSÃO
--------------------------------------------------------- */
async function createFirstAdmin(name, username, password){
  const admin = {id: uid(), name, username: username.trim().toLowerCase(), password, createdAt: todayISO()};
  state.admins.push(admin);
  await saveAdmins();
  state.currentAdmin = admin;
  state.view = 'dashboard';
  render();
}

function login(username, password){
  const u = username.trim().toLowerCase();
  const found = state.admins.find(a=>a.username===u && a.password===password);
  if(found){
    state.currentAdmin = found;
    state.errors.login = null;
    state.view = 'dashboard';
    render();
  }else{
    state.errors.login = 'Usuário ou senha incorretos.';
    render();
  }
}
function logout(){
  state.currentAdmin = null;
  state.view = 'dashboard';
  render();
}

async function addAdmin(name, username, password){
  const u = username.trim().toLowerCase();
  if(state.admins.some(a=>a.username===u)){
    return {ok:false, msg:'Já existe um administrador com esse usuário.'};
  }
  state.admins.push({id: uid(), name, username: u, password, createdAt: todayISO()});
  await saveAdmins();
  return {ok:true};
}
async function removeAdmin(id){
  if(state.admins.length<=1){ showToast('Não é possível remover o último administrador.', true); return; }
  if(id===state.currentAdmin.id){ showToast('Você não pode remover seu próprio acesso.', true); return; }
  state.admins = state.admins.filter(a=>a.id!==id);
  await saveAdmins();
  showToast('Administrador removido.');
  render();
}

/* ---------------------------------------------------------
   AÇÕES: PRODUTOS
--------------------------------------------------------- */
async function upsertProduct(data, editId){
  if(editId){
    const p = state.products.find(p=>p.id===editId);
    Object.assign(p, data);
  }else{
    state.products.push({id: uid(), ...data, createdAt: todayISO()});
  }
  await saveProducts();
}
async function deleteProduct(id){
  state.products = state.products.filter(p=>p.id!==id);
  await saveProducts();
  showToast('Produto excluído.');
  render();
}

/* ---------------------------------------------------------
   AÇÕES: MOVIMENTAÇÕES (saída / entrada)
--------------------------------------------------------- */
async function registerSaida(data){
  const p = state.products.find(p=>p.id===data.productId);
  if(!p) return {ok:false, msg:'Produto não encontrado.'};
  if(data.qty > p.qty) return {ok:false, msg:`Estoque insuficiente. Disponível: ${p.qty} ${p.unit}.`};
  p.qty -= data.qty;
  state.movements.unshift({
    id: uid(), type:'saida', productId:p.id, productName:p.name, qty:data.qty,
    employee:data.employee, registration:data.registration||'', date:data.date,
    note:data.note||'', adminName: state.currentAdmin.name, createdAt: new Date().toISOString()
  });
  await saveProducts(); await saveMovements();
  return {ok:true};
}
async function registerEntrada(data){
  const p = state.products.find(p=>p.id===data.productId);
  if(!p) return {ok:false, msg:'Produto não encontrado.'};
  p.qty += data.qty;
  state.movements.unshift({
    id: uid(), type:'entrada', productId:p.id, productName:p.name, qty:data.qty,
    supplier:data.supplier||'', date:data.date, note:data.note||'',
    adminName: state.currentAdmin.name, createdAt: new Date().toISOString()
  });
  await saveProducts(); await saveMovements();
  return {ok:true};
}

/* ---------------------------------------------------------
   HELPERS DE APRESENTAÇÃO
--------------------------------------------------------- */
function stockStatus(p){
  if(p.qty<=0) return {key:'out', label:'Crítico', badge:'badge-out'};
  if(p.qty<=p.minQty) return {key:'low', label:'Baixo', badge:'badge-low'};
  return {key:'ok', label:'OK', badge:'badge-ok'};
}
function stockBarColor(status){
  if(status.key==='out') return 'var(--danger)';
  if(status.key==='low') return 'var(--safety)';
  return 'var(--ok)';
}
function knownEmployees(){
  const set = new Set();
  state.movements.forEach(m=>{ if(m.type==='saida' && m.employee) set.add(m.employee); });
  return Array.from(set).sort();
}

/* ---------------------------------------------------------
   EXPORTAÇÃO — EXCEL (SheetJS) e PDF (jsPDF + autoTable)
--------------------------------------------------------- */
function stampFilename(prefix){
  const d = new Date();
  const pad = n=>String(n).padStart(2,'0');
  return `${prefix}_${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}`;
}
function downloadWorkbook(rows, sheetName, filename){
  if(typeof XLSX==='undefined'){ showToast('Não foi possível carregar o módulo de exportação Excel. Verifique sua conexão com a internet.', true); return; }
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, `${filename}.xlsx`);
}
function makePdfDoc(title){
  if(typeof window.jspdf==='undefined'){ showToast('Não foi possível carregar o módulo de exportação PDF. Verifique sua conexão com a internet.', true); return null; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({orientation:'landscape'});
  doc.setFillColor(28,31,34);
  doc.rect(0,0,doc.internal.pageSize.getWidth(),16,'F');
  doc.setTextColor(255,255,255);
  doc.setFontSize(13);
  doc.text(title, 10, 10.5);
  doc.setTextColor(28,31,34);
  doc.setFontSize(9);
  doc.text(`Gerado em ${fmtDate(todayISO())} por ${state.currentAdmin.name}`, 10, 22);
  return doc;
}
function exportProdutosExcel(){
  const rows = state.products.map(p=>({
    'Nome': p.name, 'Categoria': p.category, 'CA': p.ca||'', 'Tamanho': p.size||'',
    'Unidade': p.unit, 'Estoque atual': p.qty, 'Estoque mínimo': p.minQty, 'Status': stockStatus(p).label
  }));
  if(rows.length===0){ showToast('Não há produtos para exportar.', true); return; }
  downloadWorkbook(rows, 'Produtos', stampFilename('produtos_epi'));
  showToast('Excel de produtos exportado.');
}
function exportProdutosPdf(){
  const doc = makePdfDoc('Controle de EPI — Produtos cadastrados');
  if(!doc) return;
  if(state.products.length===0){ showToast('Não há produtos para exportar.', true); return; }
  doc.autoTable({
    startY:28,
    head:[['Nome','Categoria','CA','Tamanho','Unidade','Estoque atual','Estoque mínimo','Status']],
    body: state.products.map(p=>[p.name,p.category,p.ca||'-',p.size||'-',p.unit,p.qty,p.minQty,stockStatus(p).label]),
    styles:{fontSize:8.5, cellPadding:3},
    headStyles:{fillColor:[244,180,0], textColor:[28,31,34], fontStyle:'bold'},
    alternateRowStyles:{fillColor:[245,246,247]}
  });
  doc.save(`${stampFilename('produtos_epi')}.pdf`);
  showToast('PDF de produtos exportado.');
}
function exportHistoricoExcel(){
  const list = filteredMovements();
  if(list.length===0){ showToast('Não há movimentações para exportar.', true); return; }
  const rows = list.map(m=>({
    'Data': fmtDate(m.date), 'Tipo': m.type==='saida'?'Saída':'Entrada', 'Produto': m.productName,
    'Quantidade': m.qty, 'Colaborador': m.type==='saida'?(m.employee||''):'', 'Matrícula': m.registration||'',
    'Fornecedor': m.type==='entrada'?(m.supplier||''):'', 'Registrado por': m.adminName||'', 'Observação': m.note||''
  }));
  downloadWorkbook(rows, 'Historico', stampFilename('historico_epi'));
  showToast('Excel do histórico exportado.');
}
function exportHistoricoPdf(){
  const list = filteredMovements();
  if(list.length===0){ showToast('Não há movimentações para exportar.', true); return; }
  const doc = makePdfDoc('Controle de EPI — Histórico de movimentações');
  if(!doc) return;
  doc.autoTable({
    startY:28,
    head:[['Data','Tipo','Produto','Qtd','Colaborador/Fornecedor','Registrado por','Observação']],
    body: list.map(m=>[
      fmtDate(m.date), m.type==='saida'?'Saída':'Entrada', m.productName, m.qty,
      m.type==='saida'?(m.employee||'-'):(m.supplier||'-'), m.adminName||'-', m.note||'-'
    ]),
    styles:{fontSize:8.5, cellPadding:3},
    headStyles:{fillColor:[244,180,0], textColor:[28,31,34], fontStyle:'bold'},
    alternateRowStyles:{fillColor:[245,246,247]}
  });
  doc.save(`${stampFilename('historico_epi')}.pdf`);
  showToast('PDF do histórico exportado.');
}

/* ---------------------------------------------------------
   RENDER PRINCIPAL
--------------------------------------------------------- */
function render(){
  const root = document.getElementById('app');
  if(state.loading){
    root.innerHTML = `<div class="auth-screen"><div style="color:#fff;font-family:'Barlow Condensed';font-size:20px;letter-spacing:.05em;">CARREGANDO…</div></div>`;
    return;
  }
  if(!state.currentAdmin){
    root.innerHTML = state.admins.length===0 ? renderSetup() : renderLogin();
    bindAuthEvents();
    return;
  }
  root.innerHTML = renderShell();
  bindShellEvents();
}

/* ----------- Tela: Configuração inicial ----------- */
function renderSetup(){
  return `
  <div class="auth-screen">
    <div class="auth-card">
      <div class="hazard-bar"></div>
      <div class="auth-card-body">
        <div class="auth-logo">${ICONS.shield.replace('currentColor','#1C1F22')}<span style="font-family:'Barlow Condensed';font-weight:800;font-size:15px;letter-spacing:.08em;color:var(--ink-soft);">CONTROLE DE EPI</span></div>
        <h1>Configuração inicial</h1>
        <p class="auth-sub">Crie o primeiro acesso de administrador para começar a usar o sistema.</p>
        ${state.errors.setup ? `<div class="error-box">${state.errors.setup}</div>` : ''}
        <form id="setupForm">
          <div class="field"><label>Nome completo</label><input required name="name" placeholder="Ex: Maria Souza"></div>
          <div class="field"><label>Usuário</label><input required name="username" placeholder="Ex: maria.souza"></div>
          <div class="field"><label>Senha</label><input required type="password" name="password" placeholder="Mínimo 4 caracteres" minlength="4"></div>
          <div class="field"><label>Confirmar senha</label><input required type="password" name="confirm" placeholder="Repita a senha"></div>
          <button class="btn btn-primary" type="submit">Criar administrador e entrar</button>
        </form>
        <p class="hint">Este será o primeiro usuário administrador do sistema. Depois de entrar, você poderá cadastrar outros administradores em "Administradores".</p>
      </div>
    </div>
  </div>`;
}

/* ----------- Tela: Login ----------- */
function renderLogin(){
  return `
  <div class="auth-screen">
    <div class="auth-card">
      <div class="hazard-bar"></div>
      <div class="auth-card-body">
        <div class="auth-logo">${ICONS.shield.replace('currentColor','#1C1F22')}<span style="font-family:'Barlow Condensed';font-weight:800;font-size:15px;letter-spacing:.08em;color:var(--ink-soft);">CONTROLE DE EPI</span></div>
        <h1>Entrar</h1>
        <p class="auth-sub">Acesso restrito à equipe administrativa.</p>
        ${state.errors.login ? `<div class="error-box">${state.errors.login}</div>` : ''}
        <form id="loginForm">
          <div class="field"><label>Usuário</label><input required name="username" autofocus></div>
          <div class="field"><label>Senha</label><input required type="password" name="password"></div>
          <button class="btn btn-primary" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  </div>`;
}

function bindAuthEvents(){
  const setupForm = document.getElementById('setupForm');
  if(setupForm){
    setupForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const f = new FormData(setupForm);
      const name=f.get('name').trim(), username=f.get('username').trim(), password=f.get('password'), confirm=f.get('confirm');
      if(password!==confirm){ state.errors.setup='As senhas não coincidem.'; render(); return; }
      state.errors.setup=null;
      await createFirstAdmin(name, username, password);
    });
  }
  const loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const f = new FormData(loginForm);
      login(f.get('username'), f.get('password'));
    });
  }
}

/* ----------- Shell principal (logado) ----------- */
function navItem(view, icon, label){
  return `<button class="nav-item ${state.view===view?'active':''}" data-nav="${view}">${ICONS[icon]}${label}</button>`;
}
function renderShell(){
  return `
  <div class="shell">
    <div class="sidebar ${state.sidebarOpen?'open':''}" id="sidebar">
      <div class="brand">${ICONS.shield}<div class="brand-text">EPI CONTROL<span>Gestão de estoque</span></div></div>
      <nav class="nav">
        ${navItem('dashboard','grid','Painel')}
        ${navItem('produtos','box','Produtos')}
        ${navItem('saida','down','Retirada')}
        ${navItem('entrada','up','Entrada de estoque')}
        ${navItem('historico','clock','Histórico')}
        <div class="nav-divider"></div>
        ${navItem('admins','users','Administradores')}
      </nav>
      <div class="nav-divider"></div>
      <button class="nav-item" id="logoutBtn">${ICONS.logout}Sair</button>
      <div class="sidebar-footer"><b>${state.currentAdmin.name}</b>@${state.currentAdmin.username}</div>
    </div>
    <div class="main">
      <div class="topbar">
        <div style="display:flex;align-items:center;gap:10px;">
          <button class="mobile-toggle" id="menuToggle">${ICONS.menu}</button>
          <h2>${pageTitle()}</h2>
        </div>
      </div>
      <div class="content">${renderView()}</div>
    </div>
  </div>
  ${state.modal ? renderModal() : ''}
  ${state.toast ? `<div class="toast ${state.toast.isErr?'err':''}">${state.toast.msg}</div>` : ''}
  `;
}
function pageTitle(){
  return {
    dashboard:'Painel geral', produtos:'Produtos cadastrados', saida:'Retirada de EPI',
    entrada:'Entrada de estoque', historico:'Histórico de movimentações', admins:'Administradores'
  }[state.view];
}

function renderView(){
  if(state.view==='dashboard') return renderDashboard();
  if(state.view==='produtos') return renderProdutos();
  if(state.view==='saida') return renderSaida();
  if(state.view==='entrada') return renderEntrada();
  if(state.view==='historico') return renderHistorico();
  if(state.view==='admins') return renderAdmins();
  return '';
}

/* ----------- Painel ----------- */
function renderDashboard(){
  const total = state.products.length;
  const low = state.products.filter(p=>p.qty<=p.minQty && p.qty>0).length;
  const out = state.products.filter(p=>p.qty<=0).length;
  const thisMonth = new Date().toISOString().slice(0,7);
  const saidasMes = state.movements.filter(m=>m.type==='saida' && m.date && m.date.startsWith(thisMonth))
                     .reduce((s,m)=>s+m.qty,0);

  const rows = state.products.slice().sort((a,b)=>a.qty-b.qty).map(p=>{
    const st = stockStatus(p);
    const pct = p.minQty>0 ? Math.min(100,Math.round((p.qty/(p.minQty*2))*100)) : (p.qty>0?100:0);
    return `<tr>
      <td><b>${escapeHtml(p.name)}</b><div style="font-size:12px;color:var(--ink-soft);">${escapeHtml(p.category)}${p.ca? ' · CA '+escapeHtml(p.ca):''}</div></td>
      <td><span class="stock-bar"><span class="stock-bar-fill" style="width:${pct}%;background:${stockBarColor(st)};"></span></span><span class="qty-pill">${p.qty} ${p.unit}</span></td>
      <td class="mono">${p.minQty}</td>
      <td><span class="badge ${st.badge}">${st.label}</span></td>
    </tr>`;
  }).join('');

  return `
    <div class="stat-grid">
      <div class="stat-card neutral"><div class="num">${total}</div><div class="label">Itens cadastrados</div></div>
      <div class="stat-card alert"><div class="num">${low+out}</div><div class="label">Com estoque baixo/crítico</div></div>
      <div class="stat-card good"><div class="num">${saidasMes}</div><div class="label">Unidades retiradas este mês</div></div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>Situação do estoque</h3></div>
      ${ total===0 ? emptyState('inbox','Nenhum produto cadastrado','Cadastre o primeiro EPI na aba Produtos.') : `
      <div class="table-wrap"><table>
        <thead><tr><th>Produto</th><th>Estoque atual</th><th>Mínimo</th><th>Status</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>`}
    </div>
  `;
}

/* ----------- Produtos ----------- */
function renderProdutos(){
  const rows = state.products.map(p=>{
    const st = stockStatus(p);
    return `<tr>
      <td><b>${escapeHtml(p.name)}</b></td>
      <td>${escapeHtml(p.category)}</td>
      <td class="mono">${p.ca? escapeHtml(p.ca):'-'}</td>
      <td>${p.size? escapeHtml(p.size):'-'}</td>
      <td class="mono">${p.qty} ${p.unit}</td>
      <td class="mono">${p.minQty}</td>
      <td><span class="badge ${st.badge}">${st.label}</span></td>
      <td>
        <button class="btn btn-outline btn-sm" data-edit-product="${p.id}">${ICONS.edit}</button>
        <button class="btn btn-danger btn-sm" data-del-product="${p.id}">${ICONS.trash}</button>
      </td>
    </tr>`;
  }).join('');
  return `
    <div class="panel">
      <div class="panel-head">
        <h3>Produtos (${state.products.length})</h3>
        <div class="toolbar">
          <button class="btn btn-outline btn-sm" id="exportProdutosXls">${ICONS.fileXls} Excel</button>
          <button class="btn btn-outline btn-sm" id="exportProdutosPdf">${ICONS.download} PDF</button>
          <button class="btn btn-dark btn-sm" id="newProductBtn">${ICONS.plus} Novo produto</button>
        </div>
      </div>
      ${ state.products.length===0 ? emptyState('box','Nenhum EPI cadastrado','Clique em "Novo produto" para começar a cadastrar o estoque.') : `
      <div class="table-wrap"><table>
        <thead><tr><th>Nome</th><th>Categoria</th><th>CA</th><th>Tamanho</th><th>Estoque</th><th>Mínimo</th><th>Status</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>`}
    </div>
  `;
}

/* ----------- Retirada (saída) ----------- */
function renderSaida(){
  if(state.products.length===0){
    return emptyStatePanel('box','Nenhum produto cadastrado','Cadastre um EPI em "Produtos" antes de registrar retiradas.');
  }
  const options = state.products.map(p=>`<option value="${p.id}">${escapeHtml(p.name)} — disponível: ${p.qty} ${p.unit}</option>`).join('');
  const empList = knownEmployees().map(e=>`<option value="${escapeHtml(e)}">`).join('');
  return `
    <div class="panel" style="max-width:560px;">
      <div class="panel-head"><h3>Registrar retirada de EPI</h3></div>
      <div class="panel-body">
        ${state.errors.saida ? `<div class="error-box">${state.errors.saida}</div>` : ''}
        <form id="saidaForm">
          <div class="field"><label>Produto</label><select required name="productId">${options}</select></div>
          <div class="row2">
            <div class="field"><label>Quantidade</label><input required type="number" min="1" step="1" name="qty" value="1"></div>
            <div class="field"><label>Data</label><input required type="date" name="date" value="${todayISO()}"></div>
          </div>
          <div class="field"><label>Colaborador</label><input required name="employee" list="empList" placeholder="Nome do colaborador"><datalist id="empList">${empList}</datalist></div>
          <div class="field"><label>Matrícula (opcional)</label><input name="registration" placeholder="Ex: 00231"></div>
          <div class="field"><label>Observação (opcional)</label><textarea name="note" rows="2" placeholder="Ex: substituição por desgaste"></textarea></div>
          <button class="btn btn-primary" type="submit">${ICONS.down} Registrar retirada</button>
        </form>
      </div>
    </div>
  `;
}

/* ----------- Entrada de estoque ----------- */
function renderEntrada(){
  if(state.products.length===0){
    return emptyStatePanel('box','Nenhum produto cadastrado','Cadastre um EPI em "Produtos" antes de repor estoque.');
  }
  const options = state.products.map(p=>`<option value="${p.id}">${escapeHtml(p.name)} — atual: ${p.qty} ${p.unit}</option>`).join('');
  return `
    <div class="panel" style="max-width:560px;">
      <div class="panel-head"><h3>Registrar entrada de estoque</h3></div>
      <div class="panel-body">
        <form id="entradaForm">
          <div class="field"><label>Produto</label><select required name="productId">${options}</select></div>
          <div class="row2">
            <div class="field"><label>Quantidade</label><input required type="number" min="1" step="1" name="qty" value="1"></div>
            <div class="field"><label>Data</label><input required type="date" name="date" value="${todayISO()}"></div>
          </div>
          <div class="field"><label>Fornecedor / Nota fiscal (opcional)</label><input name="supplier" placeholder="Ex: NF 4521 - Fornecedor XPTO"></div>
          <div class="field"><label>Observação (opcional)</label><textarea name="note" rows="2"></textarea></div>
          <button class="btn btn-dark" type="submit">${ICONS.up} Registrar entrada</button>
        </form>
      </div>
    </div>
  `;
}

/* ----------- Histórico ----------- */
function filteredMovements(){
  const f = state.histFilter || {tipo:'', busca:''};
  let list = state.movements.slice();
  if(f.tipo) list = list.filter(m=>m.type===f.tipo);
  if(f.busca){
    const q = f.busca.toLowerCase();
    list = list.filter(m => (m.productName||'').toLowerCase().includes(q) || (m.employee||'').toLowerCase().includes(q) || (m.supplier||'').toLowerCase().includes(q));
  }
  return list;
}
function renderHistorico(){
  const f = state.histFilter || {tipo:'', busca:''};
  const list = filteredMovements();
  const rows = list.map(m=>`
    <tr>
      <td class="mono">${fmtDate(m.date)}</td>
      <td><span class="badge ${m.type==='saida'?'badge-out2':'badge-in'}">${m.type==='saida'?'Saída':'Entrada'}</span></td>
      <td><b>${escapeHtml(m.productName)}</b></td>
      <td class="mono">${m.qty}</td>
      <td>${m.type==='saida' ? escapeHtml(m.employee||'-') : escapeHtml(m.supplier||'-')}</td>
      <td>${escapeHtml(m.adminName||'-')}</td>
      <td style="color:var(--ink-soft);font-size:13px;">${escapeHtml(m.note||'-')}</td>
    </tr>`).join('');
  return `
    <div class="panel">
      <div class="panel-head">
        <h3>Movimentações (${list.length})</h3>
        <div class="toolbar">
          <button class="btn btn-outline btn-sm" id="exportHistXls">${ICONS.fileXls} Excel</button>
          <button class="btn btn-outline btn-sm" id="exportHistPdf">${ICONS.download} PDF</button>
          <select id="histTipo">
            <option value="">Todos os tipos</option>
            <option value="saida" ${f.tipo==='saida'?'selected':''}>Saída</option>
            <option value="entrada" ${f.tipo==='entrada'?'selected':''}>Entrada</option>
          </select>
          <input id="histBusca" placeholder="Buscar produto ou colaborador" value="${escapeHtml(f.busca)}">
        </div>
      </div>
      ${ list.length===0 ? emptyState('clock','Nenhuma movimentação encontrada','Os registros de entrada e saída aparecerão aqui.') : `
      <div class="table-wrap"><table>
        <thead><tr><th>Data</th><th>Tipo</th><th>Produto</th><th>Qtd</th><th>Colaborador / Fornecedor</th><th>Registrado por</th><th>Obs.</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>`}
    </div>
  `;
}

/* ----------- Administradores ----------- */
function renderAdmins(){
  const rows = state.admins.map(a=>`
    <tr>
      <td><b>${escapeHtml(a.name)}</b></td>
      <td class="mono">${escapeHtml(a.username)}</td>
      <td class="mono">${fmtDate(a.createdAt)}</td>
      <td>${a.id===state.currentAdmin.id ? '<span class="badge badge-ok">Você</span>' : `<button class="btn btn-danger btn-sm" data-del-admin="${a.id}">${ICONS.trash} Remover</button>`}</td>
    </tr>`).join('');
  return `
    <div class="panel">
      <div class="panel-head">
        <h3>Administradores (${state.admins.length})</h3>
        <button class="btn btn-dark btn-sm" id="newAdminBtn">${ICONS.plus} Novo administrador</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Nome</th><th>Usuário</th><th>Criado em</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
    </div>
  `;
}

/* ----------- Estados vazios ----------- */
function emptyState(icon,title,sub){
  return `<div class="empty-state">${ICONS[icon]}<div class="t">${title}</div><div>${sub}</div></div>`;
}
function emptyStatePanel(icon,title,sub){
  return `<div class="panel">${emptyState(icon,title,sub)}</div>`;
}

/* ----------- Modais ----------- */
function renderModal(){
  const m = state.modal;
  if(m.type==='product') return renderProductModal(m.payload);
  if(m.type==='admin') return renderAdminModal();
  return '';
}
function renderProductModal(existing){
  const isEdit = !!existing;
  const catOptions = CATEGORIES.map(c=>`<option ${existing&&existing.category===c?'selected':''}>${c}</option>`).join('');
  const unitOptions = UNITS.map(u=>`<option ${existing&&existing.unit===u?'selected':''}>${u}</option>`).join('');
  return `
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal">
      <div class="modal-head"><h3>${isEdit?'Editar produto':'Novo produto'}</h3><button class="modal-close" id="modalClose">${ICONS.x}</button></div>
      <div class="modal-body">
        <form id="productForm">
          <div class="field"><label>Nome do EPI</label><input required name="name" value="${existing?escapeHtml(existing.name):''}" placeholder="Ex: Capacete de segurança"></div>
          <div class="row2">
            <div class="field"><label>Categoria</label><select name="category">${catOptions}</select></div>
            <div class="field"><label>CA (opcional)</label><input name="ca" class="mono" value="${existing?escapeHtml(existing.ca||''):''}" placeholder="00000"></div>
          </div>
          <div class="row2">
            <div class="field"><label>Tamanho (opcional)</label><input name="size" value="${existing?escapeHtml(existing.size||''):''}" placeholder="Ex: M, 42, único"></div>
            <div class="field"><label>Unidade</label><select name="unit">${unitOptions}</select></div>
          </div>
          <div class="row2">
            <div class="field"><label>${isEdit?'Estoque atual':'Estoque inicial'}</label><input required type="number" min="0" step="1" name="qty" value="${existing?existing.qty:0}"></div>
            <div class="field"><label>Estoque mínimo</label><input required type="number" min="0" step="1" name="minQty" value="${existing?existing.minQty:1}"></div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" id="modalCancel">Cancelar</button>
        <button class="btn btn-primary" id="modalSaveProduct">${isEdit?'Salvar alterações':'Cadastrar produto'}</button>
      </div>
    </div>
  </div>`;
}
function renderAdminModal(){
  return `
  <div class="modal-overlay" id="modalOverlay">
    <div class="modal">
      <div class="modal-head"><h3>Novo administrador</h3><button class="modal-close" id="modalClose">${ICONS.x}</button></div>
      <div class="modal-body">
        ${state.errors.admin ? `<div class="error-box">${state.errors.admin}</div>` : ''}
        <form id="adminForm">
          <div class="field"><label>Nome completo</label><input required name="name"></div>
          <div class="field"><label>Usuário</label><input required name="username"></div>
          <div class="field"><label>Senha</label><input required type="password" name="password" minlength="4"></div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" id="modalCancel">Cancelar</button>
        <button class="btn btn-primary" id="modalSaveAdmin">Criar administrador</button>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------
   EVENTOS DO SHELL
--------------------------------------------------------- */
function bindShellEvents(){
  document.querySelectorAll('[data-nav]').forEach(btn=>{
    btn.addEventListener('click', ()=>{ state.view = btn.dataset.nav; state.sidebarOpen=false; state.errors={}; render(); });
  });
  const logoutBtn = document.getElementById('logoutBtn');
  if(logoutBtn) logoutBtn.addEventListener('click', logout);

  const menuToggle = document.getElementById('menuToggle');
  if(menuToggle) menuToggle.addEventListener('click', ()=>{ state.sidebarOpen=!state.sidebarOpen; render(); });

  // Produtos
  const newProductBtn = document.getElementById('newProductBtn');
  if(newProductBtn) newProductBtn.addEventListener('click', ()=>{ state.modal={type:'product', payload:null}; render(); });
  document.querySelectorAll('[data-edit-product]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const p = state.products.find(p=>p.id===btn.dataset.editProduct);
      state.modal={type:'product', payload:p};
      render();
    });
  });
  document.querySelectorAll('[data-del-product]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(confirm('Tem certeza que deseja excluir este produto? O histórico de movimentações será mantido.')){
        deleteProduct(btn.dataset.delProduct);
      }
    });
  });
  const exportProdutosXls = document.getElementById('exportProdutosXls');
  if(exportProdutosXls) exportProdutosXls.addEventListener('click', exportProdutosExcel);
  const exportProdutosPdfBtn = document.getElementById('exportProdutosPdf');
  if(exportProdutosPdfBtn) exportProdutosPdfBtn.addEventListener('click', exportProdutosPdf);

  // Saída
  const saidaForm = document.getElementById('saidaForm');
  if(saidaForm){
    saidaForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const f = new FormData(saidaForm);
      const res = await registerSaida({
        productId: f.get('productId'), qty: parseInt(f.get('qty'),10),
        employee: f.get('employee').trim(), registration: f.get('registration').trim(),
        date: f.get('date'), note: f.get('note').trim()
      });
      if(res.ok){ state.errors.saida=null; showToast('Retirada registrada com sucesso.'); render(); }
      else { state.errors.saida = res.msg; render(); }
    });
  }

  // Entrada
  const entradaForm = document.getElementById('entradaForm');
  if(entradaForm){
    entradaForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const f = new FormData(entradaForm);
      const res = await registerEntrada({
        productId: f.get('productId'), qty: parseInt(f.get('qty'),10),
        supplier: f.get('supplier').trim(), date: f.get('date'), note: f.get('note').trim()
      });
      if(res.ok){ showToast('Entrada registrada com sucesso.'); render(); }
    });
  }

  // Histórico filtros
  const histTipo = document.getElementById('histTipo');
  const histBusca = document.getElementById('histBusca');
  if(histTipo) histTipo.addEventListener('change', ()=>{ state.histFilter = {...(state.histFilter||{}), tipo: histTipo.value}; render(); });
  if(histBusca) histBusca.addEventListener('input', ()=>{ state.histFilter = {...(state.histFilter||{}), busca: histBusca.value}; render(); });
  const exportHistXls = document.getElementById('exportHistXls');
  if(exportHistXls) exportHistXls.addEventListener('click', exportHistoricoExcel);
  const exportHistPdf = document.getElementById('exportHistPdf');
  if(exportHistPdf) exportHistPdf.addEventListener('click', exportHistoricoPdf);

  // Admins
  const newAdminBtn = document.getElementById('newAdminBtn');
  if(newAdminBtn) newAdminBtn.addEventListener('click', ()=>{ state.errors.admin=null; state.modal={type:'admin'}; render(); });
  document.querySelectorAll('[data-del-admin]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(confirm('Remover este administrador?')) removeAdmin(btn.dataset.delAdmin);
    });
  });

  bindModalEvents();
}

function bindModalEvents(){
  const overlay = document.getElementById('modalOverlay');
  if(!overlay) return;
  const close = ()=>{ state.modal=null; state.errors.admin=null; render(); };
  document.getElementById('modalClose').addEventListener('click', close);
  document.getElementById('modalCancel').addEventListener('click', close);
  overlay.addEventListener('click', (e)=>{ if(e.target===overlay) close(); });

  const saveProductBtn = document.getElementById('modalSaveProduct');
  if(saveProductBtn){
    saveProductBtn.addEventListener('click', async ()=>{
      const form = document.getElementById('productForm');
      if(!form.reportValidity()) return;
      const f = new FormData(form);
      const data = {
        name: f.get('name').trim(), category: f.get('category'), ca: f.get('ca').trim(),
        size: f.get('size').trim(), unit: f.get('unit'), qty: parseInt(f.get('qty'),10), minQty: parseInt(f.get('minQty'),10)
      };
      await upsertProduct(data, state.modal.payload ? state.modal.payload.id : null);
      showToast(state.modal.payload ? 'Produto atualizado.' : 'Produto cadastrado.');
      state.modal=null; render();
    });
  }
  const saveAdminBtn = document.getElementById('modalSaveAdmin');
  if(saveAdminBtn){
    saveAdminBtn.addEventListener('click', async ()=>{
      const form = document.getElementById('adminForm');
      if(!form.reportValidity()) return;
      const f = new FormData(form);
      const res = await addAdmin(f.get('name').trim(), f.get('username').trim(), f.get('password'));
      if(res.ok){ showToast('Administrador cadastrado.'); state.modal=null; render(); }
      else { state.errors.admin = res.msg; render(); }
    });
  }
}

function escapeHtml(str){
  if(str===undefined||str===null) return '';
  return String(str).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

loadAll();
