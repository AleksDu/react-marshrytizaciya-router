import { useState, useEffect } from "react";
import slugify from "slugify";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import * as bookShelfAPI from "../services/bookshelf-api";
import PageHeading from "../components/PageHeading/PageHeading";
const makeSlug = (string) => slugify(string, { lower: true });

export default function BooksView() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBooks().then(setBooks);
  }, []);

  return (
    <>
      <PageHeading text="Книги" />

      {books && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${url}/${makeSlug(`${book.title} ${book.id}`)}`,
                  state: { from: { location, label: "Назад к всем книгам" } },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
