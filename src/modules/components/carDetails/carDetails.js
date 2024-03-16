import { LightningElement,api } from "lwc";

export default class CarDetails extends LightningElement 
{

    _selectedImage 
    @api 
    get selectedVarainat()
    {

        return this._selectedImage
    }

    set selectedVarainat(data)
    {
console.log('inside setter')

        if (data)
    {
        console.log('Data',data)
       let model = data.variant.toLowerCase().replaceAll(' ','')
       let selectedimage = `/public/assets/honda/${model}/${data.imageName}.png`
       this._selectedImage = {...data , "selectedimage" : selectedimage}
    }
    }
    
}