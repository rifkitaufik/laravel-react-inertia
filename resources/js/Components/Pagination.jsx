import { Link } from '@inertiajs/react'

export default function Pagination({ todos }) {
    // console.log(todos)
    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
                {/*<li>*/}
                {/*    <a*/}
                {/*        href="#"*/}
                {/*        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"*/}
                {/*    >*/}
                {/*        Previous*/}
                {/*    </a>*/}
                {/*</li>*/}
                {todos.links.map((link, i) => (
                    <li key={i}>
                        <Link
                            href={link.url}
                            className={`flex items-center justify-center px-4 h-10 leading-tight bg-white border border-gray-300
                            ${link.active ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'hover:bg-gray-100 hover:text-gray-700 text-gray-500'}
                           ${i === 0 && 'rounded-s-lg'}
                            ${todos.links.length - 1 === i ? 'rounded-e-lg' : ''}`}
                        >
                            <div dangerouslySetInnerHTML={{ __html: link.label }}></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
