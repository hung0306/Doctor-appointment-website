import { useEffect, useState } from "react";
import { Card, Button, Rate, Avatar, Tag } from "antd";
import { useSearchParams } from "react-router-dom";
import { VideoCameraOutlined } from "@ant-design/icons";
import { CalendarOutlined } from "@ant-design/icons";

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
    <>
      {doctors && doctors.length > 0 ? (
        doctors.map((doctor) => (
          <Card
            key={doctor._id}
            variant="outlined"
            style={{
              marginBottom: 16,
              borderRadius: 10,
              padding: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* --- Left side --- */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Avatar
                  src={doctor.image || "https://via.placeholder.com/80"}
                  size={80}
                />
                <div>
                  <h3 style={{ margin: 0 }}>{doctor.fullName}</h3>
                  <p style={{ margin: 0, color: "#353333ff" }}>
                    {doctor.specialty || "Cardiologist"}
                  </p>
                  <p style={{ margin: 0, color: "#777" }}>
                    {doctor.experience || "15 years experience"}
                  </p>
                  <div style={{ marginTop: 8 }}>
                    <Tag color="green">Available Today</Tag>
                    <Tag color="cyan">Video Consultation</Tag>
                  </div>
                </div>
              </div>

              {/* --- Right side --- */}
              <div style={{ textAlign: "right" }}>
                <div style={{ marginBottom: 8 }}>
                  <Rate disabled defaultValue={doctor.rating || 5} />
                  <span style={{ color: "#555", marginLeft: 6 }}>
                    {doctor.rating || 4.9} ({doctor.reviewCount || 245})
                  </span>
                  <p style={{ margin: 0, color: "#777" }}>
                    {doctor.location || "New York, NY"}
                  </p>
                </div>

                <h3 style={{ margin: "4px 0" }}>${doctor.fee || 150}</h3>
                <p style={{ margin: 0, color: "#777" }}>Consultation Fee</p>
                <p style={{ margin: 0, color: "#555" }}>
                  <CalendarOutlined /> Next: Today 2:30 PM
                </p>

                <div style={{ marginTop: 8 }}>
                  <Button style={{ marginRight: 8 }}>View Profile</Button>
                  <Button type="primary">Book Now</Button>
                </div>

                <Button
                  style={{
                    marginTop: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginLeft: "auto",
                  }}
                  icon={<VideoCameraOutlined />}
                >
                  Video Consultation
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <p>No doctors found</p>
      )}
    </>
  );
}

export default FindDoctor;
