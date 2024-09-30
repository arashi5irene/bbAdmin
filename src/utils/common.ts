import { useConfigStore } from "@/stores/base";
const fetchApi = (name:string, data:any, type="POST") =>{
    const configStore = useConfigStore()
    return fetch(configStore.apiUrl + name, {
        method: type, // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((res) => {
            return res.json()
        })
        .catch((error) => console.error("Error:", error))
        .then((response) =>{
           return response
          });
}
const fetchFormdataApi = (name:string, formdata:any, type="POST") =>{
  const configStore = useConfigStore()
  return fetch(configStore.apiUrl + name, {
      method: type,
      body: formdata, 
      // headers: new Headers({
      //   "Content-Type": "multipart/form-data",
      // }),
    })
      .then((res) => {
          return res.json()
      })
      .catch((error) => console.error("Error:", error))
      .then((response) =>{
         return response
        });
}

export { fetchApi,fetchFormdataApi};