export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));
    let balls = 2;
    let i = 0;
    while (i < breaks.length && balls == 2) {
        if (balls == 2) {
            if (breaks[i]) {
                i -= jump;
                balls--;
            } else {
                i += jump;
            }
        } else if (balls == 1) {
            if (breaks[i]) {
                i--;
                balls--;
            } else {
                i++;
            }
        }
    }
    return i;

    /*
    const jmp = Math.floor(Math.sqrt(breaks.length));
    let i = jmp;
    for(;i<breaks.length; i+=jmp){
        if(breaks[i]){
        break;
        }
    }
        i-=jmp;
        for(let j = 0;j<=jmp && i< breaks.lenght; j++,i++){
            if(breaks[i]){
                return i;
            }
        }
            return-1;
    */


}