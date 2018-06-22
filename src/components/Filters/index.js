import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';
import './index.css'

class Filters extends React.Component {

  state = {
    options: [
        { value: 'red', text: 'red', checked: false },
        { value: 'black', text: 'black', checked: false },
        { value: 'white', text: 'white', checked: false },
        { value: 'cream', text: 'cream', checked: false },
        { value: 'green', text: 'green', checked: false },
        { value: 'yellow', text: 'yellow', checked: false },
      ],
    params: [],
    maxPrice: 200,
    costParam: 0
  }

  componentDidMount = () => {
    this.grabParams()
  }

  renderProducts = () => {
    const params = this.state.params
    this.props.showProducts(this.props.chosenCategory.category, 'color', params)
  }

  grabParams = () => {
    try{
      const params = this.props.location.search
      const splitParams = params.split('=')
      const paramType = splitParams[0].split('?')
      const newParams = splitParams[1].split(',')
      newParams.forEach(param => (
        this.setState(prevState => (
          {params: [...prevState.params, param]}
        ))
      ))
      this.renderProducts(paramType)
    }
    catch(e){
    }
  }

  configureParams = (paramType) => {
    if(paramType === 'cost'){
      this.props.history.push({
        pathname: `/categories/${this.props.chosenCategory.category}`,
        search: `?${paramType}=${this.state.costParam}`
      })
    }
    else if(this.state.params.length === 0){
      this.props.history.push({
        pathname: `/categories/${this.props.chosenCategory.category}`,
        search: ''
      })
    }
    else {
      this.props.history.push({
        pathname: `/categories/${this.props.chosenCategory.category}`,
        search: `?${paramType}=${this.state.params.join(',')}`
      })
    }
    this.renderProducts()
  }

  findParams = (param, paramType) => {
    const paramInUrl = this.state.params.find(par => par === param)
    if (paramType === 'cost'){
      this.setState({costParam: param}, () => this.configureParams(paramType))
    }
    else if(paramInUrl){
      const removeParam = this.state.params.filter(par => par !== param)
      this.setState({params: removeParam}, () => this.configureParams(paramType))
    }
    else {
      this.setState({params: [...this.state.params, param]}, () => this.configureParams(paramType))
    }
  }

  isParamChecked = (param) => {
    return this.state.params.find(par => par === param)
  }

  changePrice = (value) => {
    this.setState({maxPrice: value}, this.props.showProducts(this.props.chosenCategory.category, 'cost', value))
  }

  render(){
    return(
      <div className="filters">
        <h3>Filters</h3>
        <div>
          <h5>Colors</h5>
          {this.state.options.map((option, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onClick={() => this.findParams(option.text, 'color')}
                onChange={this.renderProducts}
                defaultChecked={this.isParamChecked(option.text)}
              />
              <label>{option.text}</label>
            </li>
          ))}
        </div>
        <div>
          <h5>Price</h5>
          <input
            type="range"
            min="1"
            max="200"
            value={this.state.maxPrice}
            onChange={(e) => this.findParams(e.target.value, 'cost')}
          />
          <p> Value: £{this.state.maxPrice}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filters));
