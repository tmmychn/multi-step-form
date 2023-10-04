export function CheckboxField({fieldData, errorMsg}) {
    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 justify-between">
                {fieldData.map((card, index) => (
                    <div 
                        key={card.label} 
                        className="w-full flex justify-between items-center p-4 border border-black rounded-lg"
                    >
                        <input type="checkbox" name={`checkbox ${index}`} value={card.label} />
                        <div>
                            <p className="text-lg">{card.label}</p>
                            <p>{card.description}</p>
                        </div>
                        <p>{card.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}