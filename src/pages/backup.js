import React, { Component } from "react";
import { productList } from "../data/ProductData/soon";
import { Consumer } from "../components/products/content";
import Soon from "../components/products/soon";
import { PaginationProvider, PaginationContext } from "../components/products/Pagination";
import './ProductStyle/ProductListStyle.css'


const { useContext, useEffect } = React;

const Page = () => {
  const [pagination, setPagination] = useContext(PaginationContext)

  const numberOfPages = Math.ceil(productList.length / pagination.limit);

  const navigateToPage = (pageNumber) => {
    setPagination({
      ...pagination,
      page: pageNumber,
      start: (pageNumber - 1) * pagination.limit,
      perPage: (pageNumber * pagination.limit),
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    navigateToPage(1)
  }, [])
  
    return (
      <>
        <Consumer>
          {value => {
                  return value.products.slice(pagination.start, pagination.perPage).map(product => {
                    return <Soon key={product.id} product={product} />
                  })
                }}
        </Consumer>
        <div className="row">
          <div className="col-4 col-md-8 col-lg-9"></div>
          <div className="col-8 col-md-4 col-lg-3 my-4">
        {pagination.page > 2 && <button className="btn pagebtn" onClick={() => navigateToPage(1)}>First</button>}
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
    products: productList
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
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