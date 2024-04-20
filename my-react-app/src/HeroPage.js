import { Link } from "react-router-dom";

export default function HeroPage() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontSize: "24px",
        color: "navy",
      }}
    >
      <p> Welcome to the Hero Page! </p>{" "}
      <Link to="/ImgTestGame">
        <button
          style={{
            backgroundColor: "lightblue",
            padding: "10px 20px",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          Go to Image Test Game{" "}
        </button>{" "}
      </Link>{" "}
    </div>
  );
}
