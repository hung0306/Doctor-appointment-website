import CountUp from "react-countup";

function Statistics() {
  return (
    <>
      <section className="stats">
        <div className="container">
          <div className="stats__list">
            <div className="stats__item">
              <i className="stats__icon bi bi-people"></i>
              <h3 className="stats__number">
                <CountUp end={1000} duration={2} suffix="+" />
              </h3>
              <p className="stats__label">Verified Doctors</p>
            </div>

            <div className="stats__item">
              <i className="stats__icon bi bi-heart"></i>
              <h3 className="stats__number">
                <CountUp end={50} duration={2} suffix="+" />
              </h3>
              <p className="stats__label">Specialties</p>
            </div>

            <div className="stats__item">
              <i className="stats__icon bi bi-award"></i>
              <h3 className="stats__number">
                <CountUp end={100} duration={2} suffix="k+" />
              </h3>
              <p className="stats__label">Happy Patients</p>
            </div>

            <div className="stats__item">
              <i className="stats__icon bi bi-shield-check"></i>
              <h3 className="stats__number">
                <CountUp end={24} duration={2} />
                /7
              </h3>
              <p className="stats__label">Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Statistics;
