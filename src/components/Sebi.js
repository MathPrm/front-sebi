import SebiImage from '../assets/images/sebi.svg'
import '../assets/styles/sebi.css';

const Sebi = ({ text }) => {
  return (
    <div className="sebi">
      <img src={SebiImage} alt="Sebi la gazelle" />
      <div className="bulle">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Sebi;
