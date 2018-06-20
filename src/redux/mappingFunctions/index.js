import Types from '../types';

export const mapStateToProps = state => ({
  chosenCategory: state.chosenCategory,
  productsToRender: state.productsToRender
});

export const mapDispatchToProps = (dispatch) => ({
  showProducts: (category, filterType, filterValue) => {
    dispatch({
      type: Types.SHOW_PRODUCTS,
      category,
      filter: {
        type: filterType,
        value: filterValue,
      }
    })
  }
});
