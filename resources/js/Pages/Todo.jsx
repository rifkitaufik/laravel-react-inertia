import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router, Link, useForm, usePage } from '@inertiajs/react'
import Pagination from '@/Components/Pagination.jsx'
import Tombol from '@/Components/Tombol.jsx'
import toast from 'react-hot-toast'

export default function Todo({ auth, todos }) {
    const { flash, errors } = usePage().props

    const { data, setData, reset } = useForm({
        task: '',
        status: '',
        date: '',
    })

    const submitData = e => {
        e.preventDefault()

        router.post(route('todo.store'), data, {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                toast.success('Data berhasil disimpan')
            },
            onError: errors => {
                toast.error('Data gagal disimpan')
            },
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Selamat datang, {auth.user.name}
                </h2>
            }
        >
            <Head title="Todos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <form onSubmit={submitData}>
                            <div className="flex mt-3">
                                <input
                                    type="text"
                                    onChange={e =>
                                        setData('task', e.target.value)
                                    }
                                    value={data.task}
                                    placeholder="nama task"
                                    className={
                                        `form-input w-full rounded-lg mr-3 outline-2` +
                                        (errors.task
                                            ? 'border border-red-700'
                                            : 'border border-gray-200')
                                    }
                                />
                                <input
                                    type="text"
                                    onChange={e =>
                                        setData('status', e.target.value)
                                    }
                                    value={data.status}
                                    placeholder="status task"
                                    className={
                                        `form-input w-full rounded-lg mr-3 outline-2` +
                                        (errors.status
                                            ? 'border border-red-700'
                                            : 'border border-gray-200')
                                    }
                                />
                                <input
                                    type="date"
                                    onChange={e =>
                                        setData('date', e.target.value)
                                    }
                                    value={data.date}
                                    className={
                                        `form-input w-full rounded-lg mr-3 outline-2` +
                                        (errors.date
                                            ? 'border border-red-700'
                                            : 'border border-gray-200')
                                    }
                                />
                                <Tombol>submit</Tombol>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Task Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status of Task
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.data.map(todo => (
                                <tr
                                    key={todo.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {todo.task}
                                    </th>
                                    <td className="px-6 py-4">{todo.status}</td>
                                    <td className="px-6 py-4"> {todo.date}</td>
                                    <td className="px-6 py-4 text-right">
                                        <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex overflow-x-auto sm:justify-center mt-5">
                    <Pagination todos={todos} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
