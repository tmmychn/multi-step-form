export function TextField({label, placeholder, isMandatory, errorMsg}) {
    return(
        <div>
            <div className="label">{label}</div>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}