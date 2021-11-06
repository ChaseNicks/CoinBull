const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      className="pagination is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li key={number}>
            <div
              onClick={() => paginate(number)}
              className="pagination-link"
              aria-label={`Goto page ${number}`}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
