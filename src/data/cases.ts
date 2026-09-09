export interface CaseData {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
  link: string;
}

export const casesData: CaseData[] = [
  {
    id: 'collecta',
    year: '2026',
    title: 'Платформа аналитики «Collecta»',
    description: 'Разработка пользовательского интерфейса платформы для сбора, обработки, анализа и автоматизации работы с большими объёмами данных',
    image: '/src/assets/img/Collecta.jpg',
    link: '/case/collecta',
  },
  {
    id: 'proxway',
    year: '2025-2026',
    title: 'СКУД для ГК «Эликс»',
    description: 'Редизайн пользовательского интерфейса системы контроля и управления доступом на объектах с поддержкой систем биометрии и видеонаблюдения',
    image: '/src/assets/img/ProxWay.jpg',
    link: '/case/proxway',
  },
  {
    id: 'velobike',
    year: '2024-2025',
    title: 'IoT-платформа «Велобайк»',
    description: 'Разработка отечественной IoT-платформы управления городским прокатом мобильного транспорта для компании Велобайк (АО Ситибайк)',
    image: '/src/assets/img/Velobike.jpg',
    link: '/case/velobike',
  },
  {
    id: 'transneft',
    year: '2022-2024',
    title: 'КИС ЛКК для ПАО «Транснефть»',
    description: 'Проектирование корпоративной информационной системы личного кабинета контрагента для обеспечения взаимодействия с учётными сервисами',
    image: '/src/assets/img/Transneft.jpg',
    link: '/case/transneft',
  },
];

// Вспомогательная функция для поиска кейса по ID
export const getCaseById = (id: string): CaseData | undefined => {
  return casesData.find((item) => item.id === id);
};