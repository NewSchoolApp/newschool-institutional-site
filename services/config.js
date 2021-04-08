import Axios from 'axios'

export const http = Axios.create({
  baseURL: "https://9ddlz0bte4.execute-api.us-east-2.amazonaws.com/dev",
})

export const httpDonation = Axios.create({
  baseURL: "http://newschooldonormetric-env.eba-mxmw3egz.us-east-2.elasticbeanstalk.com",
})