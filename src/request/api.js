import { get, axiosDelete, post, put } from './http'

export const catalogAdd = (params) => post('/catalog/add', params)

export const catalogDelete = (params) => axiosDelete('/catalog/delete?type=' + params)

export const catalogList = () => get('/catalog/list')

export const catalogUpdate = (params) => put('/catalog/update', params)

export const screenAdd = (params) => post('/screen/add', params)

export const screenDelete = (params) => axiosDelete('/screen/delete/' + String(params))

export const screenList = (params) => get('/screen/list/' + String(params))

export const screenUpdate = (params) => put('/screen/update', params)

export const shareList = () => get('/share/list')

export const shareDelete = (params) => axiosDelete('/share/delete?id=' + params)
