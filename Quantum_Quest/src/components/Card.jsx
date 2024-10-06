const Card = () => {
  return (
    <>
      <div className="card" style={{ width: "fit-content" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ color: "#E3E7AF" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
