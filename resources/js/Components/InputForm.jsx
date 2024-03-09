export default function InputForm({
    value,
    placeholder,
    type = 'text',
    ...props
}) {
    return (
        <>
            <div className="">
                <input
                    value={value}
                    placeholder={placeholder}
                    className="form-input w-full border border-gray-200 rounded-lg mr-3 outline-2"
                    {...props}
                />
            </div>
        </>
    )
}
