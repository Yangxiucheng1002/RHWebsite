window.onload = function () {
    getTeacherMessage();

    function getTeacherMessage() {
        const teacher_1 = document.getElementById('teacher_1');
        const teacher_2 = document.getElementById('teacher_2');
        const first_img = document.getElementsByClassName('first-img')[0];
        const last_img = document.getElementsByClassName('last-img')[0];
        first_img.onmousemove = function (ev) {
            if (ev) {
                teacher_2.style.display = 'none';
                teacher_1.style.display = 'block';
            }
        };

        last_img.onmousemove = function (ev) {
            if (ev) {
                teacher_2.style.display = 'block';
                teacher_1.style.display = 'none';
            }
        }

    }
};