const base = {
    get() {
        return {
            url : "http://localhost:8080/wangluoyouxijiaoyi/",
            name: "wangluoyouxijiaoyi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangluoyouxijiaoyi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网络游戏交易平台"
        } 
    }
}
export default base
