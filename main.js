import React , {useState} from "react"; 
import Addproducts from "./ADD";

const Index=()=>{
    const [showModel , setShowModel]= useState(false);
    const [showForm, setShowForm] = useState(false); 
    
    const handleAdd=()=>{
        setShowForm(true);
        setShowModel(true);
    };

    const handleClose=()=>{
        setShowModel(false);
    };

    const handleSubmit=(productDetails)=>{
        console.log(productDetails);
    };

    return(
        <div className="first-button">
            {!showForm && <button onClick={handleAdd}>Add products</button>}

            {showModel && ( 
            <Addproducts onClose={handleClose} onSubmit={handleSubmit} />
            )}
        </div>
    );
};

export default Index;