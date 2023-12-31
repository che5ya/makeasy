export default function isNormalInteger(str) {
    const n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
};
