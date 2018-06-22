import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import categories from '../../data';
import Filters from '../Filters';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';
import './index.css';

class Products extends React.Component {

  componentDidMount = () => {
    // main thing to solve why it's calling this component at the wrong time
    // solved, needed to use React switch :)
    try{
      const splitFilter = window.location.href.split('?')
      const type = splitFilter[1].split('=')[0]
      const value = splitFilter[1].split('=')[1]
      this.props.showProducts(this.props.chosenCategory.category, type, value)
    }catch(e){
      this.props.showProducts(this.props.chosenCategory.category)
    }
    // this.props.showProducts(this.props.chosenCategory.category)
  }

  selectedCategory = () => {
    try {
      const chosenCategory = this.props.chosenCategory.category;
      const categoryToRenderProductsFor = categories.find(category => category.link === chosenCategory);
      return categoryToRenderProductsFor.link;
    }catch(e){

    }
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      try{
        const splitFilter = window.location.href.split('?')
        const type = splitFilter[1].split('=')[0]
        const value = splitFilter[1].split('=')[1]
        this.props.showProducts(this.props.chosenCategory.category, type, value)
      }
      catch(e){
        
      }
     }
  }

  render(){
    console.log(this.props, 'proooops');
    return(
      <div>
        <h3> Products </h3>
        <div className="productsListingPage">
          <Filters />
          <div className="productsList">
            {
              this.props.productsToRender ?
              this.props.productsToRender.map((product, index) => (
              <div className="product" key={index}>
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
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
