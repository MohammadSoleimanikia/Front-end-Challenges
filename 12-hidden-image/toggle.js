function toggle_btn_img() {
    const btn = document.getElementById('btn');
    const avatar = document.getElementById('avatar');

    const btnText = btn.innerText;

    if (btnText === "Hide!") {
        avatar.classList.add('w3-hide');
        btn.innerText = "Show!";

    }else if (btnText === "Show!") {
        avatar.classList.remove('w3-hide');
        btn.innerText = "Hide!"

    }

}