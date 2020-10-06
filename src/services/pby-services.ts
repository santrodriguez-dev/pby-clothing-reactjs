import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import store from '../store/store';

const clienteAxios = axios.create({
  baseURL: 'https://www.pbyclothing.com/api/'
})


const getAllProducts = () => {
  return clienteAxios.post<any[]>(`products`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getAllArticles = () => {
  return clienteAxios.post<any[]>(`articles`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getMenu = () => {
  return clienteAxios.post<any[]>(`Menu`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getProductDetail = (Id: string) => {
  return clienteAxios.post<any[]>(`productDetail`, { Id })
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getSocialNetwork = () => {
  return clienteAxios.post<any[]>(`SocialNetwork`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getArticleBlog = () => {
  return clienteAxios.post<any[]>(`ArticleBlog`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getFooterMenu = () => {
  return clienteAxios.post<any[]>(`Footer/FooterMenu`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getFooterDataCompany = () => {
  return clienteAxios.post<any[]>(`Footer/DataCompany`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getCountries = (countrySearch: string) => {
  return clienteAxios.post<any[]>(`location/country`, { Data: countrySearch })
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getCities = (countyCode: string) => {
  return clienteAxios.post<any[]>(`location/city`, { Data: '', DataId: countyCode })
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const validationCode = (code: string) => {
  return clienteAxios.post<any[]>(`validacionCode`, { Data: code.trim() })
    .then(response => {
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

  return clienteAxios.post<any[]>(`NewOrderBuy`, data)
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
  validationCode
}