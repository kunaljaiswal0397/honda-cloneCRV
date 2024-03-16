import { LightningElement,api } from "lwc";

export default class ColorComponent extends LightningElement 
{

    @api color

    get colorSelected()
    {
        return `slds-radio__label color_circle ${this.color.value}`
    }

    colorSelectedHandler(event)
    {
        this.dispatchEvent(new CustomEvent('selectioncolor',{

            detail: this.color.value
        }))
    }
}
