import { useParams } from 'react-router-dom'

export default function CasePage() {
  const { id } = useParams()
  
  return (
    <main>
      <h1>Кейс #{id}</h1>
      <p>Описание конкретного кейса</p>
    </main>
  )
}