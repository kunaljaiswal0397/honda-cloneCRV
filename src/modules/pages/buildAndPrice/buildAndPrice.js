import {LightningElement} from 'lwc';
const CRV_VARIANT =[
    {

        variant : "Vti",
        price : 38900,
        formattedPrice : "$38,900",
        fuelConsumption : 7,
        seatingCapacity : 5,
        alloywheels : 17,
        checked : true,
        imageName : "ignite_red"

    },
    {

        variant : "Vti 7",
        price : 40900,
        formattedPrice : "$40,900",
        fuelConsumption : 7.4,
        seatingCapacity : 5,
        alloywheels : 18,
        imageName : "platinum_white"

    },
    {

        variant : "Vti Lx Awd",
        price : 41900,
        formattedPrice : "$41,900",
        fuelConsumption : 7.4,
        seatingCapacity : 5,
        alloywheels : 18,
        imageName : "ignite_red"

    },
    {

        variant : "Vtix",
        price : 53900,
        formattedPrice : "$53,900",
        fuelConsumption : 7.5,
        seatingCapacity : 5,
        alloywheels : 19,
        imageName : "ignite_red"

    }
]

const COLORS = [
    {label : "Ignite Red(Metallic)", value:"ignite_red", checked:true},
    {label : "Brilliant Sporty Blue", value:"sporty_blue"},
    {label : "Crystal Black", value:"crystal_black"},
    {label : "Platinum White (Pearlescent)", value:"platinum_white"}
]
const ANIMATED_PRICE = 38000
export default class BuildAndPrice extends LightningElement {


    //for multiple routing , we can have /buildAndPrice/:variant in lwr.config.json

    variant = CRV_VARIANT
    selectedVarainat = CRV_VARIANT[0]
    colorList = COLORS
    formattedValue =  this.selectedVarainat.price
    selectedImageName = this.colorList[0].value
    selectedColorName = this.colorList[0].label
    openModal = false
    animatedPrice

    connectedCallback()
    {
        this.animatePrice()
    }
    selectionhandler(event)
    {
        console.log('variant', event.detail.variant)
        console.log('selected',event.detail.selected)
        const{variant,selected} = event.detail
        this.selectedVarainat = {...selected,imageName: this.selectedImageName}
        this.formattedValue = this.selectedVarainat.price
        this.updateVariant(variant)
        this.animatePrice()
    }

    colorHandler(event)
    {
        console.log(event)
        console.log(event.detail)
        this.selectedImageName = event.detail
        this.selectedVarainat = {...this.selectedVarainat , imageName: this.selectedImageName}
        this.updateColor(this.selectedImageName)
    }
    updateColor(value)
    {
        console.log('here')
        this.colorList = this.colorList.map(item=>{
            let checked = item.value === value
            if(checked)
            {
                this.selectedColorName = item.label
            }
            return {...item,checked}
        })
    }

    updateVariant(value)
    {
        this.variant = this.variant.map(item=>{
            let checked = item.variant === value
            return {...item , checked}
        })
    }

    modalHandler()
    {
        this.openModal = true
    }
    cancelhandler()
    {
        this.openModal = false
    }
    saveHandler()
    {
        console.log('Form submitted')
    }

    animatePrice()
    {
        this.animatedPrice = ANIMATED_PRICE

        let interval = window.setInterval(()=>{
            if(this.formattedValue !== this.animatedPrice)
            {
                this.animatedPrice = this.animatedPrice+100
            }
            else
            {
                window.clearInterval(interval)
            }
        },10)

    }
    submitHander(){
        console.log("Form Submitted!!")
        this.template.querySelector('components-lead-form').formSubmit()
      }
  
      get description(){
        return `Customer is looking for CRV ${this.selectedVarainat.variant} of color ${this.selectedColorName}`
      }

}