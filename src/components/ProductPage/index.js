import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';
import categories from '../../data';

class ProductPage extends React.Component {

  state = {
    product: ''
  }

  selectedCategory = () => {
    try {
      const chosenCategory = this.props.chosenCategory.category;
      const chosenProduct = this.props.chosenCategory.product;
      const categoryToRenderProductsFor = categories.find(category => category.link === chosenCategory)
      const productToRender = categoryToRenderProductsFor.products.find(product => product.id === chosenProduct)
      return productToRender;
    }catch(e){

    }
  }

  render(){
    return(
      <div>
        {this.selectedCategory() &&
          this.selectedCategory() !== 'undefined' ? (
            <div>
              {console.log('yeh here')}
              <h3> {this.selectedCategory().name} </h3>
              <div>
                Cost: £{this.selectedCategory().cost}
              </div>
            </div>
          )
          :
          <div> 404 - Product not found </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
