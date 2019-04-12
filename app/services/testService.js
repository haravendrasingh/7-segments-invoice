const multer = require('multer');
const fs = require('fs');

exports.upload = multer({
    dest: 'uploads/'
}).any();

const map = (n) => {
    switch (n) {
        case 63:
            return 0;
        case 6:
            return 1;
        case 91:
            return 2;
        case 79:
            return 3;
        case 102:
            return 4;
        case 109:
            return 5;
        case 125:
            return 6;
        case 7:
            return 7;
        case 127:
            return 8;
        case 111:
            return 9;
        default:
            return '?';
    }
};

exports.getNumbers = (req) => {
    return new Promise((resolve, reject) => {
        fs.readFile(req.files[0].path, 'ascii', function (err, data) {
            if (!err) {
                const lines = data.split('\n');
                var retVal = "";
                for (var line = 0; line < lines.length; line = line + 2) {
                    var arr = [
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ];
                    var k = 0;
                    if (lines[line] == null || lines[line] == undefined)
                        continue;
                    var a = lines[line].split('');
                    for (var i = 1; i < a.length; i++) {
                        if (a[i] == '_') {
                            arr[k][0] = true;
                        }
                        i++;
                        i++;
                        k++;
                    }
                    if (line < lines.length) {
                        line++;
                        if (lines[line] == null || lines[line] == undefined)
                            continue;
                        a = lines[line].split('');
                        k = 0;
                        for (var i = 0; i < a.length; i++) {
                            if (a[i] == '|') {
                                arr[k][5] = true;
                            }
                            i++;
                            if (a[i] == '_') {
                                arr[k][6] = true;
                            }
                            i++;
                            if (a[i] == '|') {
                                arr[k][1] = true;
                            }
                            k++;
                        }
                    }
                    if (line < lines.length) {
                        line++;
                        if (lines[line] == null || lines[line] == undefined)
                            continue;
                        a = lines[line].split('');
                        k = 0;
                        for (var i = 0; i < a.length; i++) {
                            if (a[i] == '|') {
                                arr[k][4] = true;
                            }
                            i++;
                            if (a[i] == '_') {
                                arr[k][3] = true;
                            }
                            i++;
                            if (a[i] == '|') {
                                arr[k][2] = true;
                            }
                            k++;
                        }
                    }
                    for (var t = 0; t < arr.length; t++) {
                        var result = 0;
                        for (var u = 0; u < arr[t].length; u++) {
                            if (arr[t][u])
                                result += Math.pow(2, u);
                        }
                        var res = map(result) + "";

                        retVal += res;
                        parsedNumbers.push(retVal);
                    }
                    retVal += '\n';
                }
                resolve(retVal);
            } else {
                reject(err);
            }
        })
    });
};


