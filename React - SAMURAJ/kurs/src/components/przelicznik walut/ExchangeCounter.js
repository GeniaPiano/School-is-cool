import React, {useState} from "react";

const handleGetProductPrice = (select, price ) => {
    if (select === 'electricity') return price.electricity
    else if (select === 'fuel') return price.fuel
    else if (select === 'oranges') return price.oranges
}

const Cash = ({ratio, amount, title, name, price, product}) => {
    const productPrice = handleGetProductPrice(product, price);
    const value = ((amount * productPrice)/ ratio ).toFixed(2)

    return (
        <>

            <p>{title}:</p>
            <p>{value} {name} </p>
        </>
    )
}

export const ExchangeCounter = () => {
    const [amount, setAmount] = useState('');
    const [product, setProduct] = useState('fuel');
    const [units, setUnits] = useState('litrów')


    const defaultProps = {
         currencies : [
        {
            id: 1,
            name: 'dollar',
            ratio: 3.6,
            title: 'Wartość w dolarach'
        },
        {
            id: 2,
            name: 'euro',
            ratio: 4.1,
            title: 'Wartość w euro',
        },
        {
            id: 3,
            name: 'pounds',
            ratio: 4.6,
            title: 'Wartość w pounds',
        },

             {
                 id: 4,
                 name: 'złoty',
                 ratio: 1,
                 title: 'Wartość w złotówkach',
             }

    ],
        price: {
             electricity: .51,
             fuel: 5.8,
             oranges: 6.5,
        }
    }

    const handleSelect = (e) => {
        setProduct(e.target.value);
        setAmount('')

    }

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const insertSuffix =(select)=> {
        if (select ===  'electricity') return <em>kwH</em>
        else if (select ===  'fuel') return <em>litrów</em>
        else if(select ===  'oranges') return <em>kg</em>
        else return null

    }


    const {currencies, price} = defaultProps


    const calculators = currencies.map(currency => (
        <Cash
            key={currency.id}
            ratio={currency.ratio}
            title={currency.title}
            amount={amount}
            name={currency.name}
            price={price}
            product={product}
        />
    ))

    return (
        <div>
            <label>
                <select value={product} onChange={handleSelect}>
                    <option value="electricity">prąd</option>
                    <option value="fuel">benzyna</option>
                    <option value="oranges">pomarańcze</option>

                </select>
            </label>
            <br/>
            
            <label>
                <input
                    onChange={handleChange}
                    value={amount}
                    type="number"/>
                {insertSuffix(product)}
            </label>
            {calculators}

        </div>
    )

}