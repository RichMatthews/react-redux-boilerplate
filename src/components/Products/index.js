import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import categories from '../../data';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';
import getParams from '../../utils/getParams';
import './index.css';

class Products extends React.Component {

  state = {
    productsToShow: []
  }

  productsToRender = () => {
    try {
      const chosenCategory = this.props.chosenCategory.category;
      const categoryToRenderProductsFor = categories.find(category => category.link === chosenCategory)
      const products = categoryToRenderProductsFor.products;
      this.setState({productsToShow: [...this.state.productsToShow, products]}) //TODO: FIX THIS
    }catch(e){

    }
  }

  selectedCategory = () => {
    try {
      const chosenCategory = this.props.chosenCategory.category;
      const categoryToRenderProductsFor = categories.find(category => category.link === chosenCategory)
      return categoryToRenderProductsFor.link;
    }catch(e){

    }
  }

  componentDidMount = () => {
    this.productsToRender()
  }

  filterWithParams = (param) => {
    const paramType = param.split('=')[0]
    const value = param.split('=')[1]
    switch (paramType) {
      case 'cost': {
        const filteredProducts = this.state.productsToShow[0].filter(products => products.cost <= 100)
        // this.setState({productsToShow: [...this.state.productsToShow, filteredProducts]})
        console.log('yo yo yo');
      }
      case 'color': {
        return ['color', param[1], 'includes']
      }
      default:
        return ''
    }
  }

  render(){
    console.log(this.state.productsToShow[0], 'should be state');
    return(
      <div className="productsList">
        {
          this.state.productsToShow[0] ?
          this.filterWithParams(getParams()) &&
          this.state.productsToShow[0].map(product => (
          <div className="product">
            <Link to={`/categories/${this.selectedCategory().link}/${product.id}`} >{product.name}</Link>
            <div>name: {product.name}</div>
            <div>£{product.cost}</div>
            <div>color: {product.color}</div>
          </div>
        ))
        :
        <div> Sorry we did not find that product page </div>
      }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
