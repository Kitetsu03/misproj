function Card() {
  return (
    <>
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn">100</button>
        </div>
      </div>
    </>
  );
}
export default Card;
