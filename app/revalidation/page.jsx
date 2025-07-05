import Link from "next/link";

const cursos = [
  {
    id: 1,
    title: "Econometría con software",
    descripcion: "Aprende econometría aplicada usando Excel, Stata, R y SPSS.",
    lecciones: "13/29",
    progreso: 0,
  },
  {
    id: 2,
    title: "Estadística con R",
    descripcion: "Fundamentos de estadística descriptiva e inferencial con R.",
    lecciones: "3/8",
    progreso: 0,
  },
  {
    id: 3,
    title: "Matemáticas para econometría",
    descripcion: "Conceptos matemáticos esenciales para el análisis econométrico.",
    lecciones: "2/2",
    progreso: 0,
  },
];

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <header className="flex items-center justify-between mb-8">
        <Link href="/" className="text-blue-600 font-semibold text-lg">
          ⬅ Home
        </Link>
        <h1 className="text-2xl font-bold text-neutral-800">Cursos</h1>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              {curso.title}
            </h2>
            <p className="text-gray-600 mb-4">{curso.descripcion}</p>
            <div className="text-sm text-gray-500 mb-2">
              Lecciones: {curso.lecciones}
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${curso.progreso}%` }}
              ></div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Continuar Aprendiendo
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

