import React , {useState} from "react"; 

const Addproducts=({onClose , onSubmit})=>{
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setCategory] = useState('');
    const [imageUrl, setimageUrl]= useState(' ');
    const [productStock, setProductStock]= useState(' ');
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmitted(true);
        onSubmit({ productName, productPrice, productCategory,imageUrl, productStock });
        console.log(isSubmitted)
        onClose();
    };

    console.log(isSubmitted)
    return(
        <div className="form-container">
           <div className="container">
           <span className="close" onClick={onClose}>&times;</span>
           <form onSubmit={handleSubmit}> 
            <h2>Product Details</h2>
            <input type="text" name="name" placeholder=" ProductName" value={productName} onChange={(e) => setProductName(e.target.value)} required autoComplete="on"/>
            <input type="text" name="category" placeholder="Category" value={productCategory} onChange={(e) => setCategory(e.target.value)} required autoComplete="on"/>
            <input type="number" name="price" placeholder="Price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required autoComplete="on"/>
            <input type="url" name="imageUrl" placeholder="imageURL" value={imageUrl} onChange={(e) => setimageUrl(e.target.value)} required autoComplete="on"/>
            <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={productStock} onChange={(e) => setProductStock(e.target.value)} required autoComplete="on"/>
            <button type="submit">Submit</button>
            </form>
            {isSubmitted && (
                <div className="success-message">
                    <span>&#10004;</span> 
                    Product added successfully!
                </div>
            )}
           </div>
        </div>
    );
};

export default Addproducts;