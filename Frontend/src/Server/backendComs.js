import { signIn } from "../Authentication";

export async function getURL() {
    const resp = await fetch(`/api/lisam`);
    if(!resp.ok) {
        console.log("Error")
    }

    const result = await resp.json();
    console.log(result);
    return result.url;
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

export async function Register() {
    fetch('/api/register', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            group: 10,
            name: "100% Authentic Lisam",
        })
    })
}

export async function UnRegister() {
    fetch('/api/register', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            group: -1,
            name: "",
        })
    })
}

export async function getRegistered() {
    const resp = await fetch(`/api/register`);
    if(!resp.ok) {
        console.log("Error")
    }

    const result = await resp.json();
    console.log(result);
    return {group : result.group, name : result.name};
}