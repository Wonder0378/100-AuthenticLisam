
export async function GetDefaultValue(id) {
    const resp = await fetch(`/api/lisam/${id}`);
    if(!resp.ok) {
        console.log("Error")
    }

    const result = await resp.json();
    console.log(result);
}