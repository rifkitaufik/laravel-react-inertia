import { Link } from '@inertiajs/react'

export default function Pagination({ todos }) {
    const currentPage = todos.current_page

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
                {todos.links.map((link, i) => (
                    <li key={i}>
                        <Link
                            href={link.url}
                            className={`flex items-center justify-center px-4 h-10 leading-tight bg-white border border-gray-300
                            ${link.active ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' : 'hover:bg-gray-100 hover:text-gray-700 text-gray-500'}
                           ${i === 0 && 'rounded-s-lg'}
                            ${todos.links.length - 1 === i && 'rounded-e-lg'}
                            ${i === 0 && currentPage === 1 && ' opacity-50 pointer-events-none'}
                            ${todos.links.length - 1 === i && currentPage === todos.last_page && ' opacity-50 pointer-events-none'}`}
                        >
                            <div dangerouslySetInnerHTML={{ __html: link.label }}></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
