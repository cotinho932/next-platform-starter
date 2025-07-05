// pages/cursos/fundamentos.js
import Link from "next/link";

const sesiones = [
  {
    id: 1,
    titulo: "Sesion 01 - Introducción",
    videoUrl: "https://www.youtube.com/watch?v=zVgvvQaIhro",
    materialUrl: "https://drive.google.com/drive/folders/18EgT8AlcDr-aXDBMMAPK-QYRWcIwf-hn?usp=sharing"
  },
  {
    id: 2,
    titulo: "Sesion 02 - Variables y modelos",
    videoUrl: "https://www.youtube.com/watch?v=zMtyRJ-dXIs",
    materialUrl: "https://drive.google.com/drive/folders/18EgT8AlcDr-aXDBMMAPK-QYRWcIwf-hn?usp=sharing"
  },
];

export default function FundamentosCursoPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:flex">
      <aside className="w-full md:w-1/4 p-4 bg-blue-100 rounded-lg mb-4 md:mb-0 md:mr-6">
        <h2 className="text-lg font-semibold mb-4">Contenido del curso</h2>
        <ul className="space-y-2">
          {sesiones.map((s) => (
            <li key={s.id} className="text-blue-800 hover:underline">
              <a href={`#sesion-${s.id}`}>{s.titulo}</a>
            </li>
          ))}
        </ul>
      </aside>
      <section className="flex-1">
        <Link href="/cursos" className="text-blue-600 mb-4 block">
          ⬅ Volver a Cursos
        </Link>
        {sesiones.map((s) => (
          <div
            key={s.id}
            id={`sesion-${s.id}`}
            className="mb-12 bg-white p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-bold mb-4">{s.titulo}</h3>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                className="w-full h-64"
                src={s.videoUrl}
                title={s.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href={s.materialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              📄 Material
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
