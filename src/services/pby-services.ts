import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import store from '../store/store';

const clienteAxios = axios.create({
  // baseURL: 'https://www.pbyclothing.com'
  baseURL: 'https://localhost:44336'
})


const getAllProducts = () => {
  return clienteAxios.post<any[]>(`api/products`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getAllArticles = () => {
  return clienteAxios.post<any[]>(`api/articles`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getMenu = () => {
  return clienteAxios.post<any[]>(`api/Menu`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getProductDetail = (Id: string) => {
  return clienteAxios.post<any[]>(`api/productDetail`, { Id })
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getSocialNetwork = () => {
  return clienteAxios.post<any[]>(`api/SocialNetwork`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getArticleBlog = () => {
  return clienteAxios.post<any[]>(`api/ArticleBlog`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getFooterMenu = () => {
  return clienteAxios.post<any[]>(`api/Footer/FooterMenu`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getFooterDataCompany = () => {
  return clienteAxios.post<any[]>(`api/Footer/DataCompany`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getCountries = (countrySearch: string) => {
  return clienteAxios.post<any[]>(`api/location/country`, { Data: countrySearch })
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getCities = (countyCode: string) => {
  return clienteAxios.post<any[]>(`api/location/city`, { Data: '', DataId: countyCode })
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getHistoryProducts = () => {
  return clienteAxios.post<any[]>(`api/getHistoryProducts/city`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const validationCode = (code: string) => {
  return clienteAxios.post<any[]>(`api/validacionCode`, { Data: code.trim() })
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const login = (Identification: string, password: string) => {
  return clienteAxios.post<any[]>(`Acceso/AuthService`, { Identification, password })
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const newsLetterRegister = (FirstName: string, LastName: string, Email: string) => {
  return clienteAxios.post<any[]>(`api/Register/NewsLetterRegister`, { FirstName, LastName, Email })
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const register = (IdentificationTypeId: string, Identification: string, FirstName: string, LastName: string, Email: string, password: string) => {
  return clienteAxios.post<any[]>(`api/Register/PersonRegister`,
    {
      IdentificationTypeId,
      Identification,
      FirstName,
      LastName,
      Email,
      password,
    }).then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const newOrderBuy = (DatosFactura: any) => {

  const { shoppingCart } = store.getState();

  const Products = shoppingCart.products.map(item => {
    return {
      ProductId: item.Id_Producto,
      Cantidad: item.CantidadCompra,
      Precio: item.Precio
    }
  })

  const data = {
    DatosFactura,
    Products,
    PromotionalCode: shoppingCart.promotionalCode ? shoppingCart.promotionalCode.code : null,
    PercentPromotionalCode: shoppingCart.promotionalCode ? shoppingCart.promotionalCode.discountValue : 0
  }

  return clienteAxios.post<any[]>(`api/NewOrderBuy`, data)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}


const resolveResponse = (response: AxiosResponse) => {
  if (response.status !== 200) return false
  if (!response.data) return false
  const data = response.data
  return data
}

export const PbyService = {
  getAllProducts,
  getAllArticles,
  getMenu,
  getProductDetail,
  getSocialNetwork,
  getArticleBlog,
  getFooterMenu,
  getFooterDataCompany,
  getCountries,
  getCities,
  newOrderBuy,
  validationCode,
  login,
  register,
  newsLetterRegister,
  getHistoryProducts
}