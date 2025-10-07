import { useEffect, useState } from "react";
import DoctorSearch from "../../../Components/DoctorSearch";
import { getDepartments } from "../../../Service/User/departmentService";

function HeroSection() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getDepartments();
      // console.log(data);
      let items = [];
      data.forEach((item) => {
        items.push({ value: item._id, label: item.name });
      });
      setDepartments(items);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero__overlay">
          <div className="hero__content">
            <h1 className="hero__title">
              Find & Book the Best Doctors Near You
            </h1>

            <p className="hero__subtitle">
              Discover trusted healthcare professionals, read genuine reviews,
              and book appointments instantly. Your health is our priority.
            </p>

            <div className="hero__search">
              <DoctorSearch items={departments} />
            </div>

            <button className="hero__secondary-btn">
              Find Doctors Near Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroSection;
