import { Button } from "react-bootstrap"
import Panier from "./Panier";

function ItemList({data:{ id, name, description, image, price }}) {
	console.log(price);
	return (
			<li className='list-group-item' key={id}>
                    <div className='row py-3'>
                        <div className='col-sm-9'>
                            <h5 className='mt-0 font-weight-bold mb-2'>{name}</h5>
                            <p className='font-italic text-muted mb-0 small'>{description}</p>
                            <div className='d-flex align-items-center justify-content-between mt-1'>
                                <h6 className='font-weight-bold my-2'>Price: {price}TND</h6>
                            </div>
                        </div>
						<img src={image} alt='' width='200' className='col-sm-2' />
						<div className='col-sm-3 py-1'>
							<Button onClick={() => alert(id)}>
								Ajouter au panier
							</Button>
						</div>
                    </div> 
            </li>
		
			
	)
}

export default ItemList