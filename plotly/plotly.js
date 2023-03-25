// グラフ1
let x_base = [];
for (let i = 0; i < 24; i++) x_base.push(i);
let y_base = [];
for (let i = 0; i < 24; i++) y_base.push(Math.floor(Math.random() * 10 + 1));

// グラフデータを定義する
let trace1 = {
    x: x_base,
    y: y_base,
    type: "bar", // 棒グラフにする
    marker: {
      color: 'rgb(255,0,0)'
    },
    name: "グループ1", // 凡例に表示される名称
};

let trace2 = {
    x: x_base,
    y: y_base,
    type: "bar", // 棒グラフにする
    marker: {
      color: 'rgb(0,255,0)'
    },
    name: "グループ2", // 凡例に表示される名称
};

let trace3 = {
    x: x_base,
    y: y_base,
    type: "bar", // 棒グラフにする
    marker: {
      color: 'rgb(0,0,255)'
    },
    name: "グループ3", // 凡例に表示される名称
};

// データを配列にまとめる
let data = [trace1, trace2, trace3];

// レイアウトを定義する
let layout = {
    barmode: "stack", // 積み上げ棒グラフにする
    legend: {
        orientation: "h", // 凡例を水平にする
    },
    margin: {
        t: 60, // 凡例の高さを含めた値にする
    },
    yaxis: {
        title: "値",
        titlefont: {
            family: "IPAexGothic", // 軸ラベルに日本語フォントを指定する
        },
        tickfont: {
            family: "IPAexGothic", // カテゴリ名に日本語フォントを指定する
        },
        range: [0, 30], // 縦軸の上限値と下限値を設定する
    },
};

// グラフを描画する
Plotly.newPlot("id_plotly_1", data, layout);

// グラフ2
// let x_base = [];
// for(let i=0; i<24; i++) x_base.push(i);
let y2_base = [];
for (let i = 0; i < 24; i++) y2_base.push(Math.floor(Math.random() * 10 + 1));

// グラフデータを定義する
let trace2_1 = {
    x: x_base,
    y: y2_base,
    type: "lines", // 折れ線グラフにする
    type: "scatter",
    name: "グループ1", // 凡例に表示される名称
};

// データを配列にまとめる
let data2 = [trace2_1];

// レイアウトを定義する
let layout2 = {
    barmode: "stack", // 積み上げ棒グラフにする
    legend: {
        orientation: "h", // 凡例を水平にする
    },
    margin: {
        t: 60, // 凡例の高さを含めた値にする
    },
    yaxis: {
        title: "値",
        titlefont: {
            family: "IPAexGothic", // 軸ラベルに日本語フォントを指定する
        },
        tickfont: {
            family: "IPAexGothic", // カテゴリ名に日本語フォントを指定する
        },
        range: [0, 10], // 縦軸の上限値と下限値を設定する
    },
};

// グラフを描画する
Plotly.newPlot("id_plotly_2", data2, layout2);
