import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import categories from '../../data';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';
import getParams from '../../utils/getParams';
import './index.css';

class Products extends React.Component {

  componentDidMount = () => {
    // main thing to solve why it's calling this component at the wrong time
    const splitFilter = window.location.href.split('?')
    const type = splitFilter[1].split('=')[0]
    const value = splitFilter[1].split('=')[1]
    this.props.showProducts(this.props.chosenCategory.category, type, value)
  }

  filterPresent = () => {
    if(window.location.href.includes('?')){
      return true
    }
    return false;
  }

  selectedCategory = () => {
    try {
      const chosenCategory = this.props.chosenCategory.category;
      const categoryToRenderProductsFor = categories.find(category => category.link === chosenCategory);
      return categoryToRenderProductsFor.link;
    }catch(e){

    }
  }

  render(){
    return(
      <div className="productsList">
        {
          this.props.productsToRender ?
          this.props.productsToRender.map(product => (
          <div className="product">
            <Link to={`/categories/${this.selectedCategory()}/${product.id}`} >{product.name}</Link>
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
