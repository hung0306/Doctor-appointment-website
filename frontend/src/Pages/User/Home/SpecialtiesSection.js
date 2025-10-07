function SpecialtiesSection() {
  const specialties = [
    {
      title: "Cardiology",
      desc: "Heart & cardiovascular care",
      image:
        "https://images.unsplash.com/photo-1690306816872-91063f6de36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGNhcmRpb2xvZ3klMjBtZWRpY2FsJTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzU4MDQwNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Neurology",
      desc: "Brain & nervous system",
      image:
        "https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJvbG9neSUyMG1lZGljYWwlMjBzY2FufGVufDF8fHx8MTc1ODA0MDY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Orthopedics",
      desc: "Bones, joints & muscles",
      image:
        "https://images.unsplash.com/photo-1582380375444-275b280990a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob3BlZGljcyUyMGJvbmUlMjB4cmF5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTgwNDAyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Pediatrics",
      desc: "Children’s healthcare",
      image:
        "https://images.unsplash.com/photo-1582380375444-275b280990a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob3BlZGljcyUyMGJvbmUlMjB4cmF5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTgwNDAyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Ophthalmology",
      desc: "Eye care & vision",
      image:
        "https://images.unsplash.com/photo-1576765608622-067973a79f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkb2N0b3IlMjBjaGlsZHJlbiUyMG1lZGljYWwlMjBjYXJlfGVufDF8fHx8MTc1ODA0MDY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Dentistry",
      desc: "Dental & oral health",
      image:
        "https://images.unsplash.com/photo-1682663947124-88b7b7e12889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMG9waHRoYWxtb2xvZ3klMjBtZWRpY2FsfGVufDF8fHx8MTc1ODA0MDcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];
  return (
    <>
      <section className="specialties">
        <div className="container">
          <div className="specialties__header">
            <h2 className="specialties__title">Popular Specialties</h2>
            <p className="specialties__subtitle">
              Find doctors by their specialization
            </p>
            <div className="specialties__underline"></div>
          </div>

          <div className="specialties__grid">
            {specialties.map((item, index) => (
              <div className="specialties__card" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="specialties__image"
                />
                <div className="specialties__info">
                  <h3 className="specialties__name">{item.title}</h3>
                  <p className="specialties__desc">{item.desc}</p>
                  <button type="button" className="specialties__link">
                    Find Specialist →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default SpecialtiesSection;
