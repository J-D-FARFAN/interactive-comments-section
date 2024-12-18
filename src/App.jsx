import "./App.css";
import { CardMessage } from "./assets/components/cardMessage";
import avatarPrueba from "../public/images/avatars/image-juliusomo.webp";

function App() {
  return (
    <>
      <article className="content-section-commentsAll">
        <section className="content-sectionComments">
          <CardMessage />
        </section>

        <section className="content-sendComments">
          <div className="bx-avatarMe">
            <img src={avatarPrueba} alt="" className="avatar" />
          </div>

          <textarea
            className="sendMessage"
            placeholder="Add a comment..."
          ></textarea>

          <button type="submit" className="btn-sendMessage">
            Send
          </button>
        </section>
      </article>
    </>
  );
}

export default App;
