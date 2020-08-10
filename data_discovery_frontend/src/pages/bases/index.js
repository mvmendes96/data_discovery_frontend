import React, {Component} from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
// import "./styles.css";

export default class Bases extends Component {
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
        body: JSON.stringify({ 'base_name': key })
    };

    const response = await api.post('/base_name',{
        "base_name": key
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
                    <strong>Projeto - {product._source.project}</strong>
                    <li>Dataset - {product._source.base_name}</li>
                    <li>Descrição - {product._source.description}</li>
                    <li>Data Owner - {product._source.data_owner}</li>
                    <li>Ownership - {product._source.ownership}</li>
                    <li>Describe - {product._source.describe}</li>
                    <li>Colunas - {product._source.columns}</li>
                    <li>QTD de Linhas - {product._source.rows_counter}</li>
                    <li>Fonte - {product._source.source}</li>
                    <li>Ultima Atualização - {product._source.event_send}</li>
                   </article>
            ))}
            </div>
        );
    }


}