document.addEventListener('DOMContentLoaded', function() {
    console.log('Document ready');

    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    

    //document.getElementById('billingrulsBtn').addEventListener('click', function() {
    //    showPage('mainPage', 'billingruls');

    //    var billingrulsBtn = document.getElementById("billingrulsBtn");
    //    billingrulsBtn.style.display = "none";
    //});

    document.getElementById('createQuoteBtn').addEventListener('click', function() {
        clearFormFields();
        saveQuoteAsDraft();
    });

    document.getElementById('backBtn').addEventListener('click', function() {
        showPage('formContainer', 'mainPage');

        //var billingrulsBtn = document.getElementById("billingrulsBtn");
        //billingrulsBtn.style.display = "block";
    });

    document.getElementById('backBtnbilling').addEventListener('click', function() {
        showPage('billingruls', 'mainPage');

        //var billingrulsBtn = document.getElementById("billingrulsBtn");
        //billingrulsBtn.style.display = "block";
    });

    document.getElementById('backBtnLaneAnalysis').addEventListener('click', function() {
        showPage('FullLaneAnalysis', 'formContainer');
    });

    document.getElementById('showlaneanalysis').addEventListener('click', function() {
        showPage('formContainer', 'FullLaneAnalysis');
    });

    loadFormData();

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
        document.getElementById('pickupInput').value = '';
        document.getElementById('dropoffInput').value = '';
        document.getElementById('datetime1').value = '';
        document.getElementById('datetime2').value = '';
        document.getElementById('buy').value = '';
        document.getElementById('sell').value = '';
        document.getElementById('DraftEmail').value = '';
        document.getElementById('distance').innerHTML = '';
        document.getElementById('buysonar').value = '';
        document.getElementById('sellsonar').value = '';
        document.getElementById('bestrate').value = '';
    }

    function saveFormData() {
        const formData = {
            customer: document.getElementById('customer').value,
            ModeName: document.getElementById('ModeName').value,
            description: document.getElementById('Description').value,
            weight: document.getElementById('Weight').value,
            pickup: document.getElementById('pickupInput').value,
            dropoff: document.getElementById('dropoffInput').value,
            datetime1: document.getElementById('datetime1').value,
            datetime2: document.getElementById('datetime2').value,
            buy: document.getElementById('buy').value,
            sell: document.getElementById('sell').value,
            DraftEmail: document.getElementById('DraftEmail').value,
            buysonar: document.getElementById('buysonar').value,
            sellsonar: document.getElementById('sellsonar').value,
            bestrate: document.getElementById('bestrate').value,
            distance: document.getElementById('distance').innerHTML
        };
        localStorage.setItem('formData', JSON.stringify(formData));
    }
    
    function loadFormData() {
        const savedFormData = localStorage.getItem('formData');
        if (savedFormData) {
            const formData = JSON.parse(savedFormData);
            document.getElementById('customer').value = formData.customer;
            document.getElementById('ModeName').value = formData.ModeName;
            document.getElementById('Description').value = formData.description;
            document.getElementById('Weight').value = formData.weight;
            document.getElementById('pickupInput').value = formData.pickup;
            document.getElementById('dropoffInput').value = formData.dropoff;
            document.getElementById('datetime1').value = formData.datetime1;
            document.getElementById('datetime2').value = formData.datetime2;
            document.getElementById('buy').value = formData.buy;
            document.getElementById('sell').value = formData.sell;
            document.getElementById('DraftEmail').value = formData.DraftEmail;
            document.getElementById('distance').innerHTML = formData.distance;
            document.getElementById('buysonar').value = formData.buysonar;
            document.getElementById('sellsonar').value = formData.sellsonar;
            document.getElementById('bestrate').value = formData.bestrate;
        }
    }    

    function saveQuoteAsDraft() {
        saveFormData();
        
        const customer = document.getElementById('customer').value;
        const ModeName = document.getElementById('ModeName').value;
        const description = document.getElementById('Description').value;
        const weight = document.getElementById('Weight').value;
        const pickup = document.getElementById('pickupInput').value;
        const dropoff = document.getElementById('dropoffInput').value;
        const buyrate = document.getElementById('buy').value;
        const sellrate = document.getElementById('sell').value;
        const distance = document.getElementById('distance').textContent;
        const datetime1 = document.getElementById('datetime1').value;
        const buysonar = document.getElementById('buysonar').value;
        const sellsonar = document.getElementById('sellsonar').value;
        const bestrate = document.getElementById('bestrate').value;
        
        const isMissingInfo = !customer || !ModeName || !pickup || !dropoff;
        const icon = isMissingInfo ? 'Information Missing' : '';
    
        // Create the draftResponse specific to this quote
        const draftResponse = `Hello,\n\nWe have a truck in ${pickup} picking up on for $${buyrate}.\n\nRate: $${buyrate}\nOrigin: ${pickup}\nDestination: ${dropoff}\nMode: ${ModeName}\n\nPlease confirm to get this booked.`;
    
        const draftCard = `
            <div class="card" id="card-${new Date().getTime()}" data-bestrate="${bestrate}" data-distance="${distance}" data-datetime1="${datetime1}" data-draft-response="${encodeURIComponent(draftResponse)}" data-buysonar="${buysonar}" data-sellsonar="${sellsonar}">
                <input type="checkbox" class="select-card" style="display: none; accent-color: #45a049;" checked>
                <div class="card-title" style="font-family: 'Open Sans'; font-size: 14px;">${customer}</div>
                <div class="card-details" style="font-family: 'Open Sans'; font-size: 14px;">${pickup} ➔ ${dropoff}</div>
                <div class="card-details" style="font-family: 'Open Sans'; font-size: 12px;">${ModeName} • ${description} • ${weight} lbs</div>
                <div class="card-details" style="font-family: 'Open Sans'; font-size: 12px;">Buy Rate: $${buyrate} • Sell Rate: $${sellrate}</div>
                <div class="card-footer">
                    <span class="status-icon" style="color: ${isMissingInfo ? 'red' : 'green'}; font-size: 14px; font-family: 'Open Sans'; margin-left: 130px; font-weight: bold;">${icon}</span>
                </div>
            </div>
        `;
        
        document.getElementById('cardsContainer').insertAdjacentHTML('beforeend', draftCard);
        
        const cardsContainer = document.getElementById("cardsContainer");
        const numberOfCards = cardsContainer.getElementsByClassName('card').length;
        const batchreply = document.getElementById("batchreply");
        
        if (numberOfCards >= 2) {
            batchreply.style.display = "block";
            const selectCards = document.querySelectorAll('.select-card');
            selectCards.forEach(function(card) {
                card.style.display = 'inline-block';
            });
        }
        
        if (isMissingInfo) {
            batchreply.disabled = true;
        } else {
            checkAllCardsComplete();
        }
        
        const newCard = document.querySelector('.card:last-child');
        
        newCard.querySelector('.select-card').addEventListener('click', function(event) {
            event.stopPropagation();
            updateDraftResponse();
        });
        
        newCard.addEventListener('click', function() {
            viewSavedQuote(this);
        });
        
        const cardInputs = newCard.querySelectorAll('.card-title, .card-details');
        cardInputs.forEach(function(input) {
            input.addEventListener('input', function() {
                checkCardComplete(newCard);
                checkAllCardsComplete();
            });
        });
        
        updateDraftResponse();  // Update the draft response with the new card included by default
    }
    
    document.getElementById('saveBtn').addEventListener('click', function() {
        const cardId = document.getElementById('saveBtn').dataset.currentCard;
        const card = document.getElementById(cardId);
    
        if (card) {
            const customer = document.getElementById('customer').value;
            const ModeName = document.getElementById('ModeName').value;
            const description = document.getElementById('Description').value;
            const weight = document.getElementById('Weight').value;
            const pickup = document.getElementById('pickupInput').value;
            const dropoff = document.getElementById('dropoffInput').value;
            const buyrate = document.getElementById('buy').value;
            const sellrate = document.getElementById('sell').value;
            const distance = document.getElementById('distance').textContent;
            const datetime1 = document.getElementById('datetime1').value;
            const buysonar = document.getElementById('buysonar').value;
            const sellsonar = document.getElementById('sellsonar').value;
            const bestrate = document.getElementById('bestrate').value;
            
            // Update the draftResponse specific to this quote
            const draftResponse = `Hello,\n\nWe have a truck in ${pickup} picking up on for $${buyrate}.\n\nRate: $${buyrate}\nOrigin: ${pickup}\nDestination: ${dropoff}\nMode: ${ModeName}\n\nPlease confirm to get this booked.`;
    
            card.querySelector('.card-title').textContent = customer;
            card.querySelectorAll('.card-details')[0].textContent = `${pickup} ➔ ${dropoff}`;
            card.querySelectorAll('.card-details')[1].textContent = `${ModeName} • ${description} • ${weight} lbs`;
            card.querySelectorAll('.card-details')[2].textContent = `Buy Rate: $${buyrate} • Sell Rate: $${sellrate}`;
            card.dataset.distance = distance;  // Update distance data attribute
            card.dataset.datetime1 = datetime1;  // Update datetime1 data attribute
            card.dataset.draftResponse = encodeURIComponent(draftResponse);  // Update draft response data attribute
            card.dataset.buysonar = buysonar
            card.dataset.sellsonar = sellsonar;
            card.dataset.bestrate = bestrate;
    
            showPage('formContainer', 'mainPage');
    
            //var billingrulsBtn = document.getElementById("billingrulsBtn");
            //billingrulsBtn.style.display = "block";
    
            checkAllCardsComplete();
        }
    });    

    function updateDraftResponse() {
        const quotes = [];
        const cards = document.querySelectorAll('.card');
        cards.forEach(function(card, index) {
            if (card.querySelector('.select-card').checked) {
                const customer = card.querySelector('.card-title').textContent;
                const details = card.querySelectorAll('.card-details')[0].textContent;
                const [pickup, dropoff] = details.split(' ➔ ');
                const ModeName = card.querySelectorAll('.card-details')[1].textContent.split(' • ')[0];
                const buyrate = card.querySelectorAll('.card-details')[2].textContent.split('Buy Rate: ')[1].split(' • ')[0];
                const datetime1 = card.dataset.datetime1;
                const formattedDate = new Date(datetime1).toLocaleDateString();
                quotes.push(`${index + 1}) ${formattedDate} • ${ModeName} from ${pickup} to ${dropoff}: $${buyrate}`);
            }
        });
    
        document.getElementById('DraftEmail2').value = `Hello,\n\nPlease see the quotes below for each of your upcoming shipments:\n\n${quotes.join('\n\n')}\n\nPlease confirm to get this booked.`;
    }    

    function checkAllCardsComplete() {
        const cards = document.querySelectorAll('.card');
        let allComplete = true;

        cards.forEach(card => {
            const customer = card.querySelector('.card-title').innerText.trim();
            const details = card.querySelectorAll('.card-details');
            const ModeName = details[1].innerText.split(' • ')[0].trim();
            const description = details[1].innerText.split(' • ')[1].trim();
            const weight = details[1].innerText.split(' • ')[2].replace(' lbs', '').trim();
            const pickup = details[0].innerText.split(' ➔ ')[0].trim();
            const dropoff = details[0].innerText.split(' ➔ ')[1].trim();

            const isComplete = customer && ModeName && pickup && dropoff;
            const iconElement = card.querySelector('.status-icon');

            if (isComplete) {
                iconElement.innerHTML = '';
                iconElement.style.color = '';
            } else {
                allComplete = false;
                iconElement.innerHTML = 'Information Missing';
                iconElement.style.color = 'red';
            }
        });

        document.getElementById("batchreply").disabled = !allComplete;
    }

    function checkCardComplete(card) {
        const customer = card.querySelector('.card-title').textContent.trim();
        const details = card.querySelectorAll('.card-details');
        const ModeName = details[1].textContent.split(' • ')[0].trim();
        const description = details[1].textContent.split(' • ')[1].trim();
        const weight = details[1].textContent.split(' • ')[2].replace(' lbs', '').trim();
        const pickup = details[0].textContent.split(' ➔ ')[0].trim();
        const dropoff = details[0].textContent.split(' ➔ ')[1].trim();

        const isComplete = customer && ModeName && pickup && dropoff;
        const iconElement = card.querySelector('.status-icon');

        if (isComplete) {
            iconElement.innerHTML = '';
            iconElement.style.color = '';
        } else {
            iconElement.innerHTML = 'Information Missing';
            iconElement.style.color = 'red';
        }
    }

    document.getElementById('batchreply').addEventListener('click', function() {
        const draftresponse2 = document.getElementById("draftresponse2");
        const batchreply = document.getElementById("batchreply");
        const cancelbatchreply = document.getElementById("cancelbatchreply");

        draftresponse2.style.display = "block";
        batchreply.style.display = "none";
        cancelbatchreply.style.display = "block";

        updateDraftResponse();
    });

    document.getElementById('cancelbatchreply').addEventListener('click', function() {
        const draftresponse2 = document.getElementById("draftresponse2");
        const batchreply = document.getElementById("batchreply");
        const cancelbatchreply = document.getElementById("cancelbatchreply");

        draftresponse2.style.display = "none";
        batchreply.style.display = "block";
        cancelbatchreply.style.display = "none";
    });

    function viewSavedQuote(card) {
        const customer = card.querySelector('.card-title').textContent;
        const details = card.querySelectorAll('.card-details');
        const ModeName = details[1].textContent.split(' • ')[0];
        const description = details[1].textContent.split(' • ')[1];
        const weight = details[1].textContent.split(' • ')[2].replace(' lbs', '');
        const pickup = details[0].textContent.split(' ➔ ')[0];
        const dropoff = details[0].textContent.split(' ➔ ')[1];
        const buyrate = details[2].textContent.split('Buy Rate: ')[1].split(' • ')[0];
        const sellrate = details[2].textContent.split('Sell Rate: ')[1];
        const distance = card.dataset.distance;  // Retrieve distance from data attribute
        const draftResponse = decodeURIComponent(card.dataset.draftResponse);  // Retrieve and decode the draft response
        const buysonar = card.dataset.buysonar;
        const sellsonar = card.dataset.sellsonar;
        const bestrate = card.dataset.bestrate;
        
        document.getElementById('customer').value = customer;
        document.getElementById('ModeName').value = ModeName;
        document.getElementById('Description').value = description;
        document.getElementById('Weight').value = weight;
        document.getElementById('pickupInput').value = pickup;
        document.getElementById('dropoffInput').value = dropoff;
        document.getElementById('buy').value = buyrate;
        document.getElementById('sell').value = sellrate;
        document.getElementById('buysonar').value = buysonar;
        document.getElementById('sellsonar').value = sellsonar;
        document.getElementById('distance').innerHTML = distance;
        document.getElementById('DraftEmail').value = draftResponse;  // Set the draft response in the appropriate field
        document.getElementById('bestrate').value = bestrate;
        
        showPage('mainPage', 'formContainer');
        
        //var billingrulsBtn = document.getElementById("billingrulsBtn");
        //billingrulsBtn.style.display = "none";
        
        var disclaimer = document.getElementById("InfoNeeded");
        var RateNotAvail = document.getElementById("RateNotAvail");
        var rateinfo = document.getElementById("RateInformation");
        var custform2 = document.getElementById("customerform2");
        
        if (customer == '' || pickup == '' || dropoff == '') {
            disclaimer.style.display = "block";
            rateinfo.style.display = "none";
            custform2.style.display = "none";
            RateNotAvail.style.display = "block";
        } else {
            disclaimer.style.display = "none";
            rateinfo.style.display = "block";
            custform2.style.display = "block";
            RateNotAvail.style.display = "none";
        }
        
        // Save the current card being edited
        document.getElementById('saveBtn').dataset.currentCard = card.id;
    }      

    function formatDateTime2(dateTimeStr) {
        const date = new Date(dateTimeStr);
        const pad = (num) => (num < 10 ? '0' : '') + num;
        return `${pad(date.getMonth() + 1)}-${pad(date.getDate())}-${date.getFullYear()}`;
    }

    document.getElementById('saveBtn').addEventListener('click', function() {
        const cardId = document.getElementById('saveBtn').dataset.currentCard;
        const card = document.getElementById(cardId);
    
        if (card) {
            const customer = document.getElementById('customer').value;
            const ModeName = document.getElementById('ModeName').value;
            const description = document.getElementById('Description').value;
            const weight = document.getElementById('Weight').value;
            const pickup = document.getElementById('pickupInput').value;
            const dropoff = document.getElementById('dropoffInput').value;
            const buyrate = document.getElementById('buy').value;
            const sellrate = document.getElementById('sell').value;
            const buysonar = document.getElementById('buysonar').value;
            const sellsonar = document.getElementById('sellsonar').value;
            const bestrate = document.getElementById('bestrate').value;
            const distance = document.getElementById('distance').textContent;
            const pickupDateTime = formatDateTime2(document.getElementById('datetime1').value);
            
            // Update the draftResponse specific to this quote
            const draftResponse = `Hello,\n\nWe have a truck in ${pickup} picking up on ${pickupDateTime} for $${buyrate}.\n\nRate: $${buyrate}\nOrigin: ${pickup}\nDestination: ${dropoff}\nMode: ${ModeName}\n\nPlease confirm to get this booked.`;
    
            card.querySelector('.card-title').textContent = customer;
            card.querySelectorAll('.card-details')[0].textContent = `${pickup} ➔ ${dropoff}`;
            card.querySelectorAll('.card-details')[1].textContent = `${ModeName} • ${description} • ${weight} lbs`;
            card.querySelectorAll('.card-details')[2].textContent = `Buy Rate: ${buyrate} • Sell Rate: ${sellrate}`;
            card.dataset.distance = distance;  // Update distance data attribute
            card.dataset.draftResponse = encodeURIComponent(draftResponse);  // Update draft response data attribute
            card.dataset.buysonar = buysonar;
            card.dataset.sellsonar = sellsonar;
            card.dataset.bestrate = bestrate;
    
            showPage('formContainer', 'mainPage');
    
            //var billingrulsBtn = document.getElementById("billingrulsBtn");
            //billingrulsBtn.style.display = "block";
    
            checkAllCardsComplete();
        }
    });    

    //document.getElementById('saveBtnbilling').addEventListener('click', function() {
    //    showPage('billingruls', 'mainPage');
    //    var billingrulsBtn = document.getElementById("billingrulsBtn");
    //    billingrulsBtn.style.display = "block";
    //    checkAllCardsComplete();
    //});

    document.getElementById('ViewInGS').addEventListener('click', function () {
        const pickupInput = document.getElementById('pickupInput').value.split(', ');
        const dropoffInput = document.getElementById('dropoffInput').value.split(', ');
        let pickupcity = pickupInput[0];
        let pickupstate = pickupInput[1];
        let dropoffcity = dropoffInput[0];
        let dropoffstate = dropoffInput[1];

        openLinkInNewTab('https://app.greenscreens.ai/rates?destinationCityState=' + dropoffstate + '%20' + dropoffcity + '&originCityState=' + pickupcity + '%20' + pickupstate + '&pickupDate=2024-06-04T08%3A00%3A00.000-04%3A00&transportType=' + document.getElementById('ModeName').value + '&weight=' + document.getElementById('Weight').value + '');
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
        createDraftEmail();
    });

    function createDraftEmail() {
        const emailContent = document.getElementById('DraftEmail').value;
        const subject = "Rate Quote";

        // Create mailto link
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;

        // Open mailto link
        window.location.href = mailtoLink;
    }

    document.getElementById('createDraftBtn2').addEventListener('click', function() {
        createDraftEmail2();
    });

    function createDraftEmail2() {
        const emailContent = document.getElementById('DraftEmail2').value;
        const subject = "Rate Quote";

        // Create mailto link
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;

        // Open mailto link
        window.location.href = mailtoLink;
    }
});
