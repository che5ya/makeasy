export default function hhmm2slotNo15min(t) {
    if (t == null) return -1;
    let tx = t.match(/(\d{2}):{0,1}(\d{2})/i);
    if (tx == null) return -1;

    let idx = Number.parseInt(tx[1]) * 4;
    idx += (Number.parseInt(Number.parseInt(tx[2])/15) % 4);

    return idx;
};
