let str = '';
const pas = 'world';
const t1 = '77|121|32|110|117|109|98|101|114|32|43|51|56|40|48|57|57|41|45|54|55|56|45|51|52|45|50|51';
const t2 = '77|121|32|110|97|109|101|32|74|65|67|75';

document.addEventListener('keypress', event => {
    str += event.key;
    if (pas.indexOf(str) !== 0) {
        str = '';
        return;
    }
    if (str === pas) {
        document.writeln(text(t1));
        document.writeln(text(t2));   
        str = '';
    }
});

const text = str => str.split('|')
        .map(item => String.fromCharCode(item))
        .join('');

// let str2 = 'My number +38(099)-678-34-23';
// let crypted = str2.split('').map(value => value.charCodeAt(0) ).join('|');
// console.log(crypted);

