import request from '@/utils/request'

export function list() {
    return request({url: 'drivers', method: 'get'})
}
