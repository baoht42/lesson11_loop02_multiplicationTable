let sou;
sou = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
for (let i = 0; i < 11; i++) {
    sou = sou + "<tr>";
    for (let j = 0; j<11; j++){
        sou = sou + "<td>" + j + "*" + i + "=" + i * j + "</td>";
    }
    sou = sou + "</tr>";
}
sou = sou + "</table>";
document.write(sou);