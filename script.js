/**
 * CAFÉ ANCONA | Menú Digital Interactivo
 * Café de Especialidad & Galería de Arte
 * Pure Vanilla JavaScript (No React needed)
 */

// =============================================================================
// 1. DATA: MENU ITEMS & CATEGORIES (ES / EN)
// =============================================================================

const MENU_CATEGORIES = [
  { id: 'cafe-especialidad', icon: 'fa-mug-hot', nameEs: 'Café de Especialidad', nameEn: 'Specialty Coffee', descEs: 'Granos de origen único, tostados con precisión y calibrados diariamente.', descEn: 'Single-origin beans, precision-roasted and calibrated daily.' },
  { id: 'bebidas-frias', icon: 'fa-glass-water', nameEs: 'Cold Brew & Refrescantes', nameEn: 'Cold Brew & Refreshers', descEs: 'Extracciones lentas, tónicos cítricos y bebidas heladas artesanales.', descEn: 'Slow extractions, citrus tonics and artisan iced drinks.' },
  { id: 'tes-infusiones', icon: 'fa-leaf', nameEs: 'Matcha & Tés de Autor', nameEn: 'Matcha & Fine Teas', descEs: 'Matcha ceremonial Uji, chai especiado de la casa y tisanas botánicas.', descEn: 'Ceremonial Uji matcha, house-spiced chai and botanical tisanes.' },
  { id: 'panaderia-dulce', icon: 'fa-croissant', nameEs: 'Panadería & Repostería', nameEn: 'Bakery & Pastries', descEs: 'Masa madre, fermentación de 48 horas y repostería europea contemporánea.', descEn: 'Sourdough, 48-hour fermentation and contemporary European pastry.' },
  { id: 'brunch-desayunos', icon: 'fa-egg', nameEs: 'Brunch & Cocina de Mañana', nameEn: 'Brunch & Morning Plates', descEs: 'Platillos reconfortantes preparados al momento con ingredientes orgánicos.', descEn: 'Comforting dishes crafted to order using organic local produce.' },
  { id: 'especialidades-saladas', icon: 'fa-bread-slice', nameEs: 'Paninis & Platos Salados', nameEn: 'Artisan Paninis & Savory', descEs: 'Pan rústico horneado en casa, quesos curados y embutidos selectos.', descEn: 'House-baked rustic bread, artisan cheeses and cured meats.' },
  { id: 'galeria-arte', icon: 'fa-palette', nameEs: 'Galería de Arte (Obras)', nameEn: 'Art Gallery Collection', descEs: 'Piezas originales de artistas plásticos en exhibición disponibles para coleccionistas.', descEn: 'Original artwork on display available for collectors.' }
];

const MENU_ITEMS = [
  // --- CAFÉ DE ESPECIALIDAD ---
  {
    id: 'espresso-ancona',
    category: 'cafe-especialidad',
    titleEs: 'Espresso Doble Ancona',
    titleEn: 'Double Espresso Ancona',
    price: 45,
    descriptionEs: 'Doble extracción de nuestro microlote Chiapas lavado. Notas a chocolate amargo, avellana tostada y acidez brillante de mandarina.',
    descriptionEn: 'Double shot from our washed Chiapas microlot. Notes of dark chocolate, toasted hazelnut, and bright mandarin acidity.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado', 'firma', 'vegano', 'sin-gluten'],
    customizable: false,
    notesEs: 'Extracción 1:2 en 28 segundos'
  },
  {
    id: 'flat-white-crema',
    category: 'cafe-especialidad',
    titleEs: 'Flat White Sedoso',
    titleEn: 'Velvety Flat White',
    price: 68,
    descriptionEs: 'Doble ristretto emulsionado con microespuma de leche aterciopelada a 62°C. Intensidad pura con textura satinada.',
    descriptionEn: 'Double ristretto blended with silky steamed microfoam at 62°C. Pure coffee intensity with velvety body.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado'],
    customizable: true,
    notesEs: 'Taza de 6 oz de cerámica artesanal'
  },
  {
    id: 'latte-lavanda-miel',
    category: 'cafe-especialidad',
    titleEs: 'Latte Lavanda & Miel de Azahar',
    titleEn: 'Lavender & Orange Blossom Latte',
    price: 78,
    descriptionEs: 'Bebida insignia: infusión de flores orgánicas de lavanda, miel de azahar local, espresso de la casa y leche texturizada.',
    descriptionEn: 'Signature drink: organic lavender flower infusion, local orange blossom honey, house espresso and steamed milk.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80',
    tags: ['firma', 'destacado'],
    customizable: true,
    notesEs: 'Decorado con pétalos comestibles'
  },
  {
    id: 'filtrado-chemex',
    category: 'cafe-especialidad',
    titleEs: 'Método Filtrado Chemex (350ml)',
    titleEn: 'Chemex Pour-Over (350ml)',
    price: 80,
    descriptionEs: 'Método de goteo con filtro grueso que entrega una taza excepcionalmente limpia, sedosa y aromática. Pregunta por el grano de la semana.',
    descriptionEn: 'Pour-over brew yielding a remarkably clean, crisp and aromatic cup. Ask our barista for the rotating bean origin.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
    tags: ['vegano', 'sin-gluten'],
    customizable: false,
    notesEs: 'Tiempo de extracción: 4 minutos'
  },
  {
    id: 'cappuccino-artesanal',
    category: 'cafe-especialidad',
    titleEs: 'Cappuccino Italiano Clásico',
    titleEn: 'Classic Italian Cappuccino',
    price: 65,
    descriptionEs: 'Equilibrio perfecto a tres partes iguales: espresso de especialidad, leche evaporada y una densa corona de crema.',
    descriptionEn: 'Traditional balance in equal parts: specialty espresso, steamed milk and thick velvety milk foam.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80',
    tags: [],
    customizable: true,
    notesEs: 'Opción con cacao o canela de Ceilán'
  },

  // --- BEBIDAS FRÍAS & COLD BREW ---
  {
    id: 'cold-brew-tonico',
    category: 'bebidas-frias',
    titleEs: 'Cold Brew Tónico con Romero & Toronja',
    titleEn: 'Rosemary Citrus Cold Brew Tonic',
    price: 75,
    descriptionEs: 'Café infusionado en frío durante 20 horas, servido con agua tónica premium, rodaja de toronja deshidratada y rama de romero flameado.',
    descriptionEn: '20-hour cold-steeped coffee poured over artisan tonic water, dehydrated grapefruit slice and flame-kissed rosemary.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado', 'firma', 'vegano', 'sin-gluten'],
    customizable: false,
    notesEs: 'Ultra refrescante y energizante'
  },
  {
    id: 'iced-caramel-macchiato',
    category: 'bebidas-frias',
    titleEs: 'Iced Dulce de Leche Macchiato',
    titleEn: 'Iced Dulce de Leche Macchiato',
    price: 78,
    descriptionEs: 'Capas de leche fría batida sobre hielo, doble shot de espresso cayendo en cascada y caramelo salado preparado en casa.',
    descriptionEn: 'Layers of chilled milk over ice cubes, double waterfall espresso and house-made salted caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado'],
    customizable: true,
    notesEs: 'Caramelo con flor de sal de Colima'
  },
  {
    id: 'affogato-vainilla-galeria',
    category: 'bebidas-frias',
    titleEs: 'Affogato Galería',
    titleEn: 'Gallery Affogato',
    price: 70,
    descriptionEs: 'Bola de helado artesanal de vainilla de Papantla sumergida en un shot ardiente de espresso recién extraído y crocante de almendra.',
    descriptionEn: 'A scoop of artisan Papantla Mexican vanilla gelato drowned in a scorching freshly pulled espresso shot and almond brittle.',
    image: 'https://images.unsplash.com/photo-1594910069411-78901eb231c6?auto=format&fit=crop&w=700&q=80',
    tags: ['firma'],
    customizable: false,
    notesEs: 'Postre & café en un solo bocado'
  },

  // --- TÉS & MATCHAS ---
  {
    id: 'matcha-ceremonial-uji',
    category: 'tes-infusiones',
    titleEs: 'Matcha Ceremonial Latte (Uji, Kioto)',
    titleEn: 'Ceremonial Uji Matcha Latte',
    price: 85,
    descriptionEs: 'Matcha grado ceremonial importado de Kioto, batido tradicionalmente con chasen de bambú y combinado con leche a elección.',
    descriptionEn: 'Ceremonial grade green tea matcha whisked with traditional bamboo chasen and blended with choice of milk.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado', 'sin-gluten'],
    customizable: true,
    notesEs: 'Rico en antioxidantes y l-teanina'
  },
  {
    id: 'chai-masala-artesanal',
    category: 'tes-infusiones',
    titleEs: 'Chai Masala Suculento',
    titleEn: 'Artisan Masala Chai Latte',
    price: 75,
    descriptionEs: 'Té negro Assam cocinado a fuego lento con canela, cardamomo, clavo, jengibre fresco y pimienta negra. Dulzor natural de miel.',
    descriptionEn: 'Slow-simmered Assam black tea with crushed cinnamon, green cardamom, whole cloves, fresh ginger and honey.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80',
    tags: ['firma'],
    customizable: true,
    notesEs: 'Receta de especias enteras molidas a mano'
  },

  // --- PANADERÍA & REPOSTERÍA ---
  {
    id: 'croissant-almendras',
    category: 'panaderia-dulce',
    titleEs: 'Croissant Bicolor de Almendras',
    titleEn: 'Almond Twice-Baked Croissant',
    price: 65,
    descriptionEs: 'Hojaldre 100% mantequilla de Normandía, relleno de generoso frangipane de almendra tostada y cubierto de almendras fileteadas.',
    descriptionEn: 'Flaky pure Normandy butter pastry, filled with rich roasted almond frangipane cream and topped with toasted slivered almonds.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado'],
    customizable: false,
    notesEs: 'Horneado cada mañana a las 7:30 AM'
  },
  {
    id: 'tarta-vasca-quemada',
    category: 'panaderia-dulce',
    titleEs: 'Tarta de Queso Vasca (Basque Cheesecake)',
    titleEn: 'Basque Burnt Cheesecake',
    price: 85,
    descriptionEs: 'Centro cremoso y fundente con corteza caramelizada al horno. Servida con coulis de frutos del bosque frescos y toque de sal Maldon.',
    descriptionEn: 'Ultra-creamy molten center with a deeply caramelized exterior. Served with house blackberry coulis and flaky sea salt.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado', 'firma', 'sin-gluten'],
    customizable: false,
    notesEs: 'Favorita absoluta de nuestros visitantes'
  },
  {
    id: 'pain-au-chocolat',
    category: 'panaderia-dulce',
    titleEs: 'Pain au Chocolat de Origen 70%',
    titleEn: '70% Dark Chocolate Pain au Chocolat',
    price: 60,
    descriptionEs: 'Clásica chocolatina francesa con dos barras de chocolate oscuro de origen oaxaqueño envueltas en masa laminada crujiente.',
    descriptionEn: 'Classic French viennoiserie stuffed with two batons of 70% dark Mexican chocolate in crispy laminated folds.',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=700&q=80',
    tags: [],
    customizable: false,
    notesEs: 'Perfecto para sumergir en tu cappuccino'
  },

  // --- BRUNCH & DESAYUNOS ---
  {
    id: 'avocado-toast-ancona',
    category: 'brunch-desayunos',
    titleEs: 'Avocado Toast en Masa Madre Ancona',
    titleEn: 'Ancona Sourdough Avocado Toast',
    price: 125,
    descriptionEs: 'Hogaza de masa madre dorada, puré rústico de aguacate hass con limón amarillo, huevo poché de granja, rábanos encurtidos y dukkah egipcia.',
    descriptionEn: 'Thick toasted sourdough slice, rustic hass avocado mash, runny poached pasture egg, pickled radishes and roasted dukkah crunch.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado', 'vegano'],
    customizable: false,
    notesEs: 'Opción vegana sustituyendo el huevo por tofu marinado'
  },
  {
    id: 'chilaquiles-burrata',
    category: 'brunch-desayunos',
    titleEs: 'Chilaquiles Ancona con Burrata Fresca',
    titleEn: 'Ancona Chilaquiles with Fresh Burrata',
    price: 145,
    descriptionEs: 'Totopos de maíz nixtamalizado bañados en salsa verde tatemada de tomatillo milpero, crema de rancho, cebolla morada encurtida y burrata entera de 125g.',
    descriptionEn: 'Crispy stone-ground tortilla chips smothered in fire-roasted green salsa, ranch cream, pickled red onions and a 125g fresh burrata ball.',
    image: 'https://images.unsplash.com/photo-1640719028984-5142fa66183f?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado', 'firma', 'sin-gluten'],
    customizable: false,
    notesEs: 'Nivel de picor medio y aromático'
  },
  {
    id: 'french-toast-brioche',
    category: 'brunch-desayunos',
    titleEs: 'French Toast de Brioche Caramelizado',
    titleEn: 'Caramelized Brioche French Toast',
    price: 130,
    descriptionEs: 'Brioche grueso infusionado en crema de vainilla y canela, sellado en mantequilla avellanada con frutos rojos, mascarpone y miel de maple pura.',
    descriptionEn: 'Thick fluffy brioche soaked in vanilla custard, seared in brown butter, topped with wild berries, whipped mascarpone and pure maple syrup.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado'],
    customizable: false,
    notesEs: 'Dulzura equilibrada y esponjosidad sublime'
  },

  // --- PANINIS & SALADOS ---
  {
    id: 'panini-prosciutto-pesto',
    category: 'especialidades-saladas',
    titleEs: 'Panini Prosciutto di Parma & Pesto de la Casa',
    titleEn: 'Prosciutto di Parma & Fresh Pesto Panini',
    price: 135,
    descriptionEs: 'Focaccia con romero y aceite de oliva, prosciutto di Parma madurado, mozzarella fior di latte, jitomate confitado y pesto fresco de albahaca y piñones.',
    descriptionEn: 'Fresh rosemary focaccia, aged prosciutto di Parma, mozzarella fior di latte, slow-confit tomatoes and basil pine-nut pesto.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
    tags: ['destacado'],
    customizable: false,
    notesEs: 'Acompañado de ensaladilla verde orgánica'
  },
  {
    id: 'panini-hongos-trufa',
    category: 'especialidades-saladas',
    titleEs: 'Panini Silvestre de Portobello & Aceite de Trufa',
    titleEn: 'Wild Portobello & Truffle Panini',
    price: 128,
    descriptionEs: 'Setas y portobellos salteados con vino blanco y tomillo, queso gouda artesanal fundido, espinaca tierna y toque de aceite de trufa blanca.',
    descriptionEn: 'Sautéed wild mushrooms and portobello in white wine and thyme, molten artisan gouda cheese, baby spinach and white truffle aroma.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80',
    tags: ['vegano'],
    customizable: false,
    notesEs: '100% vegetariano, opción vegana disponible'
  },

  // --- GALERÍA DE ARTE ---
  {
    id: 'obra-quetzal-oro',
    category: 'galeria-arte',
    titleEs: 'Obra Original: "El Despertar de la Serpiente"',
    titleEn: 'Original Artwork: "The Serpent Awakening"',
    price: 4800,
    descriptionEs: 'Técnica mixta sobre lienzo de lino crudo con aplicaciones de pan de oro de 24k. Obra en exhibición en la pared principal de Café Ancona.',
    descriptionEn: 'Mixed media on raw linen canvas with 24k gold leaf details. Currently exhibited on the main salon wall of Café Ancona.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=700&q=80',
    tags: ['firma', 'destacado'],
    customizable: false,
    notesEs: 'Medidas: 90 x 120 cm · Incluye certificado de autenticidad'
  },
  {
    id: 'taza-ceramica-ancona',
    category: 'galeria-arte',
    titleEs: 'Taza de Colección Café Ancona (Edición Limitada)',
    titleEn: 'Café Ancona Collector Ceramic Cup (Limited)',
    price: 320,
    descriptionEs: 'Pieza de gres torneada a mano por alfareros locales con esmalte verde bosque y filo bañado en oro con el emblema de Café Ancona.',
    descriptionEn: 'Wheel-thrown stoneware cup crafted by local ceramists in forest-green glaze and gold-rimmed with Café Ancona seal.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
    tags: ['firma'],
    customizable: false,
    notesEs: 'Capacidad 8 oz · Apta para uso diario'
  }
];

// Customization options for drinks
const MILK_OPTIONS = [
  { id: 'entera', nameEs: 'Leche Entera', nameEn: 'Whole Milk', price: 0 },
  { id: 'deslactosada', nameEs: 'Deslactosada', nameEn: 'Lactose-Free', price: 0 },
  { id: 'avena', nameEs: 'Leche de Avena (+ $15)', nameEn: 'Oat Milk (+ $15)', price: 15 },
  { id: 'almendra', nameEs: 'Leche de Almendra (+ $15)', nameEn: 'Almond Milk (+ $15)', price: 15 },
  { id: 'coco', nameEs: 'Leche de Coco (+ $15)', nameEn: 'Coconut Milk (+ $15)', price: 15 }
];

const TEMP_OPTIONS = [
  { id: 'caliente', nameEs: 'Caliente', nameEn: 'Hot' },
  { id: 'iced', nameEs: 'En las Rocas (Iced)', nameEn: 'Over Ice (Iced)' }
];

// =============================================================================
// 2. APPLICATION STATE
// =============================================================================

const state = {
  currentLang: 'es', // 'es' or 'en'
  activeCategory: 'cafe-especialidad',
  activeFilter: 'all',
  searchQuery: '',
  cart: [], // items with { item, quantity, selectedMilk, selectedTemp, unitPrice }
  selectedDetailItem: null,
  detailQty: 1,
  detailSelectedMilk: 'entera',
  detailSelectedTemp: 'caliente'
};

// =============================================================================
// 3. DOM ELEMENTS
// =============================================================================

const elements = {
  headerLogo: document.getElementById('heroLogo'),
  langBtn: document.getElementById('langBtn'),
  langLabel: document.getElementById('langLabel'),
  statusLabel: document.getElementById('statusLabel'),
  wifiBtn: document.getElementById('wifiBtn'),
  searchInput: document.getElementById('searchInput'),
  clearSearchBtn: document.getElementById('clearSearch'),
  dietaryFilters: document.getElementById('dietaryFilters'),
  categoriesContainer: document.getElementById('categoriesContainer'),
  menuSections: document.getElementById('menuSections'),
  noResults: document.getElementById('noResults'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),

  // Floating Cart Bar
  floatingCartBar: document.getElementById('floatingCartBar'),
  cartItemCount: document.getElementById('cartItemCount'),
  cartTotalPrice: document.getElementById('cartTotalPrice'),
  openCartBtn: document.getElementById('openCartBtn'),

  // Cart Drawer
  cartModalBackdrop: document.getElementById('cartModalBackdrop'),
  cartDrawer: document.getElementById('cartDrawer'),
  closeCartBtn: document.getElementById('closeCartBtn'),
  cartItemsList: document.getElementById('cartItemsList'),
  emptyCartState: document.getElementById('emptyCartState'),
  cartDrawerSubtotal: document.getElementById('cartDrawerSubtotal'),
  tableNumberInput: document.getElementById('tableNumber'),
  orderNotesInput: document.getElementById('orderNotes'),
  sendWhatsAppOrderBtn: document.getElementById('sendWhatsAppOrderBtn'),
  clearCartBtn: document.getElementById('clearCartBtn'),

  // Detail Modal
  itemDetailModalBackdrop: document.getElementById('itemDetailModalBackdrop'),
  closeDetailModalBtn: document.getElementById('closeDetailModalBtn'),
  detailImg: document.getElementById('detailImg'),
  detailBadges: document.getElementById('detailBadges'),
  detailCategory: document.getElementById('detailCategory'),
  detailTitle: document.getElementById('detailTitle'),
  detailPrice: document.getElementById('detailPrice'),
  detailDescription: document.getElementById('detailDescription'),
  customizationSection: document.getElementById('customizationSection'),
  optionsGrid: document.getElementById('optionsGrid'),
  qtyMinusBtn: document.getElementById('qtyMinusBtn'),
  qtyPlusBtn: document.getElementById('qtyPlusBtn'),
  detailQty: document.getElementById('detailQty'),
  addDetailToOrderBtn: document.getElementById('addDetailToOrderBtn'),
  detailTotalAdd: document.getElementById('detailTotalAdd'),

  // Wi-Fi Modal
  wifiModalBackdrop: document.getElementById('wifiModalBackdrop'),
  closeWifiModalBtn: document.getElementById('closeWifiModalBtn'),
  copyWifiBtn: document.getElementById('copyWifiBtn'),
  copyBtnText: document.getElementById('copyBtnText'),

  // Toast
  toastNotification: document.getElementById('toastNotification'),
  toastMsg: document.getElementById('toastMsg')
};

// =============================================================================
// 4. INITIALIZATION
// =============================================================================

function initApp() {
  renderCategoriesNav();
  renderMenu();
  setupEventListeners();
  setupLogoInteractiveEffects();
  loadCartFromStorage();
  updateCartUI();
}

// =============================================================================
// 5. RENDERING LOGIC
// =============================================================================

function renderCategoriesNav() {
  const isEn = state.currentLang === 'en';
  elements.categoriesContainer.innerHTML = MENU_CATEGORIES.map(cat => `
    <button class="cat-pill ${cat.id === state.activeCategory ? 'active' : ''}" data-cat="${cat.id}">
      <i class="fa-solid ${cat.icon} cat-icon"></i>
      <span>${isEn ? cat.nameEn : cat.nameEs}</span>
    </button>
  `).join('');
}

function renderMenu() {
  const isEn = state.currentLang === 'en';
  const query = state.searchQuery.trim().toLowerCase();
  const filter = state.activeFilter;

  // Filter items
  let filtered = MENU_ITEMS.filter(item => {
    // Dietary filter
    if (filter !== 'all') {
      if (!item.tags.includes(filter)) return false;
    }

    // Search query filter
    if (query) {
      const title = (isEn ? item.titleEn : item.titleEs).toLowerCase();
      const desc = (isEn ? item.descriptionEn : item.descriptionEs).toLowerCase();
      const notes = (item.notesEs || '').toLowerCase();
      return title.includes(query) || desc.includes(query) || notes.includes(query);
    }

    return true;
  });

  if (filtered.length === 0) {
    elements.menuSections.innerHTML = '';
    elements.noResults.classList.remove('hidden');
    return;
  }

  elements.noResults.classList.add('hidden');

  // Group by category
  let html = '';
  MENU_CATEGORIES.forEach(cat => {
    const catItems = filtered.filter(item => item.category === cat.id);
    if (catItems.length === 0) return;

    html += `
      <section class="category-section" id="${cat.id}">
        <div class="category-header">
          <div class="cat-title-group">
            <h2 class="category-title">
              <i class="fa-solid ${cat.icon}"></i>
              ${isEn ? cat.nameEn : cat.nameEs}
            </h2>
            <p class="category-desc">${isEn ? cat.descEn : cat.descEs}</p>
          </div>
          <span class="cat-count">${catItems.length} ${isEn ? 'items' : 'platillos'}</span>
        </div>

        <div class="items-grid">
          ${catItems.map(item => renderMenuItemCard(item, isEn)).join('')}
        </div>
      </section>
    `;
  });

  elements.menuSections.innerHTML = html;

  // Setup click listeners on items
  document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // If user clicked quick-add button directly
      if (e.target.closest('.quick-add-btn')) {
        const itemId = card.dataset.id;
        handleQuickAdd(itemId);
        return;
      }
      const itemId = card.dataset.id;
      openItemDetail(itemId);
    });
  });
}

function renderMenuItemCard(item, isEn) {
  const title = isEn ? item.titleEn : item.titleEs;
  const desc = isEn ? item.descriptionEn : item.descriptionEs;
  const notes = item.notesEs ? (isEn ? 'Signature note' : item.notesEs) : '';

  // Generate badges
  let badgeHtml = '';
  if (item.tags.includes('destacado')) {
    badgeHtml += `<span class="pill-badge pill-featured">${isEn ? '★ Popular' : '★ Estrella'}</span>`;
  }
  if (item.tags.includes('firma')) {
    badgeHtml += `<span class="pill-badge pill-house">${isEn ? 'House Spec' : 'De la Casa'}</span>`;
  }
  if (item.tags.includes('vegano')) {
    badgeHtml += `<span class="pill-badge pill-vegan">${isEn ? 'Vegan' : 'Vegano'}</span>`;
  }
  if (item.tags.includes('sin-gluten')) {
    badgeHtml += `<span class="pill-badge pill-glutenfree">${isEn ? 'GF' : 'Sin Gluten'}</span>`;
  }

  return `
    <article class="menu-card" data-id="${item.id}">
      <div class="card-img-container">
        <img class="card-img" src="${item.image}" alt="${title}" loading="lazy">
        <div class="badge-stack">${badgeHtml}</div>
        <div class="price-tag">$${item.price.toFixed(2)}</div>
      </div>
      <div class="card-content">
        <div class="card-title-row">
          <h3 class="card-title">${title}</h3>
        </div>
        <p class="card-desc">${desc}</p>
        <div class="card-footer">
          <span class="card-notes">${notes}</span>
          <button class="quick-add-btn" aria-label="Agregar ${title}">
            <i class="fa-solid fa-plus"></i>
            <span>${isEn ? 'Add' : 'Pedir'}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

// =============================================================================
// 6. LOGO INTERACTIVE EFFECTS & ANIMATION
// =============================================================================

function setupLogoInteractiveEffects() {
  const logoWrapper = document.querySelector('.logo-animation-wrapper');
  const logoFrame = document.querySelector('.logo-frame');

  if (!logoWrapper || !logoFrame) return;

  // 3D tilt on mousemove
  logoWrapper.addEventListener('mousemove', (e) => {
    const rect = logoWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / 8).toFixed(2);
    const rotateY = (x / 8).toFixed(2);
    logoFrame.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
  });

  logoWrapper.addEventListener('mouseleave', () => {
    logoFrame.style.transform = '';
  });

  // Fun click reaction: spin and pulse
  logoFrame.addEventListener('click', () => {
    logoFrame.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    logoFrame.style.transform = 'scale(1.15) rotate(360deg)';
    showToast(state.currentLang === 'en' ? '✨ Welcome to Café Ancona!' : '✨ ¡Bienvenidos a Café Ancona!');

    setTimeout(() => {
      logoFrame.style.transition = '';
      logoFrame.style.transform = '';
    }, 850);
  });
}

// =============================================================================
// 7. EVENT LISTENERS
// =============================================================================

function setupEventListeners() {
  const isEn = () => state.currentLang === 'en';

  // Language Switch
  elements.langBtn.addEventListener('click', () => {
    state.currentLang = state.currentLang === 'es' ? 'en' : 'es';
    elements.langLabel.textContent = state.currentLang === 'es' ? 'EN' : 'ES';
    elements.statusLabel.textContent = state.currentLang === 'es' ? 'Abierto hoy · 8:00 AM - 10:00 PM' : 'Open today · 8:00 AM - 10:00 PM';
    elements.searchInput.placeholder = state.currentLang === 'es' ? 'Buscar café, postre, desayuno...' : 'Search coffee, pastry, brunch...';
    
    renderCategoriesNav();
    renderMenu();
    updateCartUI();
    showToast(state.currentLang === 'es' ? 'Idioma cambiado a Español' : 'Language switched to English');
  });

  // Wi-Fi Modal
  elements.wifiBtn.addEventListener('click', () => {
    elements.wifiModalBackdrop.classList.remove('hidden');
  });
  elements.closeWifiModalBtn.addEventListener('click', () => {
    elements.wifiModalBackdrop.classList.add('hidden');
  });
  elements.copyWifiBtn.addEventListener('click', () => {
    const pass = document.getElementById('wifiPass').textContent;
    navigator.clipboard.writeText(pass).then(() => {
      elements.copyBtnText.textContent = isEn() ? 'Copied!' : '¡Copiada con Éxito!';
      showToast(isEn() ? 'Password copied to clipboard' : 'Contraseña copiada al portapapeles');
      setTimeout(() => {
        elements.copyBtnText.textContent = isEn() ? 'Copy Password' : 'Copiar Contraseña';
      }, 2500);
    }).catch(() => {
      showToast(isEn() ? 'Password: ' + pass : 'Contraseña: ' + pass);
    });
  });

  // Search Input
  elements.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery) {
      elements.clearSearchBtn.classList.add('active');
    } else {
      elements.clearSearchBtn.classList.remove('active');
    }
    renderMenu();
  });

  elements.clearSearchBtn.addEventListener('click', () => {
    elements.searchInput.value = '';
    state.searchQuery = '';
    elements.clearSearchBtn.classList.remove('active');
    renderMenu();
  });

  elements.resetFiltersBtn.addEventListener('click', () => {
    state.searchQuery = '';
    state.activeFilter = 'all';
    elements.searchInput.value = '';
    elements.clearSearchBtn.classList.remove('active');
    document.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
    document.querySelector('.tag-chip[data-filter="all"]').classList.add('active');
    renderMenu();
  });

  // Dietary Filters
  elements.dietaryFilters.addEventListener('click', (e) => {
    const chip = e.target.closest('.tag-chip');
    if (!chip) return;

    document.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    state.activeFilter = chip.dataset.filter;
    renderMenu();
  });

  // Category Sticky Navigation Clicks
  elements.categoriesContainer.addEventListener('click', (e) => {
    const pill = e.target.closest('.cat-pill');
    if (!pill) return;

    const catId = pill.dataset.cat;
    state.activeCategory = catId;
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    const targetSection = document.getElementById(catId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Scrollspy: update active category pill on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.category-section');
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        const id = sec.id;
        if (state.activeCategory !== id) {
          state.activeCategory = id;
          document.querySelectorAll('.cat-pill').forEach(p => {
            if (p.dataset.cat === id) {
              p.classList.add('active');
              p.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            } else {
              p.classList.remove('active');
            }
          });
        }
      }
    });
  }, { passive: true });

  // Detail Modal Controls
  elements.closeDetailModalBtn.addEventListener('click', closeDetailModal);
  elements.itemDetailModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.itemDetailModalBackdrop) closeDetailModal();
  });

  elements.qtyMinusBtn.addEventListener('click', () => {
    if (state.detailQty > 1) {
      state.detailQty--;
      updateDetailModalTotals();
    }
  });

  elements.qtyPlusBtn.addEventListener('click', () => {
    state.detailQty++;
    updateDetailModalTotals();
  });

  elements.addDetailToOrderBtn.addEventListener('click', handleAddDetailToCart);

  // Cart Drawer Controls
  elements.openCartBtn.addEventListener('click', () => {
    elements.cartModalBackdrop.classList.remove('hidden');
    updateCartUI();
  });

  elements.closeCartBtn.addEventListener('click', () => {
    elements.cartModalBackdrop.classList.add('hidden');
  });

  elements.cartModalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.cartModalBackdrop) {
      elements.cartModalBackdrop.classList.add('hidden');
    }
  });

  elements.clearCartBtn.addEventListener('click', () => {
    if (confirm(isEn() ? 'Clear current order?' : '¿Vaciar tu orden actual?')) {
      state.cart = [];
      saveCartToStorage();
      updateCartUI();
      showToast(isEn() ? 'Order cleared' : 'Orden vaciada');
    }
  });

  elements.sendWhatsAppOrderBtn.addEventListener('click', sendOrderViaWhatsApp);
}

// =============================================================================
// 8. DETAIL MODAL & CUSTOMIZATION
// =============================================================================

function openItemDetail(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  state.selectedDetailItem = item;
  state.detailQty = 1;
  state.detailSelectedMilk = 'entera';
  state.detailSelectedTemp = 'caliente';

  const isEn = state.currentLang === 'en';
  elements.detailImg.src = item.image;
  elements.detailImg.alt = isEn ? item.titleEn : item.titleEs;
  elements.detailCategory.textContent = isEn ? getCategoryName(item.category, 'en') : getCategoryName(item.category, 'es');
  elements.detailTitle.textContent = isEn ? item.titleEn : item.titleEs;
  elements.detailPrice.textContent = `$${item.price.toFixed(2)}`;
  elements.detailDescription.textContent = isEn ? item.descriptionEn : item.descriptionEs;

  // Customization options
  if (item.customizable) {
    elements.customizationSection.classList.remove('hidden');
    renderCustomizationOptions();
  } else {
    elements.customizationSection.classList.add('hidden');
  }

  updateDetailModalTotals();
  elements.itemDetailModalBackdrop.classList.remove('hidden');
}

function closeDetailModal() {
  elements.itemDetailModalBackdrop.classList.add('hidden');
  state.selectedDetailItem = null;
}

function renderCustomizationOptions() {
  const isEn = state.currentLang === 'en';
  let html = `
    <div style="margin-bottom: 0.75rem;">
      <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-bottom:0.35rem;">
        ${isEn ? 'Choice of Milk:' : 'Tipo de leche:'}
      </span>
      <div class="options-grid">
        ${MILK_OPTIONS.map(m => `
          <div class="option-chip ${m.id === state.detailSelectedMilk ? 'selected' : ''}" data-type="milk" data-val="${m.id}">
            <span>${isEn ? m.nameEn : m.nameEs}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div>
      <span style="font-size:0.75rem; color:var(--text-muted); display:block; margin-bottom:0.35rem;">
        ${isEn ? 'Temperature:' : 'Temperatura:'}
      </span>
      <div class="options-grid">
        ${TEMP_OPTIONS.map(t => `
          <div class="option-chip ${t.id === state.detailSelectedTemp ? 'selected' : ''}" data-type="temp" data-val="${t.id}">
            <span>${isEn ? t.nameEn : t.nameEs}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  elements.optionsGrid.innerHTML = html;

  // Listeners for chips
  elements.optionsGrid.querySelectorAll('.option-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const type = chip.dataset.type;
      const val = chip.dataset.val;
      if (type === 'milk') {
        state.detailSelectedMilk = val;
      } else if (type === 'temp') {
        state.detailSelectedTemp = val;
      }
      renderCustomizationOptions();
      updateDetailModalTotals();
    });
  });
}

function updateDetailModalTotals() {
  if (!state.selectedDetailItem) return;
  elements.detailQty.textContent = state.detailQty;

  let extra = 0;
  if (state.selectedDetailItem.customizable) {
    const milk = MILK_OPTIONS.find(m => m.id === state.detailSelectedMilk);
    if (milk) extra += milk.price;
  }

  const unitTotal = state.selectedDetailItem.price + extra;
  const lineTotal = unitTotal * state.detailQty;
  elements.detailTotalAdd.textContent = `$${lineTotal.toFixed(2)}`;
}

function handleAddDetailToCart() {
  if (!state.selectedDetailItem) return;
  const item = state.selectedDetailItem;

  let extra = 0;
  let customText = '';
  if (item.customizable) {
    const milk = MILK_OPTIONS.find(m => m.id === state.detailSelectedMilk);
    const temp = TEMP_OPTIONS.find(t => t.id === state.detailSelectedTemp);
    if (milk) extra += milk.price;

    const isEn = state.currentLang === 'en';
    customText = `${isEn ? milk.nameEn : milk.nameEs} · ${isEn ? temp.nameEn : temp.nameEs}`;
  }

  const unitPrice = item.price + extra;

  addToCart(item, state.detailQty, unitPrice, customText);
  closeDetailModal();
  showToast(state.currentLang === 'en' ? `Added to your order!` : `¡Agregado a tu pedido!`);
}

function handleQuickAdd(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  if (item.customizable) {
    // Open modal so they can choose milk / iced
    openItemDetail(itemId);
  } else {
    addToCart(item, 1, item.price, '');
    showToast(state.currentLang === 'en' ? `Added to your order!` : `¡Agregado a tu pedido!`);
  }
}

// =============================================================================
// 9. CART & WHATSAPP ORDER MANAGEMENT
// =============================================================================

function addToCart(item, qty, unitPrice, customText) {
  // Check if identical item + customization already exists
  const existing = state.cart.find(c => c.itemId === item.id && c.customText === customText);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({
      itemId: item.id,
      item: item,
      quantity: qty,
      unitPrice: unitPrice,
      customText: customText
    });
  }

  saveCartToStorage();
  updateCartUI();
}

function updateCartUI() {
  const isEn = state.currentLang === 'en';
  const totalCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.cart.reduce((sum, i) => sum + (i.unitPrice * i.quantity), 0);

  elements.cartItemCount.textContent = totalCount;
  elements.cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
  elements.cartDrawerSubtotal.textContent = `$${totalPrice.toFixed(2)}`;

  if (totalCount > 0) {
    elements.floatingCartBar.classList.remove('hidden');
    elements.emptyCartState.classList.add('hidden');
  } else {
    elements.floatingCartBar.classList.add('hidden');
    elements.emptyCartState.classList.remove('hidden');
  }

  // Render items in drawer
  elements.cartItemsList.innerHTML = state.cart.map((entry, index) => {
    const title = isEn ? entry.item.titleEn : entry.item.titleEs;
    const lineTotal = entry.unitPrice * entry.quantity;

    return `
      <div class="cart-item-row">
        <div class="cart-item-details">
          <div class="cart-item-title">${title}</div>
          ${entry.customText ? `<div class="cart-item-custom"><i class="fa-solid fa-check"></i> ${entry.customText}</div>` : ''}
          <div class="cart-item-price">$${entry.unitPrice.toFixed(2)} x ${entry.quantity} = <strong>$${lineTotal.toFixed(2)}</strong></div>
        </div>
        <div class="cart-item-actions">
          <button class="item-qty-btn" onclick="modifyCartQty(${index}, -1)" aria-label="Menos"><i class="fa-solid fa-minus"></i></button>
          <span class="item-qty-num">${entry.quantity}</span>
          <button class="item-qty-btn" onclick="modifyCartQty(${index}, 1)" aria-label="Más"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    `;
  }).join('');
}

// Global scope helper for row buttons
window.modifyCartQty = function(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  saveCartToStorage();
  updateCartUI();
};

function sendOrderViaWhatsApp() {
  if (state.cart.length === 0) {
    showToast(state.currentLang === 'en' ? 'Your order is empty!' : '¡Tu orden está vacía!');
    return;
  }

  const tableOrName = elements.tableNumberInput.value.trim() || 'Mesa / Cliente';
  const notes = elements.orderNotesInput.value.trim();
  const totalPrice = state.cart.reduce((sum, i) => sum + (i.unitPrice * i.quantity), 0);
  const isEn = state.currentLang === 'en';

  let msg = `🌿 *PEDIDO - CAFÉ ANCONA (Café & Galería)* 🌿\n`;
  msg += `📍 *${isEn ? 'Table / Customer' : 'Mesa / Cliente'}:* ${tableOrName}\n`;
  msg += `---------------------------------------\n`;

  state.cart.forEach(entry => {
    const title = isEn ? entry.item.titleEn : entry.item.titleEs;
    const lineTotal = entry.unitPrice * entry.quantity;
    msg += `▪ ${entry.quantity}x ${title} ($${lineTotal.toFixed(2)})\n`;
    if (entry.customText) {
      msg += `   └ _${entry.customText}_\n`;
    }
  });

  msg += `---------------------------------------\n`;
  msg += `💰 *${isEn ? 'Total' : 'Total Estimado'}:* $${totalPrice.toFixed(2)} MXN\n`;

  if (notes) {
    msg += `📝 *${isEn ? 'Special Notes' : 'Notas / Alergias'}:* ${notes}\n`;
  }

  msg += `\n☕ _Enviado desde el Menú Digital de Café Ancona_`;

  const encoded = encodeURIComponent(msg);
  // Opens WhatsApp with the formatted order text
  const whatsappUrl = `https://wa.me/?text=${encoded}`;
  window.open(whatsappUrl, '_blank');
}

// =============================================================================
// 10. LOCAL STORAGE & TOAST HELPERS
// =============================================================================

function saveCartToStorage() {
  try {
    const simplified = state.cart.map(c => ({
      itemId: c.itemId,
      quantity: c.quantity,
      unitPrice: c.unitPrice,
      customText: c.customText
    }));
    localStorage.setItem('cafe_ancona_cart', JSON.stringify(simplified));
  } catch (e) {
    console.warn('LocalStorage error', e);
  }
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem('cafe_ancona_cart');
    if (raw) {
      const list = JSON.parse(raw);
      state.cart = list.map(entry => {
        const item = MENU_ITEMS.find(i => i.id === entry.itemId);
        if (!item) return null;
        return {
          itemId: entry.itemId,
          item: item,
          quantity: entry.quantity,
          unitPrice: entry.unitPrice,
          customText: entry.customText
        };
      }).filter(Boolean);
    }
  } catch (e) {
    console.warn('Could not restore cart', e);
  }
}

function getCategoryName(catId, lang) {
  const cat = MENU_CATEGORIES.find(c => c.id === catId);
  if (!cat) return '';
  return lang === 'en' ? cat.nameEn : cat.nameEs;
}

let toastTimeout;
function showToast(message) {
  clearTimeout(toastTimeout);
  elements.toastMsg.textContent = message;
  elements.toastNotification.classList.remove('hidden');

  toastTimeout = setTimeout(() => {
    elements.toastNotification.classList.add('hidden');
  }, 2600);
}

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
