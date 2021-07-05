import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>This domain is for sale, make an offer!</h1>
  <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Offer <input type="text" name="offer" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  </Layout>
)

  document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('pizzaOrder');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

export default IndexPage
