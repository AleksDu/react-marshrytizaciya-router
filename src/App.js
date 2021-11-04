import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
// import HomeView from "./views/HomeView";
// import AuthorsView from "./views/AuthorsView";
// import BooksView from "./views/BooksView";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
// import NotFoundView from "./views/NotFoundView";
// import BookDetailsView from "./views/BookDetailsView";
// import TableView from "./views/TableView";
const HomeView = lazy(() =>
  import("./views/HomeView" /*webpachCunkName: 'home-view' */)
);
const AuthorsView = lazy(() =>
  import("./views/AuthorsView" /*webpackChunkName: 'autohors-view' */)
);
const BooksView = lazy(() => import("./views/BooksView"));
const BookDetailsView = lazy(() => import("./views/BookDetailsView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));
const TableView = lazy(() => import("./views/TableView"));
export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<hi>ЗАГРУЖАЕМ МАРШРУТ...</hi>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/authors">
            <AuthorsView />
          </Route>

          <Route path="/books" exact>
            <BooksView />
          </Route>

          <Route path="/books/:slug">
            <BookDetailsView />
          </Route>
          <Route path="/table">
            <TableView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
