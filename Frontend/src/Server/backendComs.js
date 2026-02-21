
export async function GetDefaultValue(id) {
    const resp = await fetch(`/api/lisam/${id}`);
    if(!resp.ok) {
        console.log("Error")
    }

    const result = await resp.json();
    console.log(result);
}

export async function getURL() {
    const resp = await fetch(`/api/lisam`);
    if(!resp.ok) {
        console.log("Error")
    }

    const result = await resp.json();
    console.log(result);
}

export async function putURL(url) {
    fetch('/api/lisam', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
        })
    })
}

export async function GetURL() {

}

export async function PutURL() {

}