import  {request} from "../request";

export function findOutAndInStorage(data) {
    return request({
        url: 'finance/initBalance/findOutAndInStorage',
        data: data
    })
}
