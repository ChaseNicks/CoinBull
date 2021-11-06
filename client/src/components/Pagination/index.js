const Pagination = ({ coinsPerPage, totalCoins, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="is-flex is-justify-content-center">
      <nav
        className="pagination is-rounded "
        role="navigation"
        aria-label="pagination"
      >
        <ul className="pagination-list">
          {pageNumbers.map((number) => (
            <li key={number}>
              <div
                onClick={() => paginate(number)}
                className={
                  currentPage === number
                    ? "pagination-link is-current"
                    : "pagination-link"
                }
                aria-label={`Goto page ${number}`}
              >
                {number}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
