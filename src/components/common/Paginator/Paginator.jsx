import styles from './Paginator.module.css'
import React, {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize =10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i + ' ')
    }

    const portionCount = Math.ceil(pagesCount/portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    // Находім 1 левий єлемент порциі, формула (P-1)*PS+1 P-текущая страница, PS-количество страниц
    const leftPortionPageNumber = (portionNumber - 1) * portionSize +1
    // Находим правую границу
    const rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(page => {
                let stylePagination = [styles.pageNumber]
                currentPage === page && stylePagination.push(styles.selectedPage)
                return <span key={page} className={stylePagination.join(' ')} onClick={(e) => {
                    onPageChanged(page)
                }}>{page}</span>
            })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>)

    // const UsersSearchForm = () => {
    //     return (
    //         <div></div>
    //     )
    // }
}
export default Paginator