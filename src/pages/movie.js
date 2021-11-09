import React, { Component } from "react";
import { movieArray } from "../data/HomePage/Data";
import { Consumer } from "../components/products/content";
import Movie from "../components/products/movie";
import { PaginationProvider, PaginationContext } from "../components/products/Pagination";
import './ProductStyle/ProductListStyle.css'

const { useContext, useEffect } = React;


const Page = () => {
  const [pagination, setPagination] = useContext(PaginationContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const numberOfPages = Math.ceil(movieArray.length / pagination.limit);

  const navigateToPage = (pageNumber) => {
    setPagination({
      ...pagination,
      page: pageNumber,
      start: (pageNumber - 1) * pagination.limit,
      perPage: (pageNumber * pagination.limit),
    });
  };
  
  useEffect(() => {
    navigateToPage(1)
  }, [])
  
    return (
      <>
        <Consumer>
          {value => {
                  return value.products.slice(pagination.start, pagination.perPage).map(product => {
                    return <Movie key={product.id} product={product} />
                  })
                }}
        </Consumer>
        <div className="row">
          <div className="col-4 col-md-8 col-lg-9"></div>
          <div className="col-8 col-md-4 col-lg-3 my-4">
        {pagination.page > 2 && <button className="btn pagebtn" onClick={() => navigateToPage}>First</button>}
        {pagination.page > 1 && <button className="btn pagebtn" onClick={() => navigateToPage(pagination.page - 1)}>Prev</button>}
        {[...Array(100)].slice(0, numberOfPages).map((x, i) =>
          <button className="btn pagebtn" onClick={() => navigateToPage(i + 1)}>{i + 1}</button>
        )}
        {pagination.page !== numberOfPages && <button className="btn pagebtn" onClick={() => navigateToPage(pagination.page + 1)}>Next</button>}
            {pagination.page < Math.ceil(numberOfPages / 2 + 1) && <button className="btn pagebtn" onClick={() => navigateToPage(numberOfPages)}>Last</button>}
          </div>
          </div>
      </>
  )
}
export default class ProductList extends Component {
  state = {
    products: movieArray
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
            <div className="row">
            <div style={{backgroundColor:'black', height:'50px', borderRadius:'30px'}}></div>
            <div style={{backgroundColor:'#C4A484', height:'30px'}}></div>
            </div>
            <div className="row">
            <PaginationProvider>
                <Page />
                <div style={{height:'30px', backgroundColor:'#C4A484'}}></div>
            </PaginationProvider>
          </div>
        </div>
      </React.Fragment>
    )
  }
}