import classes from "./styles.module.css";

export default function Pagination({ totalPages, currentPage, handleNextPage, handlePreviousPage, handleSelectPage }) {
    return (
        <div className={classes.pagination}>
            <button disabled={currentPage <= 1} className={classes.arrow} onClick={()=>handlePreviousPage(currentPage)}>{"<"}</button>
            <div className={classes.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return <button className={classes.pageNumber} disabled={index + 1 === currentPage} key={index} onClick={()=>handleSelectPage(index+1)}>{index + 1}</button>;
                })}
            </div>
            <button disabled={currentPage >= 10} className={classes.arrow} onClick={()=>handleNextPage(currentPage)}>{">"}</button>
        </div>
    );
}
