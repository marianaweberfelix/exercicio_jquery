$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        var task = $('#task-input').val();

        if (task.trim() !== '') {
            $('#task-list').append('<li>' + task + '</li>');
            $('#task-input').val('');
        }
    })

    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('completed');
    })


})