
export default {
    homedata: {
        phoneList: ['苹果', 'vivo', 'oppo', '魅族', '三星', '小米'],
        countData: [
            {
                name: "今日支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9",
            },
            {
                name: "今日收藏订单",
                value: 210,
                icon: "star-on",
                color: "#ffb980",
            },
            {
                name: "今日未支付订单",
                value: 1234,
                icon: "s-goods",
                color: "#5ab1ef",
            },
            {
                name: "本月支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9",
            },
            {
                name: "本月收藏订单",
                value: 210,
                icon: "star-on",
                color: "#ffb980",
            },
            {
                name: "本月未支付订单",
                value: 1234,
                icon: "s-goods",
                color: "#5ab1ef",
            },
        ],
        videoData: [
            {
                name: '苹果',
                value: 2999
            },
            {
                name: 'vivo',
                value: 5999
            },
            {
                name: 'oppo',
                value: 1500
            },
            {
                name: '魅族',
                value: 1999
            },
            {
                name: '三星',
                value: 2200
            },
            {
                name: '小米',
                value: 2999
            },
        ],
        userData: [
            {
                date: '周一',
                new: 5,
                active: 200
            },
            {
                date: '周二',
                new: 10,
                active: 500
            },
            {
                date: '周三',
                new: 12,
                active: 550
            },
            {
                date: '周四',
                new: 60,
                active: 800
            },
            {
                date: '周五',
                new: 65,
                active: 550
            },
            {
                date: '周六',
                new: 53,
                active: 770
            },
            {
                date: '周日',
                new: 33,
                active: 170
            },

        ],
    },
    malldata: {
        icon: ['apple', 'vivo', 'oppo', 'meizu', 'samsung', 'mi'],
        tableData: {
            id: '',
            phone: '',
            icon: '',
            newstore: '',
            store: '',
            addr: ''
        },
        tableLabel: [
            {
                prop: "id",
                label: "id"
            },
            {
                prop: "phone",
                label: "手机品牌"
            },
            {
                prop: "icon",
                label: "图标"
            },
            {
                prop: "newstore",
                label: "新入库存"
            },
            {
                prop: "store",
                label: "库存",
            },
            {
                prop: "addr",
                label: "地址",
            },
        ],
        formLabel: [
            {
                model: "id",
                label: "id",
                type: "id"
            },
            {
                model: "phone",
                label: "手机品牌",
                type: "input"
            },
            {
                model: "icon",
                label: "图标",
                type: "upload"
            },
            {
                model: "newstore",
                label: "新入库存",
                type: "input"
            },
            {
                model: "store",
                label: "库存",
                type: "input"
            },
            {
                model: "addr",
                label: "地址",
                type: "input"
            },
        ]
    }
}