function Catalogue() {
  return (
    <section>
      <h2>Catalogue</h2>
      <div className="home-catalogue">[cards]</div>
      <div className="catalogue-redirect">
        <Link to="/catalogue">View Products</Link>
      </div>
    </section>
  );
}

export default Catalogue;
