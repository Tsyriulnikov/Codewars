function aspectRatio(x,y){
    let res=[];
    res[1]= y;
    res[0]= Math.ceil(y*1.777777);
    return res;
    }


    или

    function aspectRatio(x,y){
        return [Math.ceil(y*16/9), y];
            }


            const aspectRatio = (x, y) => [Math.ceil(16 * y / 9), y];
        
    