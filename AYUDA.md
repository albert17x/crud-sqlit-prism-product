# Tutorial de FaztCode
https://www.youtube.com/watch?v=h3OKuR7kfzM&t=8089s



# INSTALAR PRISMA
npm install prisma --save-dev

# INICIALISAR PRISMA
npx prisma init --datasource-provider sqlite
(npm install @prisma/client)

* Crear el Schema primero y luego hacer Migrate *
# PRISMA MIGRATE
npx prisma migrate dev --name migra1

# VER BASES DE DATOS
npx prisma studio

# Rutas con id.(params)
export const GET = async (req, {params}) => {
  return NextResponse.json("Obteniendo tarea " + params.id)
}

export const PUT = async (req, {params}) => {
    return NextResponse.json("Modificando tarea " + params.id)
}

export const DELETE = async (req, {params}) => {
    return NextResponse.json("Borrando tarea " + params.id)
}