//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
    ["0005", "Marcel Maruli", "Jakarta", "4/10/1995", "Bermain Komputer"]
]

function dataHandling(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++){
            switch (j) {
            case 0:
                console.log (`Nomor ID: ${arr[i][j]}`)
                break;
            case 1:
                console.log (`Nama Lengkap: ${arr[i][j]}`)
            break
            case 2 && 3:
                console.log (`TTL: ${arr[i][j]}`)
            break
            case 4:
                console.log (`Hobi: ${arr[i][j]}`+`\n`)
            default:
            break;
        }
    }
}
return i = ""
}

console.log(dataHandling(input));

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun