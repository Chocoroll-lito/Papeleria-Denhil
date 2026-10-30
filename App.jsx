import { useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

const categories = [
  { label: 'Todo', icon: 'apps' },
  { label: 'Papelería Escolar', icon: 'school' },
  { label: 'BIC', icon: 'edit_note' },
  { label: 'Oficina', icon: 'corporate_fare' },
  { label: 'Arte y manualidades', icon: 'palette' },
  { label: 'Material escolar', icon: 'backpack' },
  { label: 'Impresiones', icon: 'print' },
]

const createProductArt = (kind) => {
  const drawings = {
    pen: `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
        <rect width='800' height='800' fill='#f7f9ff'/>
        <g>
          <rect x='230' y='120' width='340' height='520' rx='28' fill='#0d3b9d'/>
          <rect x='315' y='28' width='170' height='160' rx='22' fill='#1d4ed8'/>
          <rect x='328' y='65' width='145' height='90' rx='18' fill='#dfe7ff'/>
          <rect x='420' y='190' width='64' height='240' rx='18' fill='#dfe7ff'/>
          <rect x='316' y='190' width='64' height='240' rx='18' fill='#f8fafc'/>
          <path d='M280 680h240l-42 90H322z' fill='#0f172a'/>
          <circle cx='400' cy='620' r='24' fill='#f8fafc'/>
          <path d='M400 240v220' stroke='#0d3b9d' stroke-width='18' stroke-linecap='round'/>
        </g>
      </svg>
    `,
    marker: `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
        <rect width='800' height='800' fill='#f9fbff'/>
        <g>
          <rect x='200' y='110' width='400' height='500' rx='40' fill='#f59e0b'/>
          <rect x='260' y='40' width='280' height='160' rx='26' fill='#fbbf24'/>
          <rect x='300' y='215' width='200' height='280' rx='20' fill='#fff7ed'/>
          <rect x='250' y='520' width='300' height='90' rx='22' fill='#fef3c7'/>
          <path d='M200 610h400l-55 110H255z' fill='#78350f'/>
          <circle cx='400' cy='370' r='70' fill='#fef3c7' opacity='.88'/>
          <path d='M400 297v146' stroke='#f59e0b' stroke-width='22' stroke-linecap='round'/>
          <path d='M327 370h146' stroke='#f59e0b' stroke-width='22' stroke-linecap='round'/>
        </g>
      </svg>
    `,
    notebook: `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
        <rect width='800' height='800' fill='#f5f7ff'/>
        <g>
          <rect x='180' y='120' width='440' height='560' rx='36' fill='#dfeaff'/>
          <rect x='220' y='160' width='360' height='480' rx='20' fill='#ffffff'/>
          <g stroke='#9bb8ff' stroke-width='10'><path d='M280 210v400M340 210v400M400 210v400M460 210v400M520 210v400'/></g>
          <g fill='#b9cbff'>
            <circle cx='260' cy='210' r='18'/><circle cx='260' cy='290' r='18'/><circle cx='260' cy='370' r='18'/><circle cx='260' cy='450' r='18'/><circle cx='260' cy='530' r='18'/>
          </g>
          <rect x='220' y='160' width='360' height='70' rx='12' fill='#0d3b9d'/>
          <text x='400' y='205' text-anchor='middle' fill='white' font-size='32' font-family='Arial, sans-serif' font-weight='700'>CUADERNO</text>
        </g>
      </svg>
    `,
    folder: `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
        <rect width='800' height='800' fill='#f6f9ff'/>
        <g>
          <path d='M120 240c0-25 20-45 45-45h110l55 60h350c25 0 45 20 45 45v250c0 25-20 45-45 45H165c-25 0-45-20-45-45V240z' fill='#1d4ed8'/>
          <path d='M120 300h560l-40 280H165c-25 0-45-20-45-45V300z' fill='#dfe7ff'/>
          <rect x='190' y='330' width='420' height='22' rx='11' fill='#93c5fd'/>
          <rect x='190' y='390' width='340' height='16' rx='8' fill='#93c5fd' opacity='.8'/>
          <rect x='190' y='430' width='300' height='16' rx='8' fill='#93c5fd' opacity='.8'/>
        </g>
      </svg>
    `,
    highlighter: `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
        <rect width='800' height='800' fill='#f7f9ff'/>
        <g>
          <rect x='260' y='110' width='280' height='110' rx='28' fill='#fbbf24'/>
          <rect x='210' y='200' width='380' height='420' rx='30' fill='#facc15'/>
          <rect x='310' y='620' width='180' height='100' rx='20' fill='#fde68a'/>
          <rect x='275' y='260' width='250' height='180' rx='18' fill='#fef9c3'/>
          <rect x='348' y='330' width='110' height='55' rx='14' fill='#fbbf24'/>
          <circle cx='400' cy='220' r='14' fill='#fef3c7'/>
        </g>
      </svg>
    `,
    penSet: `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
        <rect width='800' height='800' fill='#f5f7ff'/>
        <g>
          <rect x='120' y='210' width='150' height='340' rx='24' fill='#0d3b9d'/>
          <rect x='325' y='170' width='150' height='380' rx='24' fill='#f59e0b'/>
          <rect x='530' y='230' width='150' height='320' rx='24' fill='#16a34a'/>
          <rect x='150' y='110' width='90' height='120' rx='20' fill='#1d4ed8'/>
          <rect x='355' y='80' width='90' height='110' rx='20' fill='#fbbf24'/>
          <rect x='560' y='120' width='90' height='120' rx='20' fill='#22c55e'/>
          <rect x='145' y='555' width='160' height='80' rx='16' fill='#dbeafe'/>
          <rect x='350' y='555' width='160' height='80' rx='16' fill='#fef3c7'/>
          <rect x='535' y='555' width='160' height='80' rx='16' fill='#dcfce7'/>
        </g>
      </svg>
    `,
  }

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(drawings[kind] ?? drawings.pen)}`
}

const mockImages = {
  facade:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAhgOobO0Qazeh4Rt_1UJUlVX8TFuocHl5pDBhNuYvHTmUty8_mb_bgs2NU_DzNPcHIWH3YHgAdWve4lYQbKCDeOeWUneKYgorOuisqCYR3gweUKQVTsiXaS_U53Md66g6QFFyDp-lbDFxL7_bK3RoX6e8weQPV99Hc1ZH9NylXhtg8mYo7ucO4r-IOmEaXj9sy3qjZzukGeRTtjgTX74grZJCAvXeB_VA1TCglWbC4oNbnXYa2bDqXcm6qJpbFUJFo8lE',
  story:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBlhHSi4trpUVwYOgTXf_9icysfw12jq3haR3R0nIUl80XBUKUqjgBN2XFXmYN8iYZpAX9rXsdf960oeiG-y9Rq5x3smVFHX5nHpD7vXWFwqIrogYtygu_fdKdueULQr11_aKyTq9zaTuDx4Tt5on5XxOBbIQT2U5_1tgeLzJ3JSXINYTobdGCQrLuYfwsGBNbsseHt4FtuZqsyQiorA1wjZ5Cw4_-ecPDDQKKltk8Ljz1Krj0_8GzItg',
  notebook:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCWtEYXd213U9ZYhc7F1qe1mDsXBNPOuVAE8Urt5AuSsxXo2APfDBU-lX1Kj4U84e1qp1wNImG4FCxXrgTi8NephlwKGDtCLNAhCsdtQ-L5ovZfrG4hWQaW_lCl00elOkiBNaPykJ3H8D6tKP-HGoso4dxfz2H-6NiZwD5V_-sG1Ou6_gJeoJjYNVZFvRKoYD_yxzPaSJ9jNcgD87g6q4-KlS8SGyFmI-cHqwfaqOcteEGnoBwXT6oD0Q',
  pens: createProductArt('pen'),
  highlighters: createProductArt('highlighter'),
  folders: createProductArt('folder'),
  map:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC3S31EuN3JK22drub_6547GI_ymm4M5cF1dbjFuPiFqKAJKBjbU5bFWLv8nfS3yIMaJntZ7zaulMCUuoU69G3afsPIZzVm-rIa9kb89Z0skXXL6sw9--o4irqiz0lAXxQz6wFfuqNzXouGgiEi2KtVCDxfEYRuqQ8frvQMcgy-4MyC4yI65ADiJ5BtIg_J09dQcVm7UYoG8jDyfE5ZFHTVo1rGC2qEaavcdkfLHpjHXAlq2zzom_0bKQ',
  bicPen: createProductArt('pen'),
  bicMarker: createProductArt('marker'),
  notebookClassic: createProductArt('notebook'),
  notebookSpiral: createProductArt('notebook'),
  notebookHardcover: createProductArt('notebook'),
  markerSet: createProductArt('marker'),
  penSet: createProductArt('penSet'),
}

const products = [
  {
    brand: 'BIC',
    category: 'BIC',
    tag: 'Pluma',
    image: mockImages.bicPen,
    title: 'BIC Cristal Original',
    description: 'Pluma de tinta gel azul ultra suave, ideal para clases, oficina y apuntes diarios.',
    status: 'Disponible en tienda',
  },
  {
    brand: 'BIC',
    category: 'BIC',
    tag: 'Plumón',
    image: mockImages.bicMarker,
    title: 'BIC 4 Colores',
    description: 'Set de plumones con colores vivos para resaltar, decorar y trabajar en proyectos.',
    status: 'Disponible en tienda',
  },
  {
    brand: 'BIC',
    category: 'BIC',
    tag: 'Pluma',
    image: mockImages.bicPen,
    title: 'BIC Fusión',
    description: 'Pluma de trazo elegante y cómodo agarre, ideal para escritura prolongada.',
    status: 'Bajo pedido',
  },
  {
    brand: 'Oxford',
    category: 'Papelería Escolar',
    tag: 'Cuaderno',
    image: mockImages.notebookClassic,
    title: 'Cuaderno Oxford Profesional',
    description: 'Papel de alta calidad, cosido y resistente para tareas, apuntes y organización.',
    status: 'Disponible en tienda',
  },
  {
    brand: 'Norma',
    category: 'Papelería Escolar',
    tag: 'Cuaderno',
    image: mockImages.notebookSpiral,
    title: 'Cuaderno Norma Spiral',
    description: 'Formato práctico con tapas durables y excelente presentación para la escuela.',
    status: 'Disponible en tienda',
  },
  {
    brand: 'Moleskine',
    category: 'Papelería Escolar',
    tag: 'Cuaderno',
    image: mockImages.notebookHardcover,
    title: 'Cuaderno Moleskine Clásico',
    description: 'Diseño premium para ideas, apuntes creativos, listas y proyectos personales.',
    status: 'Bajo pedido',
  },
  {
    brand: 'BIC',
    category: 'BIC',
    tag: 'Marcador',
    image: mockImages.markerSet,
    title: 'Marcadores BIC Punta Gruesa',
    description: 'Excelente para resaltar información en textos, cuadernos y material de estudio.',
    status: 'Disponible en tienda',
  },
  {
    brand: 'BIC',
    category: 'Material escolar',
    tag: 'Material',
    image: mockImages.penSet,
    title: 'Set de útiles BIC para escuela',
    description: 'Bolígrafos, resaltadores y accesorios para completar tu kit escolar del día a día.',
    status: 'Disponible en tienda',
  },
  {
    brand: 'Luma',
    category: 'Arte y manualidades',
    tag: 'Arte',
    image: mockImages.highlighters,
    title: 'Resaltadores Luma Pastel',
    description: 'Juego de marcadores para proyectos creativos, diagramas y trabajos visuales.',
    status: 'Disponible en tienda',
  },
  {
    brand: 'Store',
    category: 'Oficina',
    tag: 'Organización',
    image: mockImages.folders,
    title: 'Carpetas de archivo esenciales',
    description: 'Soluciones prácticas para ordenar documentos, tareas y materiales de oficina.',
    status: 'Bajo pedido',
  },
]

const values = [
  { icon: 'handshake', title: 'Trato Amable', text: 'Atención con paciencia' },
  { icon: 'diversity_3', title: 'Vocación', text: 'Compromiso genuino' },
  { icon: 'store', title: 'Comunidad', text: 'Impulso a la zona local' },
]

const services = [
  {
    icon: 'print',
    title: 'Copias e Impresiones',
    description:
      'Impresiones láser y tinta continua en blanco y negro o full color en alta definición.',
    action: 'Enviar archivo por WhatsApp',
  },
  {
    icon: 'layers',
    title: 'Enmicados & Plastificados',
    description:
      'Protege tus credenciales, actas, certificados y fotografías contra el agua y el tiempo.',
    action: 'Consultar medidas y formatos',
  },
  {
    icon: 'architecture',
    title: 'Maquetas & Proyectos',
    description:
      'Bases de unicel, cascarón, plastilinas, árboles a escala y pegamentos especiales.',
    action: 'Cotizar kit para maqueta',
  },
  {
    icon: 'language',
    title: 'Trámites por Internet',
    description:
      'Descarga e impresión de CURP, actas, RFC y escaneo directo a USB o correo.',
    action: 'Asistencia para tu trámite',
  },
]

const paymentMethods = ['Efectivo', 'Tarjetas Débito/Crédito', 'Vales de Despensa']

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todo')

  const filteredProducts =
    selectedCategory === 'Todo'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="app-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-group">
            <span className="topbar-item">
              <span className="material-symbols-outlined">payments</span>
              Aceptamos efectivo, tarjetas de débito/crédito y vales de despensa
            </span>
            <span className="divider">|</span>
            <span className="topbar-item schedule-item">
              <span className="material-symbols-outlined">schedule</span>
              Lun - Sáb: 8:00 AM - 8:30 PM | Dom: 9:00 AM - 3:00 PM
            </span>
          </div>
          <div className="topbar-links">
            <a href="https://wa.me/" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Tienda Directo
            </a>
            <span className="divider">|</span>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">public</span>
              Facebook Oficial
            </a>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Papelería Denhil inicio">
            <div className="brand-mark">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: 'FILL 1' }}>
                auto_stories
              </span>
            </div>
            <div className="brand-copy">
              <span className="brand-name">Papelería Denhil</span>
              <span className="brand-tag">Un Mundo de Todo</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-link" href="#contacto">
              Estamos abiertos
            </a>
            <a className="primary-button small" href="https://wa.me/" target="_blank" rel="noreferrer">
              Cotizar
            </a>
          </div>
        </div>
      </header>

      <main className="page-main">
        <section className="hero-section" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Papelería y servicios para escuela, oficina y hogar</span>
              <h1>Todo lo que necesitas para estudiar, trabajar y crear.</h1>
              <p>
                En Papelería Denhil cuidamos cada detalle para que encuentres útiles escolares,
                materiales de oficina, arte y servicios de impresión con atención cercana y rápida.
              </p>

              <div className="cta-group">
                <a className="whatsapp-button" href="https://wa.me/" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined">chat</span>
                  Cotizar por WhatsApp
                </a>
                <a className="secondary-button" href="#catalogo">
                  Ver catálogo
                </a>
              </div>

              <ul className="trust-list">
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  Surtido real en tienda
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  Atención personalizada
                </li>
                <li>
                  <span className="material-symbols-outlined">check_circle</span>
                  Pedidos con entrega ágil
                </li>
              </ul>
            </div>

            <div className="hero-visual">
              <div className="featured-card" style={{ backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.92), rgba(0, 40, 142, 0.9)), url(${mockImages.facade})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className="featured-tag">Lo más solicitado</span>
                <h3>Material para regreso a clases</h3>
                <div className="mini-stats">
                  <div>
                    <strong>1,200+</strong>
                    <span>Artículos</span>
                  </div>
                  <div>
                    <strong>4.9/5</strong>
                    <span>Atención</span>
                  </div>
                  <div>
                    <strong>24h</strong>
                    <span>Respuesta</span>
                  </div>
                </div>
              </div>

              <div className="floating-quote-card">
                <div className="mini-avatar">D</div>
                <div>
                  <p>“Material confiable para cada proyecto y cada día escolar.”</p>
                  <span>Familia Denhil</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="promo-section" id="promociones">
          <div className="container">
            <div className="promo-banner">
              <div className="promo-copy">
                <span className="promo-badge">¡Promoción Escolar y de Oficina!</span>
                <h2>
                  En la compra de 5 productos del mismo precio, ¡el sexto tiene 50% de descuento!
                </h2>
                <p>
                  Aplica en cuadernos, bolígrafos, cartulinas, carpetas y consumibles seleccionados
                  para que surtas tu lista completa ahorrando más.
                </p>
              </div>
              <div className="promo-action">
                <a href="https://wa.me/" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined">local_offer</span>
                  <span>Aprovechar oferta vía WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section" id="nosotros">
          <div className="container story-grid">
            <div className="story-copy">
              <span className="section-pill">
                <span className="material-symbols-outlined">favorite</span>
                Corazón, familia y esfuerzo
              </span>
              <h2>Nuestra historia: el sueño de crear un hogar para tus proyectos</h2>

              <div className="story-text">
                <p>
                  Todo comenzó con la entrega y dedicación de su fundadora, quien con paciencia y
                  maestría elaboraba forros artesanales cosidos a mano para cuadernos escolares.
                </p>

                <div className="story-panel">
                  <h3>
                    <span className="material-symbols-outlined">family_star</span>
                    ¿Por qué el nombre «DENHIL»?
                  </h3>
                  <p>
                    Detrás de nuestro letrero existe una entrañable historia familiar: <strong>«DEN»</strong>
                    rinde tributo a las primeras letras del nombre de su querida hija, mientras que
                    <strong>«HIL»</strong> proviene de su propio nombre de cariño, Maria Nilla.
                  </p>
                </div>

                <p>
                  Hoy, Papelería Denhil sigue siendo ese espacio cercano donde no eres un número de
                  orden, sino un vecino al que escuchamos y ayudamos a encontrar exactamente lo que
                  necesita.
                </p>
              </div>

              <div className="value-grid">
                {values.map((value) => (
                  <div key={value.title} className="value-card">
                    <span className="material-symbols-outlined">{value.icon}</span>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="story-visual">
              <div className="story-image-frame">
                <img
                  src={mockImages.story}
                  alt="Espacio artesanal de papelería con materiales y trabajo familiar"
                />
              </div>
              <div className="quote-card">
                <p>
                  “Desde el primer cuaderno forrado a mano, nuestro compromiso siempre ha sido
                  servir a cada familia con esmero.”
                </p>
                <span>— Familia Denhil</span>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-section" id="catalogo">
          <div className="container catalog-shell">
            <div className="section-heading">
              <div>
                <span className="section-pill compact">
                  <span className="material-symbols-outlined">inventory_2</span>
                  Catálogo Extenso &amp; Surtido Inmediato
                </span>
                <h2>Explora Nuestro Mundo de Todo</h2>
              </div>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                ¿Buscas una lista completa? Envíala aquí
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            <div className="filter-row" aria-label="Categorías del catálogo">
              {categories.map((category) => (
                <button
                  key={category.label}
                  type="button"
                  className={selectedCategory === category.label ? 'filter-pill active' : 'filter-pill'}
                  onClick={() => setSelectedCategory(category.label)}
                >
                  <span className="material-symbols-outlined">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="empty-state">No hay productos en esta categoría por el momento.</div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <article key={`${product.title}-${product.brand}`} className="product-card">
                    <div className="product-image-wrap">
                      <img src={product.image} alt={product.title} />
                      <span className="product-tag">{product.tag}</span>
                    </div>
                    <div className="product-body">
                      <span className="product-brand">{product.brand}</span>
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                    </div>
                    <div className="product-footer">
                      <span className="status-pill">{product.status}</span>
                      <a href="https://wa.me/" target="_blank" rel="noreferrer">
                        Cotizar por WhatsApp
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="seasonal-section">
          <div className="container seasonal-shell">
            <div className="seasonal-header">
              <div>
                <span className="section-tag">Temáticas Dinámicas</span>
                <h3>Especial de Temporadas Denhil</h3>
                <p>Materiales preparados para festividades, manualidades y listas del ciclo escolar.</p>
              </div>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                <span className="material-symbols-outlined">help</span>
                Consultar materiales específicos
              </a>
            </div>

            <div className="seasonal-grid">
              <div className="seasonal-card">
                <div className="icon-box">
                  <span className="material-symbols-outlined">backpack</span>
                </div>
                <h4>Listas Escolares Completas</h4>
                <p>
                  Envíanos foto de tu lista oficial por WhatsApp. Nosotros la surtimos por ti y te la
                  entregamos lista para recoger.
                </p>
                <a href="https://wa.me/">
                  Enviar mi lista por WhatsApp
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>

              <div className="seasonal-card">
                <div className="icon-box">
                  <span className="material-symbols-outlined">celebration</span>
                </div>
                <h4>Día de Muertos &amp; Tradiciones</h4>
                <p>
                  Papel picado, calaveritas para colorear, cartoncillo naranja y morado, papel crepé y
                  artículos para altares escolares.
                </p>
                <a href="https://wa.me/">
                  Apartar material de temporada
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>

              <div className="seasonal-card">
                <div className="icon-box">
                  <span className="material-symbols-outlined">redeem</span>
                </div>
                <h4>Navidad y Regalos</h4>
                <p>
                  Papel de regalo brillante, moños artesanales confeccionados en tienda, bolsas
                  temáticas y tarjetas de dedicatoria.
                </p>
                <a href="https://wa.me/">
                  Consultar envolturas especiales
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" id="servicios">
          <div className="container services-shell">
            <div className="services-header">
              <span className="section-tag">Soluciones Prácticas</span>
              <h2>Servicios de Cómputo e Impresión</h2>
              <p>
                Ahorra tiempo y filas. Realizamos tus impresiones y trámites con rapidez y la máxima
                resolución.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon">
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="https://wa.me/" target="_blank" rel="noreferrer">
                    <span>{service.action}</span>
                    <span className="material-symbols-outlined">send</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="service-banner">
              <div className="service-banner-copy">
                <span className="service-banner-badge">
                  <span className="material-symbols-outlined">bolt</span>
                  Servicio Rápido Cero Filas
                </span>
                <h3>Envía tus archivos para imprimir y recógelos listos</h3>
                <p>
                  ¿Llevas prisa para la escuela o la oficina? Mándanos tus documentos por WhatsApp o
                  correo electrónico especificando el formato.
                </p>
                <div className="service-banner-actions">
                  <a className="whatsapp-button" href="https://wa.me/" target="_blank" rel="noreferrer">
                    <span className="material-symbols-outlined">chat</span>
                    Enviar por WhatsApp
                  </a>
                  <a className="ghost-button" href="mailto:papeleriadenhil@ejemplo.com">
                    <span className="material-symbols-outlined">mail</span>
                    Enviar por Correo
                  </a>
                </div>
              </div>

              <div className="process-card">
                <h4>
                  <span className="material-symbols-outlined">checklist</span>
                  ¿Cómo funciona?
                </h4>
                <ol>
                  <li>
                    <span>1</span>
                    Envía tu archivo con tus indicaciones.
                  </li>
                  <li>
                    <span>2</span>
                    Te confirmamos la recepción y el tiempo estimado.
                  </li>
                  <li>
                    <span>3</span>
                    Pasa a mostrador, paga y ¡listo!
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="container contact-shell">
            <div className="contact-header">
              <span className="section-tag">Siempre Cerca de Ti</span>
              <h2>Ubicación, Horarios y Contacto</h2>
              <p>
                Visítanos en nuestra tienda física o comunícate directamente con nuestro equipo de
                atención.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-details">
                <div className="detail-card">
                  <div className="detail-icon">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4>Dirección de la Tienda</h4>
                    <p>
                      Papelería Denhil — Calle Principal #21, Colonia Centro, Ciudad de México,
                      México.
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                      Cómo llegar en Google Maps
                      <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="detail-icon">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4>Horario de Atención</h4>
                    <div className="schedule-list">
                      <p>
                        <span>Lunes a Sábado:</span>
                        <span>8:00 AM – 8:30 PM</span>
                      </p>
                      <p>
                        <span>Domingo:</span>
                        <span>9:00 AM – 3:00 PM</span>
                      </p>
                    </div>
                    <span className="status-badge">Abierto en horario extendido en temporada escolar</span>
                  </div>
                </div>

                <div className="social-card">
                  <div className="social-header">
                    <span className="material-symbols-outlined">public</span>
                    <div>
                      <h4>Comunidad en Facebook</h4>
                      <p>Dinámicas, avisos de descanso y novedades</p>
                    </div>
                  </div>
                  <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                    Síguenos en Facebook
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </div>

              <div className="map-panel">
                <div className="map-surface" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${mockImages.map})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="map-pin-card">
                    <div className="map-pin-icon">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: 'FILL 1' }}>
                        location_on
                      </span>
                    </div>
                    <h4>Papelería Denhil</h4>
                    <p>Calle Principal #21 • Mostrador abierto</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                      Abrir Navegación GPS
                      <span className="material-symbols-outlined">navigation</span>
                    </a>
                  </div>
                </div>
                <div className="map-note">
                  <span className="material-symbols-outlined">info</span>
                  Tus pedidos se atienden al instante por WhatsApp o directo en mostrador
                  <a href="https://wa.me/" target="_blank" rel="noreferrer">
                    Chatear ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#inicio">Papelería Denhil</a>
            <p>Un Mundo de Todo</p>
            <span>
              Tradición familiar y servicio comprometido con el aprendizaje y los proyectos de toda
              nuestra comunidad escolar y empresarial.
            </span>
          </div>

          <div className="footer-column">
            <h4>Catálogo y Servicios</h4>
            <ul>
              <li><a href="#catalogo">Catálogo Escolar</a></li>
              <li><a href="#servicios">Servicios de Impresión</a></li>
              <li><a href="#promociones">Promociones del Mes</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Conócenos</h4>
            <ul>
              <li><a href="#nosotros">Historia Denhil</a></li>
              <li><a href="#contacto">Ubicación y Horarios</a></li>
              <li><a href="#contacto">Aviso de Privacidad</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Métodos de Pago</h4>
            <div className="payment-tags">
              {paymentMethods.map((method) => (
                <span key={method}>{method}</span>
              ))}
            </div>
            <p>¿Dudas sobre material o surtido especial?</p>
            <a className="footer-whatsapp" href="https://wa.me/" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">chat</span>
              Contactar a Mostrador
            </a>
          </div>
        </div>

        <div className="container footer-bar">
          <p>© 2024 Papelería Denhil. Un Mundo de Todo. Todos los derechos reservados.</p>
          <div>
            <span>Hecho con dedicación familiar</span>
            <span className="dot">•</span>
            <a href="#inicio">Volver arriba</a>
          </div>
        </div>
      </footer>

      <div className="floating-button-wrap">
        <a className="floating-bubble" href="https://wa.me/" target="_blank" rel="noreferrer">
          <span className="pulse-dot" />
          En línea • <strong>Cotiza aquí sin compromiso</strong>
        </a>
        <a
          aria-label="Cotizar por WhatsApp"
          className="fab-button"
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          title="Cotizar por WhatsApp"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: 'FILL 1' }}>
            chat
          </span>
        </a>
      </div>
    </div>
  )
}

export default App
