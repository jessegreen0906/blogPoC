import { books } from "@/lib/books";

export default function BooksPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">Bibliography</h1>
      <p className="mt-3 max-w-2xl text-lg text-zinc-700">
        A complete list of Jay Westgate titles, with release updates as each book lands.
      </p>
      <ul className="mt-8 space-y-4">
        {books.map((book) => (
          <li key={book.title} className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
            <p className="inline-flex rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
              {book.status}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-900">{book.title}</h2>
            <p className="mt-2 text-zinc-700">{book.description}</p>
            <p className="mt-2 text-sm font-medium text-zinc-500">
              Expected release: {book.expectedRelease}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
