import collectaImage from '../assets/img/Collecta.jpg';
import proxwayImage from '../assets/img/ProxWay.jpg';
import velobikeImage from '../assets/img/Velobike.jpg';
import transneftImage from '../assets/img/Transneft.jpg';
import sportregionImage from '../assets/img/Sport-Region.jpg';
import geofocusImage from '../assets/img/Geofocus.jpg';

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
    image: collectaImage,
    link: '/case/collecta',
  },
  {
    id: 'proxway',
    year: '2025-2026',
    title: 'СКУД для ГК «Эликс»',
    description: 'Редизайн пользовательского интерфейса системы контроля и управления доступом на объектах с поддержкой систем биометрии и видеонаблюдения',
    image: proxwayImage,
    link: '/case/proxway',
  },
  {
    id: 'velobike',
    year: '2024-2025',
    title: 'IoT-платформа «Велобайк»',
    description: 'Разработка отечественной IoT-платформы управления городским прокатом мобильного транспорта для компании Велобайк (АО Ситибайк)',
    image: velobikeImage,
    link: '/case/velobike',
  },
  {
    id: 'transneft',
    year: '2022-2024',
    title: 'КИС ЛКК для ПАО «Транснефть»',
    description: 'Проектирование корпоративной информационной системы личного кабинета контрагента для обеспечения взаимодействия с учётными сервисами',
    image: transneftImage,
    link: '/case/transneft',
  },
  {
    id: 'sport-region',
    year: '2023-2024',
    title: 'Информационный портал «Sport-Region»',
    description: 'UX/UI дизайн информационного портала для городских умных спортивных комплексов с доступом по QR-коду и админ-кабинетом для управления контентом',
    image: sportregionImage,
    link: '/case/sport-region',
  },
  {
    id: 'geofocus',
    year: '2022-2023',
    title: 'Система мониторинга «Geofocus»',
    description: 'Разработка современного отечественного решения для контроля местоположения персонала и активов на производстве в режиме реального времени',
    image: geofocusImage,
    link: '/case/geofocus',
  },
];

// Вспомогательная функция для поиска кейса по ID
export const getCaseById = (id: string): CaseData | undefined => {
  return casesData.find((item) => item.id === id);
};