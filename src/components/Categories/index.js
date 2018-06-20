import React from 'react';
import { Link } from "react-router-dom";
import Categories from '../../data';
import './index.css';

const component = () => (
  <div className="categoriesList">
    {Categories.map(category => (
      <div className="category">
        <Link to={`/categories/${category.link}`} >{category.name}</Link>
        <div>{category.name}</div>
        <div>{category.description}</div>
      </div>
    ))}
  </div>
)

export default component;
