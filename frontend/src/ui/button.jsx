import Loading from "./loading";

function Button({ color = "btn--green", type, onClick, loading, children }) {
  return (
    <button
      type={type}
      className={`btn ${color} w-full my-3`}
      onClick={onClick}
    >
      {loading ? <Loading /> : children}
    </button>
  );
}

export default Button;
