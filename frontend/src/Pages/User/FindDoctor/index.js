import { useEffect, useState } from "react";
import { Card, Button, Rate, Avatar, Tag } from "antd";
import { useSearchParams } from "react-router-dom";
import { VideoCameraOutlined } from "@ant-design/icons";
import { CalendarOutlined } from "@ant-design/icons";
import "./FindDoctor.scss";

function FindDoctor() {
  const [params] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const queryParams = params.toString();
      const response = await fetch(
        `http://localhost:3001/api/doctors?${queryParams}`
      );
      const data = await response.json();
      //   console.log(data[0].image);
      //   console.log(data);
      setDoctors(data);
    };
    fetchAPI();
  }, [params]);
  return (
    <section className="find-doctor">
      <div className="container">
        <div className="find-doctor__header">
          <h2 className="find-doctor__title">Find Your Doctor</h2>
          <p className="find-doctor__subtitle">
            Choose from our qualified medical professionals
          </p>
          <div className="find-doctor__underline"></div>
        </div>

        <div className="find-doctor__results">
          {doctors && doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div className="find-doctor__card" key={doctor._id}>
                <div className="find-doctor__profile">
                  <Avatar
                    src={doctor.image || "https://via.placeholder.com/80"}
                    size={80}
                    className="find-doctor__avatar"
                  />
                  <div className="find-doctor__info">
                    <h3 className="find-doctor__name">{doctor.fullName}</h3>
                    <p className="find-doctor__specialty">
                      {doctor.specialty || "Cardiologist"}
                    </p>
                    <p className="find-doctor__experience">
                      {doctor.experience || "15 years experience"}
                    </p>
                    <div className="find-doctor__tags">
                      <Tag color="green">Available Today</Tag>
                      <Tag color="cyan">Video Consultation</Tag>
                    </div>
                  </div>
                </div>

                <div className="find-doctor__details">
                  <div className="find-doctor__rating">
                    <div className="find-doctor__rating-stars">
                      <span className="find-doctor__star">⭐</span>
                      <span className="find-doctor__rating-text">
                        {doctor.rating || 4.9} ({doctor.reviewCount || 245})
                      </span>
                    </div>
                    <p className="find-doctor__location">
                      {doctor.location || "New York, NY"}
                    </p>
                  </div>

                  <div className="find-doctor__pricing">
                    <h3 className="find-doctor__price">${doctor.fee || 150}</h3>
                    <p className="find-doctor__price-label">Consultation Fee</p>
                    <p className="find-doctor__next-appointment">
                      <CalendarOutlined /> Next: Today 2:30 PM
                    </p>
                  </div>

                  <div className="find-doctor__actions">
                    <Button className="find-doctor__btn find-doctor__btn--outline">
                      View Profile
                    </Button>
                    <Button
                      type="primary"
                      className="find-doctor__btn find-doctor__btn--primary"
                    >
                      Book Now
                    </Button>
                  </div>

                  <Button
                    className="find-doctor__video-btn"
                    icon={<VideoCameraOutlined />}
                  >
                    Video Consultation
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="find-doctor__empty">
              <p>No doctors found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FindDoctor;
