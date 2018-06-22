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
    params: []
  }

  componentDidMount = () => {
    this.syncParamsWithState()
  }

  syncParamsWithState = () => {
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
      const newParams = splitParams[1].split(',')
      newParams.forEach(param => (
        this.setState(prevState => (
          {params: [...prevState.params, param]}
        ))
      ))
      this.renderProducts()
    }
    catch(e){
    }
  }

  configureParams = () => {
    if(this.state.params.length === 0){
      this.props.history.push({
        pathname: '/categories/sport',
        search: ''
      })
    }
    else {
      this.props.history.push({
        pathname: '/categories/sport',
        search: `?color=${this.state.params.join(',')}`
      })
    }
    this.renderProducts()
  }

  findParams = (param) => {
    const paramInUrl = this.state.params.find(par => par === param)
    if(paramInUrl){
      const removeParam = this.state.params.filter(par => par !== param)
      this.setState({params: removeParam}, () => this.configureParams())
    }
    else {
      this.setState({params: [...this.state.params, param]}, () => this.configureParams())
    }
  }

  isParamChecked = (param) => {
    return this.state.params.find(par => par === param)
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
                onClick={() => this.findParams(option.text)}
                onChange={this.renderProducts}
                defaultChecked={this.isParamChecked(option.text)}
              />
              <label>{option.text}</label>
            </li>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filters));
