import Mock from 'mockjs'
import data from '../data'
const mallData = { ...data }
const phone = mallData.homedata.phoneList
const tableData = []
const List = []

export default {
    //获取商品列表
    getMallList: () => {
        for (var i = 0; i < phone.length; i++) {
            if (tableData[i] === undefined) {
                tableData.push(
                    Mock.mock({
                        "id": "@increment",
                        "phone": phone[i],
                        "icon": mallData.malldata.icon[i],
                        "newstore": Mock.Random.integer(10,100),
                        "store": mallData.homedata.videoData[i].value,
                        "addr": "@province(true)"
                    })
                )
            }

        }
        return {
            code: 20000,
            data: {
                tableLabel: mallData.malldata.tableLabel,
                tableData,
                formLabel: mallData.malldata.formLabel,
            }
        }
    },
    //修改商品信息
    updateMall: config =>{
        const { id, phone, icon, newstore, store, addr } = JSON.parse(config.body)
        List.some(m =>{
            if(m.id === id){
                m.id = id,
                m.phone = phone,
                m.icon = icon,
                m.newstore = newstore,
                m.store = store,
                m.addr = addr
                return true
            }
        })
        return {
            code: 20000,
            data: {
                message: '编辑成功'
            }
        }
    }
}