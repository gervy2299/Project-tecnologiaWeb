import { useServiceStore } from "../../hooks/useServiceStore"

export const Pagination = () => {

    const { onNextPageLists, onPrevPageLists, currentPage, onClickNumberPage } = useServiceStore();



    return (
        <>
            <nav
                role="navigation"
                aria-label="Pagination Navigation"
                className="my-5 flex items-center justify-center overflow-hidden rounded shadow-md shadow-slate-200"
            >
                <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
                    <li>
                        <button
                            onClick={onPrevPageLists}
                            aria-label="Goto prev Page"
                            className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none"
                        >
                            <span className="order-2 md:sr-only">Prev</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-13 desc-13"
                            >
                                <title id="title-13">Previous page</title>
                                <desc id="desc-13">link to previous page</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => onClickNumberPage(1)}
                            aria-label="Goto Page 1"
                            className={currentPage === 1 ?
                                'hidden h-10 items-center justify-center whitespace-nowrap bg-blue-500 px-4 text-sm font-medium text-white ring-offset-2 transition duration-300 hover:bg-blue-600 hover:stroke-blue-500 focus:bg-blue-700 focus-visible:outline-none md:inline-flex'
                                :
                                'hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex'}

                        >
                            1
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onClickNumberPage(2)}
                            aria-label="Goto Page 2"
                            className={currentPage === 2 ?
                                'hidden h-10 items-center justify-center whitespace-nowrap bg-blue-500 px-4 text-sm font-medium text-white ring-offset-2 transition duration-300 hover:bg-blue-600 hover:stroke-blue-500 focus:bg-blue-700 focus-visible:outline-none md:inline-flex'
                                :
                                'hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex'}
                        >
                            2
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onClickNumberPage(3)}
                            aria-label="Current Page, Page 3"
                            aria-current="true"
                            className={currentPage === 3 ?
                                'hidden h-10 items-center justify-center whitespace-nowrap bg-blue-500 px-4 text-sm font-medium text-white ring-offset-2 transition duration-300 hover:bg-blue-600 hover:stroke-blue-500 focus:bg-blue-700 focus-visible:outline-none md:inline-flex'
                                :
                                'hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex'}
                        >
                            3
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onClickNumberPage(4)}
                            aria-label="Goto Page 4"
                            className={currentPage === 4 ?
                                'hidden h-10 items-center justify-center whitespace-nowrap bg-blue-500 px-4 text-sm font-medium text-white ring-offset-2 transition duration-300 hover:bg-blue-600 hover:stroke-blue-500 focus:bg-blue-700 focus-visible:outline-none md:inline-flex'
                                :
                                'hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex'}
                        >
                            4
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onClickNumberPage(5)}
                            aria-label="Goto Page 5"
                            className={currentPage === 5 ?
                                'hidden h-10 items-center justify-center whitespace-nowrap bg-blue-500 px-4 text-sm font-medium text-white ring-offset-2 transition duration-300 hover:bg-blue-600 hover:stroke-blue-500 focus:bg-blue-700 focus-visible:outline-none md:inline-flex'
                                :
                                'hidden h-10 items-center justify-center stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none md:inline-flex'}
                        >
                            5
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={onNextPageLists}
                            aria-label="Goto next Page"
                            className="inline-flex h-10 items-center justify-center gap-4 stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-blue-50 hover:stroke-blue-500 hover:text-blue-500 focus:bg-blue-50 focus:stroke-blue-600 focus:text-blue-600 focus-visible:outline-none"
                        >
                            <span className="md:sr-only">Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mx-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-14 desc-14"
                            >
                                <title id="title-14">Next page</title>
                                <desc id="desc-14">link to next page</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
            {/*<!-- End Primary elevated pagination --> */}
        </>
    )
}


