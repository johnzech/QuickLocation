export const latLonToThreeWords = async(lat,lon) => {
    let words = '';
    let nearestPlace = '';
    const response = await fetch('https://api.what3words.com/v3/convert-to-3wa?coordinates='+lat+'%2C'+lon+'&key=QGBWU5XY');
    const json = await response.json();
    words = json.words;
    return words;
};

export const latlonToAddress = async(lat,lon) => {
    let address = '';
    // place your mapquest key here
    let key = '';
    const response = await fetch('http://open.mapquestapi.com/geocoding/v1/reverse?key='+key+'&location='+lat+','+lon);
    const json = await response.json();
    let location = json.results[0].locations[0]
    address = location.street + ' ' + location.adminArea5 + ',' + location.adminArea3 + ',' + location.postalCode + ',' + location.adminArea1;
    return address;
}