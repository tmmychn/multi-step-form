import { CheckboxField } from "./checkbox-field"
import { PlanSelectionField } from "./plan-selection-field"
import { Summary } from "./summary"
import { TextField } from "./text-field"

export function DynamicField({type, label, placeholder, isMandatory, errorMsg, fieldData}) {
    return(
        <>
            {type === 'text' &&
                <TextField 
                    label={label} 
                    placeholder={placeholder} 
                    isMandatory={isMandatory} 
                    errorMsg={errorMsg} 
                />
            }
            {type === 'checkbox' &&
                <CheckboxField 
                    fieldData={fieldData}
                    errorMsg={errorMsg} 
                />
            }
            {type === 'planSelection' &&
                <PlanSelectionField 
                    fieldData={fieldData}
                    errorMsg={errorMsg} 
                />
            }
            {type === 'summary' &&
                <Summary 
                    fieldData={fieldData}
                />
            }
        </>
    )
}