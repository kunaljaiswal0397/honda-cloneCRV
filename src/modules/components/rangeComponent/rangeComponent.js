import { LightningElement,api } from "lwc";

export default class RangeComponent extends LightningElement 
{

    @api variant = []

   handleChange(e)
   {
    const {value} = e.target
    console.log(value)

    let selected = this.variant.find(item=>item.variant === value)
    this.dispatchEvent(new CustomEvent('selection',{
        detail:{
            selected : selected,
            variant : value
        }
    }))
   }
}