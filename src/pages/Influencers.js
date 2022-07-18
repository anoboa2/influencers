import NavBar from '../components/molecules/NavBar';
import ProductCard from '../components/molecules/ProductCard';

// create a webpage with a navbar and product cards
const Influencers = () => {

  const products = [
    {
      name: 'Italy',
      description: 'This is the Italy itinerary',
      price: '9.99',
      currency: 'USD',
      product_id: 'prod_M3gNSuwBEOfg1K'
    },
    {
      name: 'Iceland',
      description: 'This is the Iceland itinerary',
      price: '9.99',
      currency: 'USD',
      product_id: 'prod_M3gSPAjSf4ey64'
    },
    {
      name: 'Paris',
      description: 'This is the Paris itinerary',
      price: '9.99',
      currency: 'USD',
      product_id: 'prod_M3gRlnAKzowhmD"'
    }
  ];

  // create an onClick function that takes in product_id as a parameter
  const onClick = (product_id) => {
    let url = "https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/product/createcheckoutsession"
    let body = {
      "product_id": product_id
    }

    fetch(url, {
      "method": "POST",
      "body": JSON.stringify(body)
    })
    // parse the response as JSON
    .then(response => response.json())
    // parse the JSON into a JS object
    .then(data => {
      console.log(data)
      window.location.href = data.redirect_url
      console.log(data.redirect_url)
    }
    // handle any errors
    ).catch(error => {
      console.log(error)
    }
    )
  }

  return (
    <div>
      <NavBar />
      {products.map(product => (
        <ProductCard
          key={product.product_id}
          product={product}
          onClick={() => {
            onClick(product.product_id)
          }}
        />
      ))}
    </div>
  );
}

export default Influencers;