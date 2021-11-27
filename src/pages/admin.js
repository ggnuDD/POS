import React, { Component } from "react";
import './adminpageStyle/app.css'

export default class Admin extends Component {
    render() {
        return (
          // <div style={{height: '100px', border: 'solid black', backgroundColor:'red'}}> Admin</div>
          <div class="create grid">
              <h1 class="under-line-effect under-line-effect--red">Thêm phim</h1>

              <form method="POST" action="/menu/store">
                  <div class="row">
                      <div class="col l-6" style= {{paddingRight: '60px'}}>
                          <div class="form-group">
                              <label class="info__label" for="name">Tên phim</label>
                              <input type="text" class="info__value" id="name" name="name"/>
                              <img></img>
                          </div>
                          <div class="form-group">
                              <label class="info__label" for="type_dish-input">Thể loại</label>
                              <input type="text" class="info__value" id="name" name="name"/>
                              
                          </div>
                          <div class="form-group">
                              <label class="info__label" for="price">Giá vé</label>
                              <input type="number" class="info__value" id="price" name="price"/>
                          </div>
                          <div class="form-group">
                              <label class="info__label" for="description">Mô tả</label>
                              <textarea class="info__value" id="description" name="description"> </textarea>
                          </div>

                      </div>
                      <div class="col l-6" style= {{paddingRight: '100px'}}>
                          <div class="form-group">
                              <label class="info__label" for="image">Poster phim</label>
                              <input type="file" name="image" class="filepond" />
                          </div>

                      </div>
                  </div>

                  <button type="submit" class="product__item-btn btn-red" style={{color: "white", marginTop: "-20px"}}>Submit</button>
              </form>
          </div>
        )
      }
}