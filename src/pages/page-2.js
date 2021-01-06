import React from "react"
import { Waitlist } from "waitlistapi"
import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <div>
      <Waitlist api_key="90LBXZ" waitlist_link="https://investexpert.co" />
    </div>
  </Layout>
)

export default SecondPage
