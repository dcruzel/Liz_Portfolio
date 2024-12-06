//import useRouteError from react router
import { useRouteError } from 'react-router-dom';

//Create Error page
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <section>
      <h1>ERROR PAGE</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Please see below:</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </section>
    </div>
  );
}
