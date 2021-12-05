import styled from "styled-components";

export const ProductWrapper = styled.div`

    .head-text {
        position: relative;
    }
    .text-on-image1 {
      display: block;
      border: solid;
      border-weight: 1px;
      border-color: red;
      background-color: red !important;
      border-radius: 10px;
      position: absolute;
      text-align: center;
      right: 65px;
      left: 65px;
      bottom: 120px;
      color: white;
      text-decoration: none;
    }
    .text-on-image2 {
      display: block;
      border: solid;
      border-weight: 1px;
      border-color: red;
      background-color: red !important;
      border-radius: 10px;
      color: white;
      position: absolute;
      text-align: center;
      right: 65px;
      left: 65px;
      top: 120px;
      text-decoration: none;
    }
    
    .card-footer {
        border-top: transparent;
        background-color: #C4A484 !important;
    }
    .card-footer p {
        font-size: 18px;
    }
    .card-footer h5 {
        color: red;
        font-size: 17px; 
    }
    &:hover {
        .card {
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background-color: rgba(247, 247, 247) !important;
        }
        .card-footer p {
            color: brown;
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #ffdd00;
        border: 1px white solid;
        color: white;
        transform: translate(100%, 100%);
        font-size: 30px
    }
    .card-img-top {
        width: 100%;
        height: 200px;
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .link {
        text-decoration: none;
    }
    .card {
        height: 400px;
        width: 300px;
    }
    .card-footer {
      background-color: red;
    }
    .card-footer p {
      color: black;
      font-weight: bold;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #C4A484;
    border: 1px black solid;
    color: white;
    transform: translate(100%, 100%);
  }
  .card-img-top {
    width: 100%;
    height: 380px;
    margin: 10px 0px;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .link {
    text-decoration: none;
  }
  .card {
    height: 400px;
    width: 260px;
  }
  .card li {
    border: none;
  }
`;
