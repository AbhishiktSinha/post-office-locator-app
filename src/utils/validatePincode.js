export default function validatePincode(pincode) {
    if ( pincode === '') {
        return 'Pincode can not be empty';
    }
    if ( containsOnlyNumbers(pincode) ) {

        if (pincode.length == 6) {
            return 'VALID'
        }
        else {
            return 'Pincode must be 6 digits long'
        }
    }
    else {
        return 'Pincode can only contain numbers'
    }
}

function containsOnlyNumbers(inputString) {
    const regex = /^\d+$/;
    return regex.test(inputString);
}
