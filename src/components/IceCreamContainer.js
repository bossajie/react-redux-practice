import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer({ numOfIceCream,buyIceCream }) {
    return (
        <div>
            <h2>Number of cakse: {numOfIceCream}</h2>
            <button onClick={buyIceCream}>Buy Cakes</button>
        </div>
    )
}


const mapStateToProps  = state => {
    return {
        numOfIceCream : state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )
    (IceCreamContainer)
