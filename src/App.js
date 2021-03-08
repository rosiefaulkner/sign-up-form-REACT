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
        <a class="col2__trybutton" href="/">
          <p><span>Schedule an Appointment</span> today after signing up</p>
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
