// No folder app (atual), sempre que criamos outra pasta (ex. list/list.tsx), ele automaticamente vira uma rota. Ou seja,
// as páginas da aplicação ficam dentro da pasta app. 

import Logo from '../components/logo'
import MainTable from '@/components/MainTable'

interface Product{
  reference: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default function Home() {
  
  return (
    <div>
      <Logo />
      <MainTable />
    </div>
  )
}