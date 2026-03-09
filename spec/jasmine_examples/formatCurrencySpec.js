function formatCurrency (priceCents) {
 return (Math.round(priceCents) / 100).toFixed(2);
}

describe('test suite: formatCurrency', () => {
    
    it('converts cents to dollars', () => {
        expect(formatCurrency(1090)).toEqual('10.90');
    });
    
    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds down correctly', ()=> {
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });
})


