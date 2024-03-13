const errors: {[key:string]: { error_code:string; default_message:string; default_title:string; image:string; }} = {
  "400": {
    "error_code": "400",
    "default_message": "vuelve a intentarlo",
    "default_title": "Bad request",
    "image": "https://pro-portalverse-lottus.s3.amazonaws.com/UTEG/404_068eb52796.jpg"
  },
  "404": {
    "error_code": "404",
    "default_message": "hubo un error inesperado",
    "default_title": "lo sentimos",
    "image": "https://pro-portalverse-lottus.s3.amazonaws.com/UTEG/404_A_178f174575.jpg"
  }
} 
 export default errors