// Function to generate OTP
function generateOTP1() {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}





//  2.This example generates 6 digit Numeric OTP

// Function to generate OTP
function generateOTP2() {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}



//  3.This example generates alphanumeric OTP of length 6

// Function to generate OTP
function generateOTP3() {
          
    // Declare a string variable 
    // which stores all string
    var string = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let OTP = '';
      
    // Find the length of string
    var len = string.length;
    for (let i = 0; i < 6; i++ ) {
        OTP += string[Math.floor(Math.random() * len)];
    }
    return OTP;
}
