export function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
export function detectFirstCircleCollision(self, others) {
    for (const key in others) {
        const item = others[key];
        if (!item.size || !item.position?.left || !item.position?.top || self === item) continue;
        const selfRadius = self.size / 2;
        const itemRadius = item.size / 2;
        const distance = calculateDistance(
            {left: self.position.left + selfRadius, top: self.position.top + selfRadius},
            {left: item.position.left + itemRadius, top: item.position.top + itemRadius},
        );
        if (distance <= selfRadius + itemRadius) {
            return true;
        }
    }
    return false;
}
export function calculateDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.left - p1.left, 2) + Math.pow(p2.top - p1.top, 2));
}