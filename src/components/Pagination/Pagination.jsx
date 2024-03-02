import React from 'react'
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const Pagination = ({ currentPage, totalPages, handleNextPage, handlePrevPage }) => {
  const renderTooltipPrev = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Previous
    </Tooltip>
  );
  const renderTooltipNext = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Next
    </Tooltip>
  );
  return (
    <div className="pagination page-controls">
      <OverlayTrigger
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltipPrev}
      >
        <Button
          variant="outline-secondary"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          <span aria-hidden="true">&laquo;</span>
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltipNext}
      >
        <Button
          variant="outline-secondary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <span aria-hidden="true">&raquo;</span>
        </Button>
      </OverlayTrigger>
    </div>
  );
}

export default Pagination