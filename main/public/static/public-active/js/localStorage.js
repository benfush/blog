/**
 * Created by abcqu on 2017/8/4.
 */
//存储数据
function setlocalS(name,value) {
    localStorage.setItem(name,value);
}
//读取数据
function  getlocalS(name) {
    return localStorage.getItem(name);
}
//删除数据
function clerlocalS() {
    localStorage.clear();
}
