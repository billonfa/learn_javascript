








var message = 'learn scopes 11';

function logger() {
    console.log(message);
    var name = 'bill';
    function logger2() {
        console.log(name);
    }
    logger2();
}
// logger();

