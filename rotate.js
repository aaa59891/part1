let firstInput = '2 2 3'; // first line input, include M, N, R
let matrixInput = `
1 1
1 1
` 
// matrix input

function rotate(m, n, step, matrix) {
    for (let i = 0; i < step; i++) {
        let row = 0,
            col = 0;
        while (row < m - row && col < n - col) {
            for (let i = row + 1; i < m - row; i++) {
                swap(row, col, i, col, matrix);
            }
            for (let i = col + 1; i < n - col; i++) {
                swap(row, col, m - 1 - row, i, matrix);
            }
            for (let i = m - 2 - row; i >= row; i--) {
                swap(row, col, i, n - 1 - col, matrix);
            }
            for (let i = n - 2 - col; i > col; i--) {
                swap(row, col, row, i, matrix);
            }
            row++;
            col++;
        }
    }
    printMatrix(matrix)
}

function swap(row1, col1, row2, col2, matrix) {
    const temp = matrix[row1][col1];
    matrix[row1][col1] = matrix[row2][col2];
    matrix[row2][col2] = temp;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

let firstInputArr = firstInput.split(' ').map(ele => parseInt(ele));
let matrix = matrixInput.split('\n').filter((ele) => ele ).map((ele) => ele.split(' ').map((innerEle) => parseInt(innerEle)));
firstInputArr.push(matrix);

rotate.apply(null, firstInputArr);