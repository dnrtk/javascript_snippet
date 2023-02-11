// 過去の月のみ選択可能にする
const now = new Date();
document.getElementById('id_calender_input').max = date2monthStr(now);

// 初期表示は今月
document.getElementById('id_calender_input').value = date2monthStr(now);
document.getElementById('id_calender_label').innerHTML = date2monthLabel(now);

// nextボタンの有効無効設定
tryNextButtonEnable();

function date2monthLabel(month) {
    console.log("date2monthLabel");
    const month_str_list = month.toDateString().split(' ');
    const month_str = `${month_str_list[1]}. ${month_str_list[3]}`;
    return month_str;
}

function date2monthStr(date) {
    console.log("date2monthStr");
    const month = `0${date.getMonth()+1}`.slice(-2);
    const month_str = `${date.getFullYear()}-${month}`;
    return month_str;
}

function tryNextButtonEnable() {
    const max_month = new Date(document.getElementById('id_calender_input').max);
    const current_month = new Date(document.getElementById('id_calender_input').value);
    if (max_month.getTime() <=  current_month.getTime()) {
        document.getElementById('id_calender_next').disabled = "disabled";
    } else {
        document.getElementById('id_calender_next').disabled = null;
    }
}

// 年月の表示ラベルをクリックするとpickerを表示する
document.getElementById('id_calender_label').addEventListener('click', (event) => {
    let calender_input = document.getElementById('id_calender_input');
    calender_input.showPicker();
});

// 選択された日付で表示ラベルを更新する
document.getElementById('id_calender_input').addEventListener('change', (event) => {
    console.log("id_calender_input change");
    console.log(event.target.value);
    let month = new Date(event.target.value);
    document.getElementById('id_calender_label').innerHTML = date2monthLabel(month);
    // nextボタンの有効無効設定
    tryNextButtonEnable();
});

// 先月に切り替える
document.getElementById('id_calender_prev').addEventListener('click', (event) => {
    console.log("id_calender_prev click");
    let elem_input = document.getElementById('id_calender_input');
    console.log(elem_input.value);
    let target_month = new Date(elem_input.value);
    target_month.setDate(0);    // 0日指定で前月最終日になる
    document.getElementById('id_calender_input').value = date2monthStr(target_month);
    document.getElementById('id_calender_label').innerHTML = date2monthLabel(target_month);
    // nextボタンの有効無効設定
    tryNextButtonEnable();
});

// 翌月に切り替える
document.getElementById('id_calender_next').addEventListener('click', (event) => {
    console.log("id_calender_next click");
    let elem_input = document.getElementById('id_calender_input');
    console.log(elem_input.value);
    let target_month = new Date(elem_input.value);
    target_month.setDate(32);   // 32日指定で翌月になる
    document.getElementById('id_calender_input').value = date2monthStr(target_month);
    document.getElementById('id_calender_label').innerHTML = date2monthLabel(target_month);
    // nextボタンの有効無効設定
    tryNextButtonEnable();
});
