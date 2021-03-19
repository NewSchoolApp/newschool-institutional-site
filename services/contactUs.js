 
import { http } from './config'

/**
 * @author Leonardo Oliveira Balsalobre
 * 
 * Serviço de fale conosco
 */

export default {

  submit: (form, token) => {             
    return http.post("api/v1/message/email/contactus", form, { headers: { 'Authorization': `Bearer ${token}` } })      
  }
}