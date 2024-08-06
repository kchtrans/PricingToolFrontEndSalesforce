document.addEventListener('DOMContentLoaded', function() {
    console.log('Document ready');

    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelectorAll('.tab-btn2').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn2').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.getElementById('createQuoteBtn').addEventListener('click', function() {
        clearFormFields();
        showPage('mainPage', 'formContainer');
    });

    document.getElementById('backBtnLaneAnalysis').addEventListener('click', function() {
        showPage('FullLaneAnalysis', 'formContainer');
    });

    document.getElementById('showlaneanalysis').addEventListener('click', function() {
        showPage('formContainer', 'FullLaneAnalysis');
    });

    function showPage(hidePageId, showPageId) {
        const hidePage = document.getElementById(hidePageId);
        const showPage = document.getElementById(showPageId);

        hidePage.classList.remove('active');
        hidePage.classList.add('inactive');

        setTimeout(function() {
            hidePage.style.display = 'none';
            showPage.style.display = 'block';

            setTimeout(function() {
                showPage.classList.add('active');
                showPage.classList.remove('inactive');
            }, 10);
        }, 500);
    }

    function clearFormFields() {
        document.getElementById('customer').value = '';
        document.getElementById('ModeName').value = 'VAN';
        document.getElementById('Description').value = '';
        document.getElementById('Weight').value = '';
        document.getElementById('pickupCity').value = '';
        document.getElementById('pickupState').value = '';
        document.getElementById('pickupZip').value = '';
        document.getElementById('dropoffCity').value = '';
        document.getElementById('dropoffState').value = '';
        document.getElementById('dropoffZip').value = '';
        document.getElementById('datetime1').value = '';
        document.getElementById('datetime2').value = '';
        document.getElementById('buy').value = '';
        document.getElementById('sell').value = '';
        document.getElementById('DraftEmail').value = '';
        document.getElementById('distance').innerHTML = '';
        document.getElementById('buysonar').value = '';
        document.getElementById('sellsonar').value = '';
        document.getElementById('bestrate').value = '';

        hideSections();
    }
    
    // Add event listeners to required fields
    const requiredFields = [
        'customer', 'ModeName', 'pickupCity', 'pickupState', 'pickupZip', 'dropoffCity', 
        'dropoffState', 'dropoffZip', 'datetime1'
    ];

    requiredFields.forEach(function(fieldId) {
        document.getElementById(fieldId).addEventListener('input', validateForm);
    });

    function validateForm() {
        let allFieldsFilled = true;

        requiredFields.forEach(function(fieldId) {
            const field = document.getElementById(fieldId);
            if (!field.value) {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            showSections();
        } else {
            hideSections();
        }
    }

    function showSections() {
        var RateNotAvail = document.getElementById("RateNotAvail");
        var rateinfo = document.getElementById("RateInformation");
        var custform2 = document.getElementById("customerform2");
        var validationPopup = document.getElementById("validationPopup");

        validationPopup.style.display = "none";
        disclaimer.style.display = "none";
        rateinfo.style.display = "block";
        custform2.style.display = "block";
        RateNotAvail.style.display = "none";
    }

    function hideSections() {
        var RateNotAvail = document.getElementById("RateNotAvail");
        var rateinfo = document.getElementById("RateInformation");
        var custform2 = document.getElementById("customerform2");
        var validationPopup = document.getElementById("validationPopup");

        validationPopup.style.display = "block";
        disclaimer.style.display = "block";
        rateinfo.style.display = "none";
        custform2.style.display = "none";
        RateNotAvail.style.display = "block";
    }

    function formatDateTime2(dateTimeStr) {
        const date = new Date(dateTimeStr);
        const pad = (num) => (num < 10 ? '0' : '') + num;
        return `${pad(date.getMonth() + 1)}-${pad(date.getDate())}-${date.getFullYear()}`;
    }

    function formatDateTime(dateTimeStr) {
        const date = new Date(dateTimeStr);
        const pad = (num) => (num < 10 ? '0' : '') + num;
        const offset = -date.getTimezoneOffset();
        const offsetSign = offset >= 0 ? '+' : '-';
        const offsetHours = pad(Math.floor(Math.abs(offset) / 60));
        const offsetMinutes = pad(Math.abs(offset) % 60);
        
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.000${offsetSign}${offsetHours}:${offsetMinutes}`;
    }

    document.getElementById('ViewInGS').addEventListener('click', function () {
        let pickupcity = document.getElementById('pickupCity').value;
        let pickupstate = document.getElementById('pickupState').value;
        let dropoffcity = document.getElementById('dropoffCity').value;
        let dropoffstate = document.getElementById('dropoffState').value;

        openLinkInNewTab('https://app.greenscreens.ai/rates?destinationCityState=' + dropoffstate + '%20' + dropoffcity + '&originCityState=' + pickupcity + '%20' + pickupstate + '&pickupDate=' + formatDateTime(document.getElementById('datetime1').value) + '&transportType=' + document.getElementById('ModeName').value + '&weight=' + document.getElementById('Weight').value + '');
    });

    function openLinkInNewTab(url) {
        var win = window.open(url, '_blank');
        if (win) {
            win.focus();
        } else {
            console.error('Unable to open link in a new tab.');
        }
    }

    document.getElementById('createDraftBtn').addEventListener('click', function() {
        var Text = document.getElementById("DraftEmail");

        /* Select the text inside text area. */
        Text.select();

        /* Copy selected text into clipboard */
        navigator.clipboard.writeText(Text.value);

        document.execCommand("copy");

        Text.select().remove;
    });
});
