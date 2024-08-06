body {
    background-color: #424242;
}

.form-container {
    width: 100%;
    margin: 20px auto;
    background-color: #424242;
    color: white;
}

.form-input {
    width: calc(100% - 20px);
    margin-bottom: 10px;
    padding: 5px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    border-radius: 5px;
}

.required::after {
    content: "*";
    color: rgba(255, 0, 0, 0.904);
}

.form-submit {
    background-color: #ff8f1c;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
}

.form-submit:hover {
    background-color: #45a049;
    border-radius: 5px;
}

label {
    font-weight: bold;
    font-family: 'Open Sans';
    margin: 0 0.5%;
}

.add-stop-btn {
    background-color: #ff8f1c;
    color: white;
    padding: 5px 15px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
}

.add-stop-btn:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.remove-stop-btn {
    background-color: #ff8f1c;
    color: white;
    padding: 5px 15px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
}

.remove-stop-btn:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.RateInformation {
    background-color: #424242;
    color: white;
    gap: 5px; /* Add space between form fields */
    flex-direction: row;
}

.ratebuttons {
    margin: 0 0.5%;
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #424242;
}

::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

.modal {
    display: none;
    position: fixed; 
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    font-family: 'Open Sans';
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #424242;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px; 
    font-family: 'Open Sans';
    color: white;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.createQuoteBtn {
    background-color: #ff8f1c;
    color: white;
    padding: 20px 20px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
    width: 100%;
    height: 90px;
}

.createQuoteBtn:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.buildOrderBtn {
    background-color: #ff8f1c;
    color: white;
    padding: 20px 20px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
    width: 49%;
    height: 90px;
}

.buildOrderBtn:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.backBtn {
    background-color: #ff8f1c;
    color: white;
    padding: 5px 15px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
    margin-left: 45%;
}

.backBtn:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.backBtnLaneAnalysis {
    background-color: #ff8f1c;
    color: white;
    padding: 5px 15px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
}

.backBtnLaneAnalysis:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.card {
    background-color: white;
    font-family: 'Open Sans';
    border-radius: 5px;
    cursor: pointer;
    color: black;
    margin: 10px 0; /* Add vertical space between cards */
    padding: 10px; /* Adjust padding for better layout */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 277px;
}

.card:hover {
    background-color: #f1f1f1;
}

.card-container {
    width: 300px;
    margin: 20px auto;
    background-color: #424242;
    color: white;
    border-radius: 5px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.card-title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
    font-family: 'Open Sans';
}

.card-details {
    font-size: 14px;
    margin-bottom: 5px;
    font-family: 'Open Sans';
}

.card-footer {
    font-size: 12px;
    color: #888;
    font-family: 'Open Sans';
}

.new-label {
    display: inline-block;
    background-color: #0078d4;
    color: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 12px;
    font-family: 'Open Sans';
}

.NetworkRatePrediction {
    background-color: white;
    font-family: 'Open Sans';
    font-size: 14px;
    border-radius: 5px;
    color: black;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex: 1; /* This ensures they take equal space */
}

.NetworkRatePrediction2 {
    background-color: white;
    font-family: 'Open Sans';
    font-size: 14px;
    border-radius: 5px;
    color: black;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex: 1; /* This ensures they take equal space */
}

.NetworkRatePrediction1 {
    background-color: white;
    font-family: 'Open Sans';
    font-size: 14px;
    border-radius: 5px;
    color: black;
    margin: 10px 0;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 50%;
}

.NetworkRatePrediction-container {
    display: flex;
    justify-content: space-between;
    width: 50%; /* Adjust as needed */
    margin: 0 auto;
}

.FullLaneAnalysis {
    transition: all 0.5s ease-in-out;
    color: white;
    width: 100%;
    max-height: 600px;
    margin: 20px auto;
    font-family: 'Open Sans';
    background-color: #424242;
    margin-top: 20px;
}

.page {
    display: none;
    transition: all 0.5s ease-in-out;
    color: white;
    width: 100%;
    max-height: 1170px;
    margin: 20px auto;
    font-family: 'Open Sans';
    background-color: #424242;
}

.page.active {
    left: 0;
    display: block;
    font-family: 'Open Sans';
}

.page.inactive {
    left: -100%;
    font-family: 'Open Sans';
    transition: all 0.5s ease-out;
}

.distance {
    margin: 0 0.5%;
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 22px;
    position: absolute;
    right: 27px;
}

.saveBtn {
    background-color: #ff8f1c;
    color: white;
    padding: 5px 15px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
}

.saveBtn:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.validationPopup {
    border-style: solid; 
    border-color: #FF0000;
    background-color: #FF0000;
    margin-right: 20px;
    border-radius: 5px;
}

.disclaimer {
    color: white;
    font-family: 'Open Sans';
    font-size: 14px;
    text-align: center;
}

.notavail {
    color: white;
    font-family: 'Open Sans';
    font-size: 14px;
    text-align: center;
}

::placeholder {
    opacity: 1; /* Firefox */
}

.batchreply {
    color: white;
    text-align: right;
    margin-left: 211px;
    background: none; 
    border: none;
    cursor: pointer;
    display: none;
    font-family: 'Open Sans';
    font-size: 14px;
    text-decoration: underline;
}

.cancelbatchreply {
    color: white;
    text-align: right;
    margin-left: 249px;
    background: none; 
    border: none;
    cursor: pointer;
    display: none;
    font-family: 'Open Sans';
    font-size: 14px;
    text-decoration: underline;
}

.draftresponse2 {
    width: 300px;
    margin: 20px auto;
    background-color: #424242;
    color: white;
    display: none;
}

.DraftEmail2 {
    width: 297px;
    height: 280px;
    padding: 5px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    font-size: 13px;
    border-radius: 5px;
    resize: none;
}

.createDraftBtn2 {
    background-color: #ff8f1c;
    color: white;
    padding: 5px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
    margin-left: 74px;
}

.createDraftBtn2:hover {
    background-color: #45a049;
    border-radius: 5px;
}

h1 {
    text-align: center;
    color: white;
    font-weight: bold;
    font-family: 'Open Sans';
    margin-right: 8px;
}

.form-input2 {
    width: calc(100% - 20px);
    margin-bottom: 10px;
    padding: 8px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    border-radius: 5px;
}

.button-container {
    max-width: 300px;
    margin: auto;
    width: 60%;
    padding: 10px;
    gap: 10px;
}

.button-container2 {
    display: flex;
    justify-content: flex-start; /* Align buttons to the right */
    gap: 10px; /* Add space between buttons */
    align-items: start; /* Align items vertically */
}

.billingrulsBtn {
    font-weight: bold;
    font-family: 'Open Sans';
    text-align: center;
    font-size: 14px;
    width: 120px;
    padding: 10px;
    background-color: #ff8f1c;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.backBtnbilling {
    background-color: #ff8f1c;
    color: white;
    padding: 5px 15px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
}

.backBtnbilling:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.billingruls {
    width: 300px;
    margin: 20px auto;
    background-color: #424242;
    color: white;
}

.saveBtnbilling {
    background-color: #ff8f1c;
    color: white;
    padding: 5px 15px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
    margin-left: 149px;
}

.saveBtnbilling:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.chart-tabs {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 5px;
    border-radius: 5px;
}

.chart-tabsflat {
    display: flex;
    align-items: center;
    background-color: #424242;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    margin: 0 0.5%;
    position: absolute;
    right: 27px;
    top: 5px;
}

.tab-btn {
    background-color: white;
    color: #333;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    padding: 5px 10px;
    margin-right: 5px;
    font-size: 12px;
}

.tab-btn.active {
    background-color: white;
    border-color: #45a049;
    border-radius: 5px;
    border: 1px solid #45a049;
}

.tab-btn2 {
    background-color: #424242;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    padding: 5px 10px;
    margin-right: 5px;
    font-size: 12px;
    color: white;
}

.tab-btn2.active {
    background-color: #424242;
    border-color: #ff8f1c;
    border-radius: 5px;
    border: 1px solid #ff8f1c;
    color: white;
}

.tab-btn:last-child {
    margin-right: 0;
}

.tab-btn:hover {
    background-color: #D3D3D3;
    border-radius: 5px;
}

.tab-btn:focus {
    outline: none;
    box-shadow: 0 0 2px #E0E0E0;
}

.tab-btn2:last-child {
    margin-right: 0;
}

.tab-btn2:hover {
    background-color: #D3D3D3;
    border-radius: 5px;
}

.tab-btn2:focus {
    outline: none;
    box-shadow: 0 0 2px #E0E0E0;
}

.InfoNeeded {
    max-width: 350px;
    margin: auto;
    width: 60%;
    padding: 10px;
}

.form-group {
    width: 24%;
    margin: 0 0.5%;
}

.form-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.form-row2 {
    display: flex;
    flex-wrap: wrap;
}

.topbuttons {
    margin-left: 25px;
}

.rate-draft-container {
    /*display: flex;*/
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px; /* Adjust the gap as needed */
}

.rate-draft-container2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}

.draftresponse {
    margin-left: 28px;
    margin-top: 60px;
}

.draftresponse label {
    display: block;
    margin-bottom: 10px;
}

.lane-analysis {
    display: none;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.DraftEmail {
    width: calc(100% - 6%);
    height: 278px;
    margin-top: 10px;
    padding: 5px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    border-radius: 5px;
    resize: none;
    margin: 0 0.5%;
}

.createDraftBtn {
    background-color: #ff8f1c;
    color: white;
    padding: 5px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-family: 'Open Sans';
    border-radius: 5px;
    /* margin-left: 986px;
    width: 92px;*/
}

.createDraftBtn:hover {
    background-color: #45a049;
    border-radius: 5px;
}

.customerform2 {
    margin-top: 57px;;
    margin-left: 25px;
    gap: 5px;
}

.snackbar {
    background-color: red;
    color: white;
    font-family: 'Open Sans';
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    max-width: 600px;
    margin: auto;
    width: 60%;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@keyframes fadein {
    from {top: 0; opacity: 0;}
    to {top: 30px; opacity: 1;}
}

@keyframes fadeout {
    from {top: 30px; opacity: 1;}
    to {top: 0; opacity: 0;}
}
