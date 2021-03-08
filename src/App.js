import "./dist/style.css";
import { Form } from './Form';
import { Text } from './Text';

function App() {
  return (
    <>
    <section class="container">
      <div class="copy">
      <Text />
      </div>
      <div class="col2">
        <a class="col2__trybutton" href="#">
          <p><span>Try it free 7 days</span> then 20&dollar;/mo. thereafter</p>
        </a>
        <div class="col2__container">
      <Form />
      </div>
      </div>
      </section>
    </>
  );
}

export default App;
