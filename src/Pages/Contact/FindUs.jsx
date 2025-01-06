const FindUs = () => {
  return (
    <section>
      <div>
        <h1 className="text-8xl text-center py-20">FIND US</h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "550px",
          overflow: "hidden",
          border: "0",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.2679574184485!2d90.33682523906889!3d23.778242932738337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c08ed36a54c3%3A0x8eed910b68bcfec2!2sGabtali%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1736071999709!5m2!1sen!2sbd"
          width="100%"
          height="750"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default FindUs;
