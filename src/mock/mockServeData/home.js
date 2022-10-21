import Mock from 'mockjs'
import data from '../data'
const homeData = {...data}
const lineList = []
const tableData = []
const day = new Date()
const date = []
const newdata = new Array()



export default {
    getStatisticalData: () => {
        for (var i = 0; i < 6; i++) {
            if(newdata[i] === undefined){
                newdata[i] = new Array()
                for(var n = 0; n < 6; n++){
                    newdata[i][n] = Mock.Random.float(10, 80, 0, 0)
                }
            }
            lineList.push(
                Mock.mock(() =>{
                    return{
                        phone: homeData.homedata.phoneList[i],
                        data: newdata[i]
                    }
                })
            )
            if(tableData[i] === undefined){
                tableData.push(
                    Mock.mock(() =>{
                        return{
                            phone: homeData.homedata.phoneList[i],
                            daysell: Mock.Random.integer(10,100),
                            monthsell: Mock.Random.integer(100,300),
                            totalsell: Mock.Random.integer(500,800),
                        }
                    })
                )
            }
            
            if(date[i] === undefined){
                date.unshift(
                    Mock.Random.now('day',`MM.${day.getDate() - i}`)
                )
            }
        }
        // console.log(Mock.Random.now('day','yyyy-MM-dd'));
        // console.log(date);

        return {
            code: 20000,
            data: {
                date,
                lineList,
                tableData,
                countData: homeData.homedata.countData,
                videoData: homeData.homedata.videoData,
                userData: homeData.homedata.userData,
                orderData: homeData.homedata.orderData,
            }
        }
    }
}