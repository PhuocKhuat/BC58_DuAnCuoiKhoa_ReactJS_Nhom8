import React, { useEffect, useState } from "react";
import { fetchPaginationCourse } from "../../../Redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import './stylePagination.css';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const { paginationCourse } = useSelector((state) => state.courseSlice);
  // console.log("🚀 ~ Pagination ~ paginationCourse:", paginationCourse)
  const dispatch = useDispatch();
  const handlePageChanges = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  useEffect(() => {
    dispatch(fetchPaginationCourse(currentPage));
  }, [currentPage]);

  return (
    <>
      <ReactPaginate
        nextLabel="Next >"
        pageRangeDisplayed={4}
        pageCount={paginationCourse.totalPages}
        previousLabel="< Prev"
        pageClassName="pageItem"
        pageLinkClassName="pageLinkPages"
        previousClassName="pageItem"
        previousLinkClassName="pageLinkPages"
        nextClassName="pageItem"
        nextLinkClassName="pageLinkPages"
        breakLabel="..."
        breakClassName="pageItem"
        breakLinkClassName="pageLinkPages"
        containerClassName="paginationPages"
        activeClassName="active"
        renderOnZeroPageCount={null}
        onPageChange={handlePageChanges}
      />
    </>
  );
}
