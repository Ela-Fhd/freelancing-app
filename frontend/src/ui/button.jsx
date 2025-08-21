import Loading from "./loading";

function Button({
  color = "btn--green",
  type,
  onClick,
  loading,
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn ${color} w-full my-3 ${props.className}`}
      onClick={onClick}
    >
      {loading ? <Loading /> : children}
    </button>
  );
}

export default Button;
