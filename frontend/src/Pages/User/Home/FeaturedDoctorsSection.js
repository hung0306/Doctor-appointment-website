function FeaturedDoctorsSection() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 245,
      price: 150,
      experience: 15,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      rating: 4.8,
      reviews: 189,
      price: 200,
      experience: 12,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatologist",
      rating: 4.9,
      reviews: 312,
      price: 120,
      experience: 10,
      image: "https://randomuser.me/api/portraits/women/76.jpg",
    },
  ];

  return (
    <section className="doctors">
      <div className="container">
        <div className="doctors__header">
          <h2 className="doctors__title">Featured Doctors</h2>
          <p className="doctors__subtitle">
            Top-rated doctors ready to help you
          </p>
          <div className="doctors__underline"></div>
        </div>

        <div className="doctors__grid">
          {doctors.map((doctor, index) => (
            <div className="doctors__card" key={index}>
              <div className="doctors__profile">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctors__image"
                />
                <div>
                  <h3 className="doctors__name">{doctor.name}</h3>
                  <p className="doctors__specialty">{doctor.specialty}</p>
                </div>
              </div>

              <div className="doctors__rating">
                <span className="doctors__star">⭐</span>
                <span className="doctors__score">{doctor.rating}</span>
                <span className="doctors__reviews">
                  ({doctor.reviews} reviews)
                </span>
              </div>

              <div className="doctors__price">${doctor.price}</div>
              <p className="doctors__experience">
                {doctor.experience} years experience
              </p>

              <div className="doctors__actions">
                <button className="btn btn--primary">View Profile</button>
                <button className="btn btn--outline">Book</button>
              </div>
            </div>
          ))}
        </div>

        <div className="doctors__footer">
          <button className="btn btn--outline doctors__view-all">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedDoctorsSection;
