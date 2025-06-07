import SebiImage from '../assets/images/sebi.svg'
import '../assets/styles/sebi.css';

const Sebi = ({ text }) => {
  return (
    <div className="sebi">
      <p className='bubble speech'>{text}</p>
      <img src={SebiImage} alt="Sebi la gazelle" />
    </div>
  );
};

export default Sebi;
