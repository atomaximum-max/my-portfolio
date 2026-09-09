import { useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { BackButton } from '../../components/ui/BackButton';

// Динамический импорт компонентов кейсов
const cases = {
  collecta: lazy(() => import('../CasePage/cases/CollectaCase')),

};

export default function CasePage() {
  const { id } = useParams<{ id: string }>();

  // Если кейс не найден — показываем 404
  if (!id || !cases[id as keyof typeof cases]) {
    return (
      <main>
        <BackButton />
        <div className="container case__container"> 
          <p className="case__not-found">Кейс не найден</p>
        </div>
      </main>
    );
  }

  const CaseComponent = cases[id as keyof typeof cases];

  return (
    <main>
        <BackButton />
        <Suspense fallback={<div className="container case__loading">Загрузка...</div>}>
          <CaseComponent />
        </Suspense>
    </main>
  );
}