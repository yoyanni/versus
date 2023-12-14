import "./TitleContainer.css"

export default function TitleContainer({ title, note = null, children }) {
  return (
    <div className="form__section">
      <h4 className="form__section__title">
        {title}
        {note && <span className="form__section__note">{note}</span>}
      </h4>

      {children}
    </div>
  );
}
