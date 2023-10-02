export function TextField({label, placeholder, isMandatory, errorMsg}) {
    return(
        <div>
            <div className="mb-2">{label}</div>
            <input 
                type="text" 
                placeholder={placeholder}
                className="w-full p-4 border rounded-lg"
            />
        </div>
    )
}