import React, {Component} from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import "./styles.css";

export default class Product extends Component {
    state = {
        products: [],
    };

async componentDidMount() {
    const { key } = this.props.match.params;
    console.log(key)
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'project': key })
    };

    const response = await api.post('/project',{
        "project": key
    },settings)
        
    console.log(response)

    this.setState({ products: response.data});

    }

    
    
    render(){
        const {products} = this.state

        return (
            <div className="product-list">
            { products.map(product => (
                <article key={product._id}>
                    <strong>{product._source.base_name}</strong>
                    <p>{product._source.description}</p>
                    <Link to={`/base_name/${product._source.base_name}`}>Acessar</Link>  
                   </article>
            ))}
            </div>
        );
    }


}