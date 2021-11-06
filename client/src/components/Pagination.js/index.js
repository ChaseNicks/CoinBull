const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav
      className="pagination is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        {pageNumber.map((number) => (
          <li>
            <a
              key={number}
              onClick={() => paginate(number)}
              className="pagination-link"
              aria-label={`Goto page ${number}`}
              href="!#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
