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

export default IndexPage
