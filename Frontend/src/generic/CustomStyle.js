const btnStyle = {
  fontSize: "1.25rem;",
  background:
    "radial-gradient(circle, rgba(0,223,129,1) 0%, rgba(0,136,79,1) 100%);",
  color: "black;",
  fontWeight: "700;",
  padding: "0.25rem 0rem;",
  transition: "filter 200ms ease-in-out;",
  margin: "0 auto;",
  textTransform: "none",
  width: "100%",
};

const modalStyle = {
  position: "absolute",
  color: "white", // Text color
  backgroundColor: "#111111", // Background color
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: "24px", // Added "px" for boxShadow
  padding: "16px", // Added padding instead of "p"
  direction: "rtl",
};

export { btnStyle, modalStyle };
