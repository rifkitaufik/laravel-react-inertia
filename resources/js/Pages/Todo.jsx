import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import Tombol from '@/Components/Tombol.jsx'
import { Table } from 'flowbite-react'

export default function Todo({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Todo
                </h2>
            }
        >
            <Head title="Todo" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex">
                            <input
                                placeholder="masukkan isian"
                                className="form-input w-full border border-gray-200 rounded-lg mr-3 outline-2"
                            />
                            <Tombol>submit</Tombol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Product name</Table.HeadCell>
                        <Table.HeadCell>Color</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
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
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Microsoft Surface Pro
                            </Table.Cell>
                            <Table.Cell>White</Table.Cell>
                            <Table.Cell>Laptop PC</Table.Cell>
                            <Table.Cell>$1999</Table.Cell>
                            <Table.Cell>
                                <a
                                    href="#"
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    Edit
                                </a>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Magic Mouse 2
                            </Table.Cell>
                            <Table.Cell>Black</Table.Cell>
                            <Table.Cell>Accessories</Table.Cell>
                            <Table.Cell>$99</Table.Cell>
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
