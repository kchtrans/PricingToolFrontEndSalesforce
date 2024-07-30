public with sharing class KCHQuoteToolController {

    private static String clientId;
    private static String clientSecret;

    static {
        if (!Test.isRunningTest()) {
            GreenScreensConfig__c greenscreensConfiguration = GreenScreensConfig__c.getOrgDefaults();
            clientId = greenscreensConfiguration.ClientId__c;
            clientSecret = greenscreensConfiguration.clientSecret__c;

            System.debug('clientId:' + clientId);
            System.debug('clientSecret:' + clientSecret);
        } else {
            clientId = 'id';
            clientSecret = 'secret';
        }
    }
    
    @RemoteAction
    public static String getKCHAccessToken() {
        String url = 'https://kch-api-services.net/pricing_app/auth';
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');

        Map<String, String> payload = new Map<String, String>();
        payload.put('username', 'salesforce_connect');
        payload.put('password', '$6IMI$uJjZiOJyq6');

        String body = JSON.serialize(payload);
        System.debug('KCH access code body:' + body);
        request.setBody(body);

        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            Map<String, Object> result = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            String token = (String) result.get('token');
            return token;
        } else {
            throw new AuraHandledException('Error fetching KCH access token: ' + response.getBody());
        }
    }
    
    @RemoteAction
    public static String getratequote(String accessTokenPT, String pickupCity, String pickupState, String pickupZip, String dropoffCity, String dropoffState, String dropoffZip, String transportType, String pickupDateTime) {
        String url = 'https://kch-api-services.net/pricing_app/lane_data';
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setHeader('Authorization', 'Bearer ' + accessTokenpt);
    
        // Prepare the payload
        Map<String, Object> payload = new Map<String, Object>();
        payload.put('id', 'test_request_id');
        payload.put('pickup_time', pickupDateTime);
        payload.put('transport_type', transportType.toLowerCase());
        
        List<Map<String, String>> stops = new List<Map<String, String>>();
        stops.add(new Map<String, String>{ 'city' => pickupCity, 'state' => pickupState, 'zip' => pickupZip});
        stops.add(new Map<String, String>{ 'city' => dropoffCity, 'state' => dropoffState, 'zip' => dropoffZip});
        payload.put('stops', stops);
    
        request.setBody(JSON.serialize(payload));
    
        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return response.getBody();
        } else {
            throw new AuraHandledException('Error fetching quote: ' + response.getBody());
        }
    }

    @RemoteAction
    public static String getAccessToken() {
        String url = 'https://api.greenscreens.ai/v1/auth/token';
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/x-www-form-urlencoded');

        String body = 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret;
        System.debug('access code body:' + body);
        request.setBody(body);

        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            Map<String, Object> result = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            String access_token = (String) result.get('access_token');
            return access_token;
        } else {
            throw new AuraHandledException('Error fetching access token: ' + response.getBody());
        }
    }
    
    @RemoteAction
    public static String fetchLaneQuoteHistory(String pickupCity, String pickupState, String pickupZip, String dropoffCity, String dropoffState, String dropoffZip, String equipmentType, String description, String pickupDateTime) {
        String accessToken = getAccessToken();
        
        String dateFrom = pickupDateTime.substring(0, 10);  // Extract date part from pickupDateTime
        String dateTo = String.valueOf(Integer.valueOf(dateFrom.substring(0, 4)) - 1) + dateFrom.substring(4);  // Calculate one year before

        String url = 'https://app.greenscreens.ai/v1/datalake/network-history-aggregated?transportType=' + equipmentType + '&originCountry=US&originState=' + pickupState + '&originCity=' + pickupCity + '&originZip=' + pickupZip + '&destinationCountry=US&destinationState=' + dropoffState + '&destinationCity=' + dropoffCity + '&destinationZip=' + dropoffZip + '&hasExtraStops=false&dateFrom=' + dateTo + '&dateTo=' + dateFrom + '&region=KMA&currency=USD';

        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('GET');
        request.setHeader('Authorization', 'Bearer ' + accessToken);

        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return response.getBody();
        } else {
            throw new AuraHandledException('Error fetching lane quote history: ' + response.getBody());
        }
    }
    
    @RemoteAction
    public static String fetchNegotiationCoach(String pickupCity, String pickupState, String pickupZip, String dropoffCity, String dropoffState, String dropoffZip, String equipmentType, String description, String pickupDateTime) {
        String accessToken = getAccessToken();
        
        String url = 'https://app.greenscreens.ai/v1/marketintelligence/negotiation-advice?transportType=' + equipmentType + '&originCountry=US&originState=' + pickupState + '&originCity=' + pickupCity + '&originZip=' + pickupZip + '&destinationCountry=US&destinationState=' + dropoffState + '&destinationCity=' + dropoffCity + '&destinationZip=' + dropoffZip + '&hasExtraStops=false&pickUpDateTime=' + pickupDateTime + '&currency=USD&region=KMA';

        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(url);
        request.setMethod('GET');
        request.setHeader('Authorization', 'Bearer ' + accessToken);

        HttpResponse response = http.send(request);
        if (response.getStatusCode() == 200) {
            return response.getBody();
        } else {
            throw new AuraHandledException('Error fetching lane quote history: ' + response.getBody());
        }
    }
    
    @RemoteAction
    public static List<Account> searchAccounts(String searchText) {
        String searchQuery = '%' + searchText + '%';
        return [SELECT Id, Name FROM Account WHERE rtms__TMS_Type__c INCLUDES ('Customer') AND Name LIKE :searchQuery LIMIT 100];
    }
    
    @RemoteAction
    public static String createLoad(String customerName, String modeName, String description, String weight, String pickupCity, String pickupState, String dropoffCity, String dropoffState, Decimal buyRate, Decimal sellRate, Decimal bestRate) {
        Decimal decimalweight = decimal.valueOf(weight);
        
        rtms__Load__c newLoad = new rtms__Load__c();
        newLoad.rtms__Customer__c = customerName;
        newLoad.rtms__Mode__c = modeName;
        newLoad.rtms__Equipment_Type__c = 'a0nDn000000fOpiIAE';
        newLoad.rtms__Load_Status__c = 'Unassigned';
        newLoad.rtms__Bill_To__c = customerName;
        newLoad.rtms__Total_Weight__c = decimalweight;
        newLoad.rtms__Weight_Units__c = 'lbs';
        newLoad.rtms__Cargo_Summary__c = description;
        newLoad.OwnerId = UserInfo.getUserId();

        try {
            insert newLoad;
            return newLoad.Id;
        } catch (Exception e) {
            throw new AuraHandledException('Error creating load: ' + e.getMessage());
        }
    }
}