import Link from "next/link";

const cursos = [
{
id: 1,
title: "Fundamentos de la Econometría",
slug: "fundamentos",
descripcion: "Aprende econometría aplicada usando Excel, Stata, R y SPSS.",
lecciones: "29",
progreso: 0,
},
{
id: 2,
title: "Microeconometría aplicada",
slug: "microeconometria",
descripcion: "Aprende econometría aplicada usando Excel, Stata, R y SPSS.",
lecciones: "29",
progreso: 0,
},
{
id: 3,
title: "Macroeconometría aplicada",
slug: "macroeconometria",
descripcion: "Aprende econometría aplicada usando Excel, Stata, R y SPSS.",
lecciones: "29",
progreso: 0,
},
{
id: 4,
title: "Evaluación de impacto",
slug: "evaluacion-impacto",
descripcion: "Aprende econometría aplicada usando Excel, Stata, R y SPSS.",
lecciones: "29",
progreso: 0,
},
{
id: 5,
title: "Econometría Financiera",
slug: "financiera",
descripcion: "Aprende econometría aplicada usando Excel, Stata, R y SPSS.",
lecciones: "29",
progreso: 0,
},
{
id: 6,
title: "Econometría Bayesiana",
slug: "bayesiana",
descripcion: "Aprende econometría aplicada usando Excel, Stata, R y SPSS.",
lecciones: "29",
progreso: 0,
},
{
id: 7,
title: "Econometría espacial",
slug: "espacial",
descripcion: "Aprende econometría aplicada usando Excel, Stata, R y SPSS.",
lecciones: "29",
progreso: 0,
},
{
id: 8,
title: "Estadística con R",
slug: "estadistica-r",
descripcion: "Fundamentos de estadística descriptiva e inferencial con R.",
lecciones: "8",
progreso: 0,
},
{
id: 9,
title: "Matemáticas para econometría",
slug: "matematicas-econometria",
descripcion: "Conceptos matemáticos esenciales para el análisis econométrico.",
lecciones: "2",
progreso: 0,
},
];

export default function CursosPage() {
return (
<main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 p-6 text-white">
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
        <Link
          href={`/revalidation/${curso.slug}`}
          className="block w-full bg-blue-600 text-white py-2 text-center rounded-lg hover:bg-blue-700"
        >
          Continuar Aprendiendo
        </Link>
      </div>
    ))}
  </div>
</main>
  );
}

