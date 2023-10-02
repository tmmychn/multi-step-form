export function CheckboxField({fieldData, errorMsg}) {
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 justify-between">
                {fieldData.map((card, index) => (
                    <div key={card.label} className="w-full p-4 border border-black rounded-lg">
                        <input type="checkbox" id={`checkbox ${index}`} name="vehicle1" value={card.label}></input>
                        <p className="text-lg">{card.label}</p>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}