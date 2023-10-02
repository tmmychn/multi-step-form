import { useState } from "react";

export function PlanSelectionField({fieldData, errorMsg}) {
    // State
    const [isMonthly, setIsMonthly] = useState(true);
    
    const planType = isMonthly ? 'monthly' : 'yearly';

    function togglePlanType() {
        setIsMonthly(!isMonthly);
    };

    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 justify-between">
                {fieldData[planType].map((card) => (
                    <div key={card.label} className="w-full p-4 border border-black rounded-lg">
                        <p className="text-lg">{card.label}</p>
                        <p>{card.price}</p>
                    </div>
                ))}
            </div>
            <button onClick={togglePlanType}>Toggle Plan</button>
        </div>
    )
}