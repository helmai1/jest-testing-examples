import {luasSegitiga, luasLingkaran, volKerucut, luasLayang} from './App';

test('Test true', ()=>{
    expect(true).toBeTruthy();
    //hasil true karena exspect true dan tobetruthy (dibenarkan)
});

test('Test false', ()=>{
    expect(false).toBeTruthy();
    //hasil false karena exspect false dan tobetruthy (dibenarkan)
});

test('Luas lingkaran true', () => {
    const value = luasLingkaran(6);
    expect(value).toBe(113.39999999999999)
    //hasil true karena exspect value sesuai dengan toBe atau hasil dari rumus luas lingkaran 3.15*r*r
});

test('Luas lingkaran false', () => {
    const value = luasLingkaran(6);
    expect(value).toBe(113)
    //hasil false karena exspect value tidak sesuai dengan toBe atau hasil dari rumus luas lingkaran 3.15*r*r
});

test('Volume kerucut true', ()=>{
    const value = volKerucut(42,75);
    expect(value).toBe(138600);
    //hasil true karena exspect value sesuai dengan toBe atau hasil dari rumus volume kerucut 1/3*22/7*r*r*t
});

test('Volume kerucut false', ()=>{
    const value = volKerucut(42,75);
    expect(value).toBe(108600);
    //hasil false karena exspect value tidak sesuai dengan toBe atau hasil dari rumus volume kerucut 1/3*22/7*r*r*t
});

test('luas segitiga true', () => {
    const value = luasSegitiga(8,4);
    expect(value).toBe(16)
    //hasil true karena exspect value sesuai dengan toBe atau hasil dari rumus luas segitiga 1/2*a*t
});

test('luas segitiga false', () => {
    const value = luasSegitiga(8,4);
    expect(value).toBe(4)
    //hasil false karena exspect value tidak sesuai dengan toBe atau hasil dari rumus luas segitiga 1/2*a*t
});

test('luas layang-layang true', () => {
    const value = luasLayang(12,16);
    expect(value).toBe(96)
    //hasil true karena exspect value sesuai dengan toBe atau hasil dari rumus luas segitiga 1/2*d1*d2
});

test('luas layang-layang false', () => {
    const value = luasLayang(12,16);
    expect(value).toBe(90)
    //hasil false karena exspect value tidak sesuai dengan toBe atau hasil dari rumus luas segitiga 1/2*d1*d2
});
