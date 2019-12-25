//接口模块封装
import { get , post } from './http'

const http={
   example(data){return post('api/BudGet/Post_BudGetByPager',data)}
} 
export default http