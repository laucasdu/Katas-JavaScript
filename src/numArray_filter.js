const numArray_filter = (listaNum, num)=> {

    let filterArray = listaNum.filter(item => item % num == 0)
        return filterArray
}
 

module.exports = numArray_filter;
