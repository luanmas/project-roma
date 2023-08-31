import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Model , createServer } from 'miragejs';

createServer({
    models: {
      weekRoutine : Model,
    },

    seeds(server) {
      server.db.loadData({
        monday: [
          {
            title: "tarefa de casa",
            description : "pagina 25 de matemática",
            createdAt : new Date()
          },
          {
            title: "Tarefa domestica",
            description : "Limpar banheiro",
            createdAt : new Date()
          }
        ],
      })
    },

    routes() {
      this.namespace = "api";

      this.get("/routine" , () => {
          return this.schema.all("weekRoutine")
      })

      this.post("/routine" , (schema , request) => {
        const data = JSON.parse(request.requestBody);
        
        return schema.create("weekRoutine" , data);
      })
    }
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Routine Manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={`${inter.className} md:h-screen md:w-screen flex md:justify-center md:items-center`}>
          {children}
        </body>
    </html>
  )
}
