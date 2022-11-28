const convertTimeFormat = s => {
    /**
     * check AM or PM
     * if AM print it => if 12 make it 00
     * else if PM add 12 with it and print 
     * 
     */

    const extension = s.slice(s.length - 2, s.length);
    const time = s.slice(0, s.length - 2);
    let hh = time.slice(0, 2);
    let convertedTime;
    switch (extension) {
        case 'AM':
            if (parseInt(hh) === 12) {
                hh = '00';
                convertedTime = hh + time.slice(2, time.length)
            }
            else {
                convertedTime = time;
            }
            break;
        case 'PM':
            if (parseInt(hh) === 12) {
                convertedTime = time;
            }
            else {
                hh = parseInt(hh) + 12;
                convertedTime = hh + time.slice(2, time.length)
            }
            break;
    }
    console.log(convertedTime);

}


convertTimeFormat('12:05:45PM')