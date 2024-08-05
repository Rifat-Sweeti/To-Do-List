var inp = document.getElementById('inp')
var lists = document.getElementById('lists')

function addTodo() {
    if (inp.value.trim() !== "") {
        var li = document.createElement('li');
        li.innerHTML = `<input type="text" value="${inp.value}" disabled>
                        <div class="icons">
                            <i class="fas fa-edit" onclick="updt(event)"></i>
                            <i class="fas fa-trash" onclick="delt(event)"></i>
                        </div>`;
        lists.appendChild(li);
        inp.value = "";
    }
}

function clickTodo(event) {
    if (event.keyCode === 13) {
        addTodo();
    }
}

function delt(event) {
    event.target.closest('li').remove();
}

function updt(event) {
    var input = event.target.closest('li').querySelector('input[type="text"]');
    input.disabled = false;
    input.focus();
    input.onblur = function () {
        input.disabled = true;
    };
}