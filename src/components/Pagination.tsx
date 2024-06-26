import styles from "./Pagination.module.css";



interface Props {
    totalPosts: number;
    postsPerPage: number;
    setCurrentPage: (page: number) => void;
    currentPage: number;

}

const Pagination = (props: Props) => {

    const { totalPosts, postsPerPage, setCurrentPage, currentPage } = props;

    const pages = []


    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {

        pages.push(i)

    }
    return (
        <div className={styles.pagination}>

            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={`${styles.button} ${currentPage === page ? styles.active : ''}`}
                    >{page}</button>
                )
            })}
        </div>
    )
}

export default Pagination
