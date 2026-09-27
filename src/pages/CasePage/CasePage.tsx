import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/ui/BackButton';

import CollectaCase from './cases/CollectaCase';
import ProxWayWebCase from './cases/ProxWayWebCase';

const cases = {
  collecta: CollectaCase,
  proxway: ProxWayWebCase,
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
          <CaseComponent />
    </main>
  );
}