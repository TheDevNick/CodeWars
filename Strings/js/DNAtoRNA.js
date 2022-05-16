/* 
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

P: the function takes in the dna parameter
R: the function returns the rna sequence given the dna sequence
E:  DNAtoRNA("GCAT") => GCAU,
    DNAtoRNA("GCAU") => GCAU
P: - turn the sequence into  a array, 
    - go through each element in the array and replace any occurence of T with U
    -join the elements and return them
*/

function DNAtoRNA(dna) {
    let splitStr =  dna.split('')
    let mapStr = splitStr.map(letter => letter.replace('T', 'U'))
    return mapStr.join('')
}

console.log( DNAtoRNA("GCAT"))
console.log( DNAtoRNA("TTTT"))