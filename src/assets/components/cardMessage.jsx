import IconPlus from "./icons/plus";
import "./cardMessage.css";
import IconMinus from "./icons/minus";
import imagePrueba from "../../../public/images/avatars/image-amyrobson.webp";
import IconReply from "./icons/reply";

export function CardMessage() {
  return (
    <>
      <article className="content__allCardComments">
        <div className="controlsComments">
          <IconPlus className="iconControlsStyle" />
          <span className="numbers">0</span>
          <IconMinus className="iconControlsStyle" />
        </div>

        <section className="content--avatar_name_descriptionComment--and-reply">
          <header className="bx__avatar-name-time__reply">
            <section className="avatar-name-time">
              <div className="bx-avatar">
                <img src={imagePrueba} alt="" className="avatar" />
              </div>
              <span className="nameComments">amyrobson</span>
              <span className="timeDay">1 month ago</span>
            </section>

            <div className="bx-reply">
              <IconReply className="IconReply" />
              <span className="reply">Reply</span>
            </div>
          </header>
          <p className="txt">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You’ve nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </section>
      </article>
    </>
  );
}
