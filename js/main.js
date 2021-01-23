function getAllRequest() {
    axios.get('https://securetransfer.redsis.com/rest/forms/v1/teamGoAny/payload')
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function getByIdRequest() {
    axios.get('https://securetransfer.redsis.com/rest/forms/v1/teamGoAny/payload/:payloadId/file/:fileId')
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function postRequest() {
    axios.post('https://securetransfer.redsis.com/rest/forms/v1/teamGoAny/payload/:payloadId/submit', {
            data: 'NewItem'
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}