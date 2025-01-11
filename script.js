function generateTriangle() {
    const rowCount = document.getElementById('rowCount').value;
    document.getElementById('rowCountDisplay').textContent = rowCount;
    const triangleContainer = document.getElementById('triangle-container');
    triangleContainer.innerHTML = '';

    const triangle = generatePascalsTriangle(rowCount);

    for (let i = 0; i < triangle.length; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let j = 0; j < triangle[i].length; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.textContent = triangle[i][j];
            rowDiv.appendChild(cellDiv);
        }

        triangleContainer.appendChild(rowDiv);
    }
}

function generatePascalsTriangle(n) {
    const triangle = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(row);
    }
    return triangle;
}
generateTriangle();