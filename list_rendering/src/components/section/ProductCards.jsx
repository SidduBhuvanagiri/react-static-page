import React from 'react'

import './ProductCards.css'

class ProductCards extends React.Component{
   productArray=[
    {image:"https://coloshop-template.vercel.app/images/product_1.png",description:"Fujifilm X100T 16 MP Digital Camera (Silver)",price:"$520.00"},
    {image:"https://coloshop-template.vercel.app/images/product_2.png",description:"Samsung CF591 Series Curved 27-Inch FHD Monitor",price:"$610.00"},
    {image:"https://coloshop-template.vercel.app/images/product_3.png",description:"Blue Yeti USB Microphone Blackout Edition",price:"$120.00"},
    {image:"https://coloshop-template.vercel.app/images/product_4.png",description:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"$410.00"},
    {image:"https://coloshop-template.vercel.app/images/product_5.png",description:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"$410.00"},
    {image:"https://coloshop-template.vercel.app/images/product_6.png",description:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"$410.00"},
    {image:"https://coloshop-template.vercel.app/images/product_7.png",description:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"$410.00"},
    {image:"https://coloshop-template.vercel.app/images/product_8.png",description:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"$410.00"},
    {image:"https://coloshop-template.vercel.app/images/product_9.png",description:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"$410.00"},
    {image:"https://coloshop-template.vercel.app/images/product_10.png",description:"DYMO LabelWriter 450 Turbo Thermal Label Printer",price:"$410.00"}
   ]
    render(){
        return <div>
            <div className='products-label'>
            <h1 >New Arrivals</h1>
            <h2 style={{color:"#e83e8c"}} >▬▬▬▬▬▬▬</h2>
            <div style={{
                // border:"1px solid red",
                marginTop:"-15px",
                display:"flex",
                height:"80px",
                width:"100%",
                alignItems:"center",
                justifyContent:"center",
                gap:"20px",
                color:"red",

            }}>
                <h2>ALL</h2>
                <h2>WOMEN'S</h2>
                <h2>ACCESSORIES</h2>
                <h2>MEN'S</h2>
                
            </div>
            </div>

            <div className='products'>

            {this.productArray.map((value,index)=>(
                <div key={index} className='product-div'>
                    <img src={value.image} alt={value.image} width={"250px"} height={"300px"}/>
                    <p>{value.description}</p>
                    <p>{value.price}</p>
                </div>
            ))}

            </div>


        </div>
    }
}

export default ProductCards



// function ProductCards(){
//     const arr=[1,2,"hai","hello",4,5]
//     const students=[{name:"siddu",class:1},{name:"tom",class:2},{name:"jerry",class:3}]
//     return(
//         <div className='products'>
//           {arr.map((value,index)=>
//             <p key={index}>{value}</p>
//           )}

//         <div>
//           {students.map((value,index)=> <div>
//           {/* <p key={index}>name : {value.name}</p> */}
//            {/* <p key={index}>class : {value.class}</p> */}
//             {/* {<p>{JSON.stringify(value)}</p>} */}
//             </div>
//            )}
//           </div>

//         </div>
//     )
// }