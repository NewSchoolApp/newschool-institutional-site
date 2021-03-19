import { http } from '../services/config'

export const getExternalCredentials = async () => {
    
    const base64 = btoa(
      `NEWSCHOOL@EXTERNAL:NEWSCHOOL@EXTERNALSECRET`
    );

    const clientCredentials = `Basic ${base64}`;
    const body = new FormData();
    Object.keys({ grant_type: "client_credentials" }).forEach(item => {
        body.append(item, { grant_type: "client_credentials" }[item]);
    });

    return await http.post("oauth/token", body, {
      headers: { Authorization: clientCredentials }
    });
  }