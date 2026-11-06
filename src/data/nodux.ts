import { NoduxTab } from '../types';

export const noduxTabsData: NoduxTab[] = [
  {
    id: 'suites',
    label: '1. PhyData AI & Motor de Datos',
    iconName: 'Database',
    platforms: [
      {
        title: 'PhyData AI — Limpieza y Optimización con IA',
        category: 'Ingeniería de Datos',
        badge: 'DATA QUALITY & ML SUITE',
        description:
          'Plataforma inteligente desarrollada por nuestro equipo técnico para la ingesta masiva, previsualización, diagnóstico automatizado, limpieza asistida por IA, validación relacional y generación de reportes ejecutivos sobre bases de datos empresariales.',
        tags: [
          'Ingesta Masiva',
          'Diagnóstico IA',
          'Estandarización SKU',
          'Validación Human-in-the-Loop',
        ],
      },
      {
        title: 'Nodux AI & Despacho Transaccional Rápido',
        category: 'B2B Operations',
        badge: 'ASISTENTE & AUTOMATIZACIÓN',
        description:
          'Transformamos catálogos físicos y hojas de cálculo fragmentadas en infraestructuras de consulta inmediata y despacho por WhatsApp, reduciendo el tiempo de cotización en mostrador de 4 minutos a 10 segundos.',
        tags: ['WhatsApp B2B', 'RAG Transaccional', 'Cotización Instantánea'],
        subNote: 'Validado en programa Aprende a Emprender (Produce)',
        ctaText: 'Ver en Web',
        ctaUrl: 'https://nx-profiler-nine.vercel.app',
      },
    ],
  },
  {
    id: 'portafolio',
    label: '2. Portafolio de Plataformas Desplegadas (4)',
    iconName: 'LayoutGrid',
    platforms: [
      {
        title: 'Plataforma E-Commerce Nodux',
        category: 'E-Commerce & Logística',
        badge: 'VENTAS & STOCK',
        description:
          'Solución integral de comercio electrónico con gestión de inventarios en tiempo real, carrito optimizado y pasarela de pagos para operaciones de alto volumen.',
        tags: ['Angular', 'TypeScript', 'RxJS', 'Payments API'],
      },
      {
        title: 'Nodux Educa — EdTech LMS',
        category: 'Sector Educativo',
        badge: 'EDTECH PLATFORM',
        description:
          'Plataforma educativa interactiva orientada a la gestión de cursos, alumnos y material didáctico optimizada para alta concurrencia y retención pedagógica.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel Edge'],
      },
      {
        title: 'Portal Automotriz NX-7 PHEV',
        category: 'Sector Automotriz',
        badge: 'INTERACTIVE 3D/EXPERIENCE',
        description:
          'Landing page inmersiva con visualizador interactivo de modelos, acabados, especificaciones técnicas y cotizador dinámico multicanal.',
        tags: ['JavaScript', 'HTML5/CSS3', 'WebGL/Canvas', 'CRM Hook'],
      },
      {
        title: 'Web Corporativa Institucional',
        category: 'Empresas B2B',
        badge: 'HIGH CONVERSION B2B',
        description:
          'Portales corporativos de alto impacto enfocados en conversión comercial B2B, arquitectura de componentes robusta y tiempos de carga inmediatos.',
        tags: ['Angular', 'SCSS', 'TypeScript', 'SEO Técnico'],
      },
    ],
  },
  {
    id: 'consultoria',
    label: '3. Preventa B2B, Saneamiento & ROI',
    iconName: 'TrendingUp',
    platforms: [
      {
        title: 'Dictamen de Costo de No-Calidad',
        category: 'DOC-03 · Diagnóstico Financiero',
        badge: 'AUDITORÍA FINANCIERA',
        description:
          'Auditoría técnica para cuantificar el capital inmovilizado, compras dobles por duplicados y pérdida de horas-hombre en almacenes B2B.',
        tags: ['TCO Analysis', 'Costos Ocultos', 'Inventario Crítico', 'C-Level Report'],
      },
      {
        title: 'Base Maestra Estandarizada',
        category: 'DOC-09 · Higiene de Datos',
        badge: 'NORMALIZACIÓN MASTER DATA',
        description:
          'Consolidación y normalización semántica de hasta 3,000 SKUs con taxonomía de familias, unidades de medida y alertas de auditoría en piso.',
        tags: ['Taxonomía SKU', 'Unidades de Medida', 'Deduplicación', 'Auditoría en Piso'],
      },
      {
        title: 'Matrices de Sensibilidad para Gerencia',
        category: 'Business Case & ROI',
        badge: 'MODELADO DE RETORNO',
        description:
          'Modelado de retorno de inversión (Payback en días) en escenarios Conservador, Moderado y Óptimo para cierre con decisores y CFOs.',
        tags: ['Payback Model', 'Escenarios P&L', 'SLA Garantizado', 'CFO Approval'],
      },
    ],
  },
  {
    id: 'crm',
    label: '4. Commercial OS (CRM B2B & FinOps)',
    iconName: 'Sparkles',
    platforms: [
      {
        title: 'Pipeline Ponderado & AutoScout B2B',
        category: 'Prospección IA & Kanban',
        badge: 'MOTOR GEMINI · DOC-02 READY',
        description:
          'Sistema comercial de 7 etapas estructuradas para gobernar el ciclo de ventas completo: (1) extracción de leads vía Omnibox Search, (2) contacto express en 45s, (3) diagnóstico técnico con motor Gemini, (4) propuesta DOC-02 Ready, (5) seguimiento Kanban ponderado, (6) cobro anticipo 50% y (7) retención MRR.',
        tags: ['AutoScout B2B', 'Caja Proyectada', 'Valor Facial de Cartera', 'Omnibox Search'],
        ctaText: 'Abrir Commercial OS',
        ctaUrl: 'https://nodux-commercial-os-two.vercel.app',
        subNote: 'App en Producción — Desplegada en Vercel',
      },
      {
        title: 'Simulador de ROI & Gestión de Stock Muerto',
        category: 'FinOps & Business Modeling',
        badge: 'ROI +418% · PAYBACK 69D',
        description:
          'Cuadro de mando FinOps para cuantificar tiempo liberado (48h/mes) y ahorro directo por automatización de digitación. Calcula el Payback real en días y desglosa el margen bruto entre Setup (~78%) y Continuidad MRR (~90%). Incluye detector de stock muerto para campañas Outlet B2B.',
        tags: ['Payback en Días', 'Setup vs MRR', 'Alertas Stock Muerto', 'Dictamen C-Level'],
        ctaText: 'Probar Simulador Live',
        ctaUrl: 'https://nodux-commercial-os-two.vercel.app',
        subNote: 'Módulo FinOps & Simulador B2B',
      },
    ],
  },
];
