import { useMemo, useState } from "react";


const UseMemoDemo = ()=>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const handleSubmit = () => {
        setProducts([...products, {
            name: name,
            price: +price
        }])
    }
    // console.log('Products ', products); 

    const total = useMemo(()=>{
        const result = products.reduce((result, prod)=>{
            return result + prod.price;
        }, 0);

        return result;
    }, [products]);

    console.log('Total ===> ', total);

    return(
        <div style={{padding: 32}}>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={'Enter name...'} 
            />
            <br />
            <input 
                value={price}
                onChange={e => setPrice(e.target.value)}
                type={"number"}
                placeholder={'Enter price...'} 
            />
            <br />

            <button onClick={handleSubmit}>Add</button>

            <h2>Total</h2>
            <ul>
                {
                    products.map( item => (
                        <li>
                            <p>{item.name} - {item.price}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseMemoDemo;