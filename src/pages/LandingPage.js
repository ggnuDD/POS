import React, { useEffect } from 'react'
import Axios from 'axios'
import Product from '../components/products/product'

function LandingPage () {

    useEffect (() =>  {
        Axious.post(Product)
            .then(response => {
                if(response.data.success){

                }else {
                    alert('Failed to fetch product datas')
                }
            })
    }, [])

    return (
        <>



        </>
    )




}