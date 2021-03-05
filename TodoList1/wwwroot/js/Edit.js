
    $('tr td:nth-child(1)').click(function () {
        $(this).parent().find('label').hide()
        var labelText = ($(this).text().trim())
        document.querySelectorAll('tr td:nth-child(1)')
        $(this).find('input[type="text"]').val(labelText)
        $(this).find('input[type="text"]').show().focus();
    });
    $('.tr .td:nth-child(1)').click(function () {
        $(this).parent().find('label').hide()
        var labelText = ($(this).text().trim())
        document.querySelectorAll('tr td:nth-child(1)')
        $(this).find('input[type="text"]').val(labelText)
        $(this).find('input[type="text"]').show().focus();
    });

    $('input[type=text]').focusout(function () {
        var dad = $(this).parent();
        $(this).hide();
        dad.find('label').html($(this).val());
        dad.find('label').show();

        var edit = $($(this)).parent().parent().children()[2].children[0].href;


        //console.log($(this)).previousElementSibling.text()

        console.log($(this).val())

        sessionStorage.setItem("Title", ($(this).val()));
        sessionStorage.setItem("isDone", "");

        //sessionStorage.setItem("isDone", $((this).parentElement.parentElement.children[1].children[0].checked));

        window.location.href = edit;

    });
    $('input[type=text]').keyup(function (event) {
        if (event.keyCode == 13) {
            var dad = $(this).parent();
            $(this).hide();
            dad.find('label').html($(this).val());
            dad.find('label').show();

            var edit = $($(this)).parent().parent().children()[2].children[0].href;

            sessionStorage.setItem("Title", ($(this).val()));
            sessionStorage.setItem("isDone", "");

            window.location.href = edit;
        }
    });
    $('input[type=checkbox]:checked').click(function () {
        var editLink = $($(this)).parent().parent().children()[2].children[0].href;// знаходить Edit посилання

        sessionStorage.setItem("isDone", "false");

        window.location.href = editLink;
    }
    );
    $("input:checkbox:not(:checked):not('#CreateBlock input:checkbox')").click(function () {
        var editLink = $($(this)).parent().parent().children()[2].children[0].href;
        sessionStorage.setItem("isDone", "true");
        window.location.href = editLink;
    });
