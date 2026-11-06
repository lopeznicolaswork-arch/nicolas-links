import { Podium } from '../types';

export const podiumsData: Podium[] = [
  {
    id: 'aws-kiro',
    place: '🏆 3.ER PUESTO NACIONAL',
    badgeColor: 'amber',
    date: 'Oct 2026',
    title: 'IAthon AWS & Kiro — ESAN x Fundación Romero',
    description:
      'Podio nacional superando a 40 escuadras (240 competidores). Lideré la estrategia de producto, el caso de negocio FinOps y la defensa ante jurado C-Level de una arquitectura Serverless (AWS Lambda, DynamoDB Single-Table, Amazon Bedrock Claude 3 Haiku) y el sistema Kiro RestQube.',
    tech: 'AWS Serverless & QUBO',
    link: 'https://kirorestqube.vercel.app',
    linkText: 'Abrir Kiro RestQube ↗',
    footerNote: 'Validado ante jurado ESAN & AWS',
  },
  {
    id: 'hp-impact',
    place: '🥇 1.ER PUESTO (10/10)',
    badgeColor: 'blue',
    date: 'NauFest 2026',
    title: 'Challenge Internacional #AIforImpact — HP & JA Americas',
    description:
      'Campeón con calificación perfecta (10/10) otorgada por el jurado evaluador. Estructuré el modelo de viabilidad comercial y arquitectura de IA responsable orientada a eliminar fricciones operativas y mermas financieras en micro y pequeñas empresas.',
    tech: 'HP Inc. & Junior Achievement',
    footerNote: 'Puntaje Perfecto 10/10',
  },
  {
    id: 'ibm-quantum',
    place: '⚛️ CLASIFICADO OFICIAL',
    badgeColor: 'indigo',
    date: 'PUCP x UTEC',
    title: 'IEEE / IBM Quantum Hackathon Perú',
    description:
      'Líder del equipo Nodux Quantum. Resolución del problema de asignación cuadrática (instancia qap10.mps con 4,150 variables) mediante arquitectura híbrida Q-LNS / QAOA en Qiskit Aer, logrando un 27.04% de reducción de costo operativo (+2.94% gap vs. óptimo global) y proyectando ahorros de S/ 28,000 anuales por almacén.',
    tech: 'Qiskit Aer · QUBO (λ=60)',
    footerNote: '+ Seleccionado UTP x El Comercio',
  },
];
