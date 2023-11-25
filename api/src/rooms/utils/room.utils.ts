export function genRoomCode() {
    let result = '';
    const chars = "abcdefghijklmnoqrstuvwxyz1234567890";
    for (let i = 9; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
        if(i % 3 == 1 && i != 1){
            result += "-";
        }
    };
    return result;
}