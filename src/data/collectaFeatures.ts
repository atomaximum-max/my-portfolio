import checkIcon from '../assets/img/check-icon.svg';
import crossIcon from '../assets/img/cross-icon.svg';
import partialIcon from '../assets/img/partial-icon.svg';

export interface FeatureRow {
    name: string;
    collecta: string;
    grafana: string;
    signoz: string;
    kibana: string;
    splunk: string;
}

export const collectaFeatures: FeatureRow[] = [
    {
        name: 'Сбор данных из любых источников',
        collecta: checkIcon,
        grafana: partialIcon,
        signoz: checkIcon,
        kibana: partialIcon,
        splunk: checkIcon,
    },
    {
        name: 'Обработка и трансформация данных',
        collecta: checkIcon,
        grafana: crossIcon,
        signoz: crossIcon,
        kibana: partialIcon,
        splunk: partialIcon,
    },
    {
        name: 'Аналитика и поиск по данным (SQL)',
        collecta: checkIcon,
        grafana: crossIcon,
        signoz: crossIcon,
        kibana: checkIcon,
        splunk: checkIcon,
    },
    {
        name: 'Визуализация и дашборды',
        collecta: checkIcon,
        grafana: checkIcon,
        signoz: partialIcon,
        kibana: checkIcon,
        splunk: partialIcon,
    },
    {
        name: 'Автоматизация сценариев и конвейеров',
        collecta: checkIcon,
        grafana: crossIcon,
        signoz: crossIcon,
        kibana: partialIcon,
        splunk: partialIcon,
    },
    {
        name: 'Реагирование на события в реальном времени',
        collecta: checkIcon,
        grafana: checkIcon,
        signoz: checkIcon,
        kibana: partialIcon,
        splunk: checkIcon,
    },
    {
        name: 'AI-ассистент и интеллектуальный анализ',
        collecta: checkIcon,
        grafana: crossIcon,
        signoz: crossIcon,
        kibana: crossIcon,
        splunk: partialIcon,
    },
    {
        name: 'Единая платформа "все в одном"',
        collecta: checkIcon,
        grafana: crossIcon,
        signoz: crossIcon,
        kibana: crossIcon,
        splunk: crossIcon,
    },
    {
        name: 'Гибкость и low-code подход',
        collecta: checkIcon,
        grafana: crossIcon,
        signoz: crossIcon,
        kibana: partialIcon,
        splunk: partialIcon,
    },
    {
        name: 'Развертывание On-Premise и в облаке',
        collecta: checkIcon,
        grafana: checkIcon,
        signoz: checkIcon,
        kibana: checkIcon,
        splunk: checkIcon,
    },
];