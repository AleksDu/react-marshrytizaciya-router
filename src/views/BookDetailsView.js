import { useState, useEffect } from "react";
import { useParams, useLocation, useHistory, Link } from "react-router-dom";
import slugify from "slugify";
import PageHeading from "../components/PageHeading/PageHeading";
import * as bookShelfAPI from "../services/bookshelf-api";
export default function BookDetailsView() {
  const history = useHistory();
  const location = useLocation();
  const { slug } = useParams();
  const bookId = slug.match(/[a-z0-9]+$/)[0];
  const [book, setBook] = useState(null);
  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);
  // const onGoBack = () => {
  // history.push(location?.state?.from?.location ?? "/books");
  // };
  return (
    <>
      {/* <button type="button" onClick={onGoBack}>
        {location?.state?.from?.label ?? "Назад"}
      </button> */}

      <Link to={location?.state?.from?.location ?? "/books"}>
        {location?.state?.from?.label ?? "Назад"}
      </Link>

      <PageHeading text={`Книга ${slug}`} />

      {book && (
        <>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {book.author.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
