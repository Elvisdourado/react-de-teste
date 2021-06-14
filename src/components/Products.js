import Button from './Button'
import Counter from './Counter';

function getCurrency(language) {
    switch (language) {
        case "pt-br":
            return "BRL";
        case "en-US":
            return "USD";
        case "fr-FR":
            return "EUR";
        default:
            return "BRL";

    }
}

function Products(props) {
    return (


        <div className='teste' >
            <div className="card d-flex align-items-center" style={{ width: '18rem' }}   >
                <img src={props.image} className="card-img-top w-50 p-1 " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.info}</p>
                    <span>{props.price.toLocaleString(navigator.languages[0], { style: "currency", currency: getCurrency(navigator.languages[0]),})}</span>
                    <Button text={props.text}> Compre agora</Button>

                    <Counter></Counter>
                </div>


            </div>

        </div>



    )
}

export default Products