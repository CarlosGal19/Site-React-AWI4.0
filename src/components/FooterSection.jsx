import PropTypes from 'prop-types';

const FooterSection = ({info}) => {
  return (
    <div className="py-10 bg-indigo-700 text-center text-white lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-1/2 w-full lg:order-1">
          <h1 className="text-7xl font-bold">{info[0]}</h1>
      </div>
      <div className="lg:w-1/2 w-full lg:order-2">
        <div className="h-1/3 py-8 flex justify-center items-center">
            <h1 className="text-2xl px-2 font-bold">{info[1]}</h1> <a href={info[4]}><img src={info[7] || "https://img.icons8.com/officexs/16/000000/external-link.png"} alt="Github" width={ info[7] ? "50px" : "15px"  } /></a>
        </div>
        <div className="h-1/3 py-8 flex justify-center items-center">
            <h2 className="text-2xl px-2 font-bold">{info[2]}</h2> <a href={info[5]}><img src={info[8] || "https://img.icons8.com/officexs/16/000000/external-link.png"} alt="Discord" width={ info[8] ? "50px" : "15px"  } /></a>
        </div>
        <div className="h-1/3 py-8 flex justify-center items-center">
            <h3 className="text-2xl px-2 font-bold">{info[3]}</h3> <a href={info[6]}><img src={info[9] || "https://img.icons8.com/officexs/16/000000/external-link.png"} alt="LinkedIn" width={ info[9] ? "50px" : "15px"  } /></a>
        </div>
      </div>
    </div>
  )
}

FooterSection.propTypes = {
  info: PropTypes.array.isRequired,
};

export default FooterSection
