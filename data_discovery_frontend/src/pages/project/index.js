import React, { componet, Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import "./styles.css";

export default class Project extends Component {
state = {
    products: [],

}


componentDidMount(){
    this.loadProducts();
}

loadProducts = async () => {
    const response = await api.get('/all_projects');
    console.log(response.data.buckets)
    this.setState({ products: response.data.buckets})
};



// render() {
//     return <h1>Hello data: {this.state.products.length} </h1>
// }

render(){
    const { products } = this.state;
    return (
        <div className="product-list">
            { products.map(product => (
                <article key={product.key}>
                    <strong>{product.key}</strong>
                    <p>Total de datasets: {product.doc_count}</p>
                    <Link to={`/projects/${product.key}`}>Acessar</Link>                    
                </article>
            ))}
        </div>
    )
}


}