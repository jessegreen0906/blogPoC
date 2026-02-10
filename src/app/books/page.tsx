import { books } from "@/lib/books";

export default function BooksPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-[color:var(--primary)]">Bibliography</h1>
      <p className="mt-3 max-w-2xl text-lg text-[color:var(--text)]/90">
        A complete list of Jay Westgate titles, with release updates as each book lands.
      </p>
      <ul className="mt-8 space-y-4">
        {books.map((book) => (
          <li
            key={book.title}
            className="border border-[color:var(--neutral)]/35 bg-[color:var(--background)] p-6 shadow-sm shadow-black/30"
          >
            <p className="inline-flex bg-[color:var(--primary)]/20 px-3 py-1 text-sm font-semibold text-[color:var(--text)]">
              {book.status}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[color:var(--text)]">{book.title}</h2>
            <p className="mt-2 text-[color:var(--text)]/90">{book.description}</p>
            <p className="mt-2 text-sm font-medium text-[color:var(--neutral)]">
              Expected release: {book.expectedRelease}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
