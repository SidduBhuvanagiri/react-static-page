import './CategoryCards.css'

function CategoryCards(){
    return(
        <>
        <div className="category-imgs">
            <img src="https://coloshop-template.vercel.app/images/banner_1.jpg" alt="" />
            <img src="https://coloshop-template.vercel.app/images/banner_2.jpg" alt="" />
            <img src="https://coloshop-template.vercel.app/images/banner_3.jpg" alt="" />
        </div>

        <div className='category-labels'>
            <div>
                <h2>WOMEN'S</h2>
            </div>
            <div>
                <h2>ACCESSORIES'S</h2>
            </div>
            <div>
                <h2>MEN'S</h2>
            </div>
        </div>

        </>
    )
}

export default CategoryCards