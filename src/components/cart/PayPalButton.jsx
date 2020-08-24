import React, { useContext } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { withRouter } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductsProvider";

const PayPalButton=({totalAmount,clearCart,history})=> {

    const {setAlert} = useContext(ProductContext);
    
    const onSuccess = (payment) => {
        setAlert({alertType:'success',msg:'Payment done successfully'});
        clearCart();
        history.push('/');
    };
    
    // User pressed "cancel" or close Paypal's popup!
    const onCancel = (data) => {
        setAlert({alertType:'warning',msg:"The payment was cancelled!"});
    };

    const onError = (err) => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        setAlert({alertType:'danger',msg:'Payment could not be processed.Try again!'});
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "INR"; // or you can set this value from your props or state

    const client = {
        sandbox: process.env.REACT_APP_CLIENT_ID,
        production: "YOUR-PRODUCTION-APP-ID",
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    return (
        <PaypalExpressBtn
            env={env}
            client={client}
            currency={currency}
            total={totalAmount*2000}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
        />
    );
}

export default withRouter(PayPalButton);