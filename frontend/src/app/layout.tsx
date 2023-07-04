import './globals.css'

export const metadata = {
  title: 'Mini Bags Bolsas',
  description: 'Mini Bags Bolsas',
}

export default function RootLayout({children}: {children: React.ReactNode}) {// Essa função é usada caso queremos adicionar algo em todas as páginas, ou seja, padronizar o layout
  
  return ( 
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
