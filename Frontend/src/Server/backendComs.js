
export async function GetDefaultValue(id) {
    await fetch(`/api/lisam/${id}`).then(data => {
        console.log(data)
    })
}