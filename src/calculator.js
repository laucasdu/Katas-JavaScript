const calculator = {
    total: 0,
    
    sum(num) {
        this.total+= num;
        },
    
    resta(num) {
        this.total-= num;
        },
    
    mult(num) {
        this.total*= num; 
        },
    
    div(num) {
        this.total/= num; 
        },
    
    };
    
        
    module.exports = calculator;