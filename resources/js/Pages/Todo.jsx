import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router, useForm, usePage } from '@inertiajs/react'
import Tombol from '@/Components/Tombol.jsx'
import { Table, Alert } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi'
import toast, { Toaster } from 'react-hot-toast'

export default function Todo({ auth }) {
    const { errors } = usePage().props

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

            <div className="max-w-7xl mx-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Tasks</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>Laptop</Table.Cell>
                            <Table.Cell>$2999</Table.Cell>
                            <Table.Cell>
                                <a
                                    href="#"
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    Edit
                                </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </AuthenticatedLayout>
    )
}
