export default function Tombol({ type = 'text', children, onClick, ...props }) {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center px-4 py-2 bg-slate-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"
        >
            {children}
        </button>
    )
}
