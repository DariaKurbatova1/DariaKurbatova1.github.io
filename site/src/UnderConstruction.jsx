import './UnderConstruction.css';
import construction from './assets/under-construction-image.png'
export default function UnderConstruction() {
  return (
    <div className="under-construction">
      <h2>Under Construction</h2>
      <p><a href="/">Back to Main Page</a></p>
      <p>This project is currently being developed...</p>
      <img src={construction} alt="Under Construction" />
    </div>
  );
}